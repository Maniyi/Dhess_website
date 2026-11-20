const galleryStage = document.querySelector('.shop-stage');
const thumbnailGroup = document.querySelector('.shop-thumbnails');
const thumbnailButtons = [...thumbnailGroup.querySelectorAll('button')];
const boxLayer = galleryStage.querySelector('.shop-stage__box');
const boardLayer = galleryStage.querySelector('.shop-stage__board');
const pieceLayers = galleryStage.querySelectorAll('.shop-stage__piece');
const galleryStatus = document.querySelector('.shop-gallery__status');

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

thumbnailGroup.hidden = false;
