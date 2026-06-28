const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const expanded = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', String(expanded));
  });
}

const airRingItems = Array.from({ length: 40 }, (_, index) => {
  const imagePath = index < 12 ? `images/air-ring-${index + 1}.png` : '';
  const title = `Air Ring ${String(index + 1).padStart(2, '0')}`;
  const description = index < 12
    ? 'Premium air ring crafted with a polished luxury finish.'
    : 'Elegant gold-toned air ring designed to keep the collection feeling complete and rich.';

  return {
    title,
    description,
    imagePath,
    icon: '💍',
    price: '700 RS',
    badge: 'Air Ring',
  };
});

const necklaceItems = Array.from({ length: 40 }, (_, index) => {
  const isCombo = index % 4 === 0;
  const imagePath = index < 3 ? `images/${[
    'noor-heritage-choker.jpg',
    'sahar-bridal-earrings.jpg',
    'zeb-diamond-set.jpg',
  ][index]}` : '';
  const title = isCombo ? `Air Ring + Necklace Set ${String(index + 1).padStart(2, '0')}` : `Necklace ${String(index + 1).padStart(2, '0')}`;
  const description = isCombo
    ? 'Signature combo picture featuring an air ring and necklace set in a luxe finish.'
    : 'Statement necklace with refined detailing and premium imported glamour.';

  return {
    title,
    description,
    imagePath,
    icon: isCombo ? '👑' : '🪩',
    price: isCombo ? '1300 RS' : '1100 RS',
    badge: isCombo ? 'Combo Set' : 'Necklace',
  };
});

const allItems = [...airRingItems, ...necklaceItems];
const grid = document.querySelector('.bracelets-grid');

if (grid) {
  grid.innerHTML = allItems.map((item, index) => `
    <article class="bracelet-card" style="animation-delay:${0.03 + index * 0.005}s">
      <div class="card-image-wrapper">
        ${item.imagePath
          ? `<img class="card-image" src="${item.imagePath}" alt="${item.title}" />`
          : `<div class="card-placeholder"><span>Luxury</span><strong>${item.badge}</strong></div>`}
        <div class="card-overlay"></div>
      </div>
      <div class="card-content">
        <div class="card-icon">${item.icon}</div>
        <p class="product-badge">${item.badge}</p>
        <h3>${item.title}</h3>
        <p class="product-price">${item.price}</p>
        <p class="product-desc">${item.description}</p>
      </div>
    </article>
  `).join('');
}
