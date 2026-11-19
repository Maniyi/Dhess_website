const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

function setMenuOpen(open) {
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) setMenuOpen(false);
});

document.addEventListener('focusin', (event) => {
  if (!event.target.closest('.site-header')) setMenuOpen(false);
});

window.matchMedia('(width > 700px)').addEventListener('change', (event) => {
  if (event.matches) setMenuOpen(false);
});
