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

const shopGallery = document.querySelector('.shop-page .shop-gallery');
if (shopGallery) {
  const galleryStage = shopGallery.querySelector('.shop-stage');
  const thumbnailGroup = shopGallery.querySelector('.shop-thumbnails');
  const thumbnailButtons = [...thumbnailGroup.querySelectorAll('button')];
  const boxLayer = galleryStage.querySelector('.shop-stage__box');
  const boardLayer = galleryStage.querySelector('.shop-stage__board');
  const pieceLayers = galleryStage.querySelectorAll('.shop-stage__piece');
  const galleryStatus = shopGallery.querySelector('.shop-gallery__status');

  thumbnailGroup.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-view]');
    if (!button || button.getAttribute('aria-pressed') === 'true') return;

    const { view, description } = button.dataset;
    galleryStage.dataset.view = view;
    galleryStage.setAttribute('aria-label', description);
    boxLayer.hidden = view !== 'product';
    boardLayer.hidden = view !== 'board';
    pieceLayers.forEach((piece) => {
      piece.hidden = view === 'board';
    });
    thumbnailButtons.forEach((thumbnail) => {
      thumbnail.setAttribute('aria-pressed', String(thumbnail === button));
    });
    galleryStatus.textContent = description;
  });

  thumbnailButtons.forEach((thumbnail) => {
    thumbnail.disabled = false;
  });
}
