// Sistema de busca e atualização de informações dos produtos do Mercado Livre

// Cache para armazenar informações buscadas
const productInfoCache = new Map();

// Função para extrair ID do produto da URL da imagem
function extractProductIdFromImage(imageUrl) {
    if (!imageUrl) return null;
    
    // As imagens do ML geralmente contêm o ID no formato: D_NQ_NP_2X_[número]-[ID]-...
    // Exemplo: D_NQ_NP_2X_897453-MLA96112590357_102025-F.webp
    // O ID seria: MLA96112590357
    // Padrão: ML seguido de letra e 10+ dígitos
    const patterns = [
        /ML[A-Z]\d{10,}/,  // Padrão principal: MLA12345678901
        /MLB\d{10,}/,      // Formato Brasil
        /MLA\d{10,}/,      // Formato Argentina
        /MLM\d{10,}/,      // Formato México
    ];
    
    for (const pattern of patterns) {
        const match = imageUrl.match(pattern);
        if (match) {
            return match[0];
        }
    }
    
    return null;
}

// Função para resolver link encurtado do Mercado Livre e extrair ID do produto
async function resolveProductLink(shortLink, imageUrl) {
    try {
        // Primeiro tenta extrair da imagem
        if (imageUrl) {
            const imageId = extractProductIdFromImage(imageUrl);
            if (imageId) {
                return imageId;
            }
        }
        
        // Tenta extrair ID diretamente se o link já tiver o formato completo
        const match = shortLink.match(/ML[A-Z]\d{10,}/);
        if (match) {
            return match[0];
        }
        
        // Para links encurtados (/sec/...), tenta resolver o link
        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(shortLink)}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                const htmlContent = data.contents;
                
                // Extrai o ID do produto do HTML
                const idMatch = htmlContent.match(/ML[A-Z]\d{10,}/);
                if (idMatch) {
                    return idMatch[0];
                }
                
                // Tenta extrair da URL final no HTML
                const urlMatches = htmlContent.match(/https?:\/\/[^"'\s]*ML[A-Z]\d{10,}[^"'\s]*/g);
                if (urlMatches && urlMatches.length > 0) {
                    const productIdMatch = urlMatches[0].match(/ML[A-Z]\d{10,}/);
                    if (productIdMatch) {
                        return productIdMatch[0];
                    }
                }
            }
        } catch (fetchError) {
            console.warn('Erro ao resolver link via proxy:', fetchError);
        }
        
        return null;
    } catch (error) {
        console.error('Erro ao resolver link:', error);
        return null;
    }
}

