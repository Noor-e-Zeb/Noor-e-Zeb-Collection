const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const expanded = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', String(expanded));
  });
}

const rootImageFiles = [
  'ChatGPT Image May 15, 2026, 01_10_50 AM - Copy.png',
  'ChatGPT Image May 15, 2026, 01_15_17 AM.png',
  'ChatGPT Image May 15, 2026, 01_17_24 AM - Copy.png',
  'ChatGPT Image May 15, 2026, 01_28_13 AM - Copy.png',
  'ChatGPT Image May 15, 2026, 12_55_08 AM (1).png',
  'Copilot_20260515_011110 - Copy.png',
  'Copilot_20260515_011527 - Copy.png',
  'Copilot_20260515_014105.png',
  'Copilot_20260515_022818.png',
  'Copilot_20260515_023048 - Copy.png',
  'Copilot_20260515_023447 - Copy - Copy.png',
  'Copilot_20260515_024048.png',
  'Copilot_20260515_024750 - Copy - Copy.png',
  'Copilot_20260515_025034.png',
  'Copilot_20260515_025139 - Copy - Copy.png',
  'Copilot_20260515_025541 - Copy.png',
  'Copilot_20260515_025659.png',
  'Copilot_20260515_025837 - Copy.png',
  'Copilot_20260517_053547 - Copy.png',
  'Copilot_20260517_054044 - Copy - Copy.png',
  'Copilot_20260517_054416 - Copy - Copy.png',
  'Copilot_20260517_054523 - Copy - Copy.png',
  'Copilot_20260517_054726.png',
  'Copilot_20260517_055119.png',
  'Use AI Image May 15, 2026, 02_42_42 - Copy - Copy.png',
  'Use AI Image May 15, 2026, 02_53_08.png',
];

const airRingItems = Array.from({ length: 40 }, (_, index) => {
  const imagePath = index < 12 ? `images/air-ring-${index + 1}.png` : '';
  const title = `Air Ring (Earrings) ${String(index + 1).padStart(2, '0')}`;
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
  const imagePath = rootImageFiles[index] || (index < 12 ? `images/air-ring-${index + 1}.png` : `images/${[
    'noor-heritage-choker.jpg',
    'sahar-bridal-earrings.jpg',
    'zeb-diamond-set.jpg',
  ][index % 3]}`);
  const title = isCombo
    ? `Air Ring + Necklace Set ${String(index + 1).padStart(2, '0')}`
    : `Necklace (Haar) ${String(index + 1).padStart(2, '0')}`;
  const description = isCombo
    ? 'Signature combo set featuring a luxe air ring and necklace pairing.'
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
          ? `<img class="card-image" src="${encodeURI(item.imagePath)}" alt="${item.title}" />`
          : `<div class="card-placeholder"><span>Luxury</span><strong>${item.badge}</strong></div>`}
        <div class="card-overlay"></div>
      </div>
      <div class="card-content">
        <div class="card-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p class="product-price">${item.price}</p>
        <p class="product-desc">${item.description}</p>
      </div>
    </article>
  `).join('');
}
