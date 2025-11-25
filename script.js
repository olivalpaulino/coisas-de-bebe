// Dados dos depoimentos
const testimonials = [
    {
        name: "Ana Paula Silva",
        state: "SP",
        rating: 5,
        text: "Comprei o kit de enxoval para minha bebê e fiquei encantada! A qualidade dos tecidos é excelente, muito macios e adequados para pele sensível. A entrega foi super rápida e o frete grátis foi um bônus. Recomendo muito!",
        product: "Kit Enxoval Bebê"
    },
    {
        name: "Marcos Oliveira",
        state: "RJ",
        rating: 5,
        text: "A cadeira de balanço foi um sucesso aqui em casa! Meu filho de 8 meses adora e sempre se acalma quando colocamos ele. O produto é muito seguro e bem estruturado. Valeu cada centavo!",
        product: "Cadeira de Balanço"
    },
    {
        name: "Juliana Costa",
        state: "MG",
        rating: 5,
        text: "Sou mãe de primeira viagem e estava perdida com o que comprar. Encontrei produtos incríveis neste site! Os macacões são perfeitos, não desbotam na lavagem e têm um caimento ótimo. O atendimento também foi nota 10!",
        product: "Kit Macacões"
    },
    {
        name: "Roberto Santos",
        state: "RS",
        rating: 5,
        text: "Comprei a bolsa maternidade e superou minhas expectativas! Tem espaço para tudo, é muito prática e bem organizada. Minha esposa ficou apaixonada. Os produtos são de qualidade premium. Parabéns pelo trabalho!",
        product: "Bolsa Maternidade"
    },
    {
        name: "Camila Fernandes",
        state: "BA",
        rating: 5,
        text: "Comprei vários itens para meu bebê e todos são de excelente qualidade. Os preços são justos e o frete grátis torna a compra ainda melhor. Virei cliente fiel e já indiquei para várias amigas!",
        product: "Diversos Produtos"
    },
    {
        name: "Ricardo Alves",
        state: "PR",
        rating: 5,
        text: "O que mais me impressionou foi a rapidez na entrega e a embalagem super cuidadosa. Os produtos chegaram intactos e perfeitos. Minha filha está linda com as roupinhas. Certamente voltarei a comprar!",
        product: "Roupas para Bebê"
    }
];

// Função para gerar estrelas de avaliação
function renderStars(rating) {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Função para formatar preço
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Função para renderizar produtos na página inicial
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => `
        <a href="${product.link}" target="_blank" class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-price">
                    R$ <span class="product-price-symbol">${formatPrice(product.price)}</span>
                </div>
                <div class="product-title">${product.title}</div>
                ${product.freeShipping ? '<div class="product-free-shipping">Frete grátis</div>' : ''}
                
                <!-- Informações da loja e estatísticas -->
                ${product.storeName || product.soldQuantity !== undefined || product.availableQuantity !== undefined ? `
                <div class="product-store-info">
                    ${product.storeName ? `<div class="store-name">🏪 ${product.storeName}</div>` : ''}
                    ${(product.soldQuantity !== undefined || product.availableQuantity !== undefined) ? `
                    <div class="product-stats">
                        ${product.soldQuantity !== undefined ? `<span class="sold-count">✅ ${formatNumber(product.soldQuantity)} vendidos</span>` : ''}
                        ${product.availableQuantity !== undefined ? `<span class="available-count">📦 ${formatNumber(product.availableQuantity)} disponíveis</span>` : ''}
                    </div>
                    ` : ''}
                </div>
                ` : ''}
            </div>
        </a>
    `).join('');
}

// Função auxiliar para formatar números
function formatNumber(num) {
    if (!num && num !== 0) return '0';
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Função para renderizar cursos
function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    
    if (!coursesGrid || !window.courses) return;
    
    coursesGrid.innerHTML = window.courses.map(course => `
        <div class="course-card">
            <div class="course-image-container">
                <img src="${course.image}" alt="${course.title}" class="course-image" loading="lazy">
                <div class="course-badge">📚 Curso Online</div>
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-subtitle">${course.subtitle}</p>
                <p class="course-description">${course.description}</p>
                
                <div class="course-features">
                    <h4 class="course-features-title">Recursos Principais:</h4>
                    <ul class="course-features-list">
                        ${course.features.map((feature, index) => `
                            <li class="course-feature-item">
                                <span class="course-feature-icon">✓</span>
                                <div class="course-feature-content">
                                    <strong>${feature}</strong>
                                    <p>${course.featureDetails[index] || ''}</p>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <a href="${course.link}" target="_blank" class="course-button">
                    Acessar Curso
                    <span class="course-button-arrow">→</span>
                </a>
            </div>
        </div>
    `).join('');
}

// Função para renderizar depoimentos
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    
    if (!testimonialsGrid) return;
    
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <div class="testimonial-avatar">
                    ${testimonial.name.charAt(0)}
                </div>
                <div class="testimonial-info">
                    <h3 class="testimonial-name">
                        ${testimonial.name}
                        <span class="testimonial-state">${testimonial.state}</span>
                    </h3>
                    <div class="testimonial-rating">${renderStars(testimonial.rating)}</div>
                </div>
            </div>
            <p class="testimonial-text">${testimonial.text}</p>
            <span class="testimonial-product">Produto: ${testimonial.product}</span>
        </div>
    `).join('');
}

// Torna products acessível globalmente
window.products = products;

// Renderizar produtos, cursos e depoimentos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCourses();
    renderTestimonials();
});