// Função para buscar informações do produto usando a API do Mercado Livre
async function fetchProductInfo(productId) {
    if (!productId) return null;
    
    try {
        // Usa a API pública do Mercado Livre com proxy CORS
        const apiUrl = `https://api.mercadolibre.com/items/${productId}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
        
        const response = await fetch(proxyUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.contents) {
            throw new Error('Resposta vazia da API');
        }
        
        let productData;
        try {
            productData = typeof data.contents === 'string' ? JSON.parse(data.contents) : data.contents;
        } catch (parseError) {
            console.error('Erro ao parsear resposta:', parseError);
            return null;
        }
        
        // Busca informações do vendedor
        let sellerInfo = null;
        if (productData.seller_id) {
            try {
                const sellerUrl = `https://api.mercadolibre.com/users/${productData.seller_id}`;
                const sellerProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(sellerUrl)}`;
                const sellerResponse = await fetch(sellerProxyUrl);
                
                if (sellerResponse.ok) {
                    const sellerData = await sellerResponse.json();
                    if (sellerData.contents) {
                        sellerInfo = typeof sellerData.contents === 'string' 
                            ? JSON.parse(sellerData.contents) 
                            : sellerData.contents;
                    }
                }
            } catch (e) {
                console.warn('Erro ao buscar info do vendedor (não crítico):', e);
            }
        }
        
        return {
            productId: productData.id || productId,
            title: productData.title || 'Produto',
            availableQuantity: productData.available_quantity || 0,
            soldQuantity: productData.sold_quantity || 0,
            sellerNickname: sellerInfo?.nickname || productData.seller?.nickname || productData.seller?.id || 'Loja',
            price: productData.price || 0,
            permalink: productData.permalink || productData.permalink
        };
    } catch (error) {
        console.error('Erro ao buscar informações do produto:', error);
        return null;
    }
}

// Função principal para buscar e atualizar informações de um produto
async function updateProductInfo(productLink, productId, imageUrl) {
    // Verifica cache primeiro
    const cacheKey = productLink;
    const cached = productInfoCache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp) < 300000) { // Cache de 5 minutos
        return cached.data;
    }
    
    try {
        // Resolve o link se necessário
        let mlProductId = productId;
        if (!mlProductId) {
            mlProductId = await resolveProductLink(productLink, imageUrl);
        }
        
        if (!mlProductId) {
            console.warn('Não foi possível obter ID do produto para:', productLink);
            return null;
        }
        
        // Busca informações do produto
        const info = await fetchProductInfo(mlProductId);
        
        if (info) {
            // Armazena no cache
            productInfoCache.set(cacheKey, {
                data: info,
                timestamp: Date.now()
            });
        }
        
        return info;
    } catch (error) {
        console.error('Erro ao atualizar informações do produto:', error);
        return null;
    }
}

// Função para atualizar informações de todos os produtos
async function updateAllProductsInfo() {
    if (!window.products || !Array.isArray(window.products)) {
        console.warn('Lista de produtos não encontrada');
        return [];
    }
    
    const products = window.products;
    const results = [];
    
    // Processa produtos sequencialmente para não sobrecarregar
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        
        // Adiciona delay entre requisições para não sobrecarregar
        if (index > 0) {
            await new Promise(resolve => setTimeout(resolve, 800));
        }
        
        try {
            const info = await updateProductInfo(product.link, product.mlProductId, product.image);
            
            if (info) {
                // Atualiza o objeto do produto
                product.storeName = info.sellerNickname;
                product.soldQuantity = info.soldQuantity;
                product.availableQuantity = info.availableQuantity;
                product.mlProductId = info.productId; // Salva o ID para futuras consultas
                
                // Atualiza a UI imediatamente
                if (typeof updateProductCardUI === 'function') {
                    updateProductCardUI(product.id, info);
                } else if (typeof displayProductInfo === 'function') {
                    displayProductInfo(product.id, info);
                }
            }
            
            results.push({ productId: product.id, info });
        } catch (error) {
            console.error(`Erro ao atualizar produto ${product.id}:`, error);
            results.push({ productId: product.id, info: null });
        }
    }
    
    return results;
}

// Função para exibir informações do produto na UI
function displayProductInfo(productId, info) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (!productCard || !info) return;
    
    // Cria ou atualiza elemento de informações da loja
    let storeInfo = productCard.querySelector('.product-store-info');
    if (!storeInfo) {
        storeInfo = document.createElement('div');
        storeInfo.className = 'product-store-info';
        const productInfo = productCard.querySelector('.product-info');
        if (productInfo) {
            productInfo.appendChild(storeInfo);
        }
    }
    
    storeInfo.innerHTML = `
        <div class="store-name">🏪 ${info.sellerNickname}</div>
        <div class="product-stats">
            <span class="sold-count">✅ ${formatNumber(info.soldQuantity)} vendidos</span>
            <span class="available-count">📦 ${formatNumber(info.availableQuantity)} disponíveis</span>
        </div>
    `;
}

// Função auxiliar para formatar números
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Auto-atualização periódica (a cada 10 minutos)
let updateInterval = null;

function startAutoUpdate() {
    // Atualiza imediatamente
    updateAllProductsInfo();
    
    // Configura atualização periódica
    updateInterval = setInterval(() => {
        updateAllProductsInfo();
    }, 600000); // 10 minutos
}

function stopAutoUpdate() {
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
}

// Exporta funções para uso global
window.productInfo = {
    updateProductInfo,
    updateAllProductsInfo,
    displayProductInfo,
    startAutoUpdate,
    stopAutoUpdate,
    productInfoCache
};

