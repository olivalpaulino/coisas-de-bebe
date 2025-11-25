// Função para formatar preço
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Função para renderizar produtos na página inicial
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => `
        <a href="${product.link}" target="_blank" class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-price">
                    R$ <span class="product-price-symbol">${formatPrice(product.price)}</span>
                </div>
                <div class="product-title">${product.title}</div>
                ${product.freeShipping ? '<div class="product-free-shipping">Frete grátis</div>' : ''}
            </div>
        </a>
    `).join('');
}

// Renderizar produtos quando a página carregar
document.addEventListener('DOMContentLoaded', renderProducts);

