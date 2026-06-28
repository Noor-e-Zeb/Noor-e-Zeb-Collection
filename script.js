const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const expanded = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', String(expanded));
  });
}
