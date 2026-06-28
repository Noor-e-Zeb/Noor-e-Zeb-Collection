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
  const isReal = index < 12;
  const imagePath = isReal ? `images/air-ring-${index + 1}.png` : '';
  const title = isReal ? `Air Ring ${String(index + 1).padStart(2, '0')}` : `Luxury Air Ring ${String(index + 1).padStart(2, '0')}`;
  const description = isReal
    ? 'Premium air ring crafted with a polished luxury finish.'
    : 'Clean gold-toned placeholder designed to keep the grid elegant and full.';

  return { title, description, imagePath, icon: isReal ? '💍' : '✨' };
});

const grid = document.querySelector('.bracelets-grid');

if (grid) {
  grid.innerHTML = airRingItems.map((item, index) => `
    <article class="bracelet-card" style="animation-delay:${0.04 + index * 0.01}s">
      <div class="card-image-wrapper">
        ${item.imagePath
          ? `<img class="card-image" src="${item.imagePath}" alt="${item.title}" />`
          : `<div class="card-placeholder"><span>Luxury</span><strong>Air Ring</strong></div>`}
        <div class="card-overlay"></div>
      </div>
      <div class="card-content">
        <div class="card-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p class="product-price">1100 RS</p>
        <p class="product-desc">${item.description}</p>
      </div>
    </article>
  `).join('');
}
