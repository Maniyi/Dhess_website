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

const imperionTrigger = document.querySelector('#imperion-trigger');

if (imperionTrigger && typeof HTMLElement.prototype.showPopover === 'function') {
  const popup = document.querySelector('#imperion-popup');
  const closeButton = popup.querySelector('.imperion__close');
  const scrollArea = popup.querySelector('.imperion__scroll');
  const pageButtons = [...popup.querySelectorAll('[data-imperion-page]')];
  const pages = pageButtons.map((button) => document.getElementById(button.getAttribute('aria-controls')));
  const [previousButton, nextButton] = popup.querySelectorAll('[data-imperion-step]');
  const status = popup.querySelector('.imperion__status');
  const isOpen = () => popup.matches(':popover-open');
  let currentPage = 0;
  let hoverTimer;
  let openedExplicitly = false;
  let besideTrigger = false;

  function placePopup(recenter = true) {
    const edge = 12;
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight;
    const triggerRect = imperionTrigger.getBoundingClientRect();
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const sideStart = triggerCenter + Math.min(46, triggerRect.width / 4);
    const sideWidth = viewportWidth - sideStart - edge;
    const useSide = besideTrigger && sideWidth >= 510;
    const width = Math.min(980, useSide ? sideWidth : viewportWidth - 2 * edge);
    const left = useSide ? sideStart : (viewportWidth - width) / 2;

    popup.style.setProperty('--imperion-width', `${width}px`);
    popup.style.setProperty('--imperion-left', `${left}px`);
    const height = popup.getBoundingClientRect().height;
    const center = useSide ? triggerRect.top + triggerRect.height / 2 : viewportHeight / 2;
    const top = recenter ? center - height / 2 : popup.getBoundingClientRect().top;
    popup.style.setProperty('--imperion-top', `${Math.max(edge, Math.min(top, viewportHeight - height - edge))}px`);
  }

  function showPage(index) {
    currentPage = index;
    pages.forEach((page, pageIndex) => {
      page.hidden = pageIndex !== index;
      pageButtons[pageIndex].setAttribute('aria-pressed', String(pageIndex === index));
    });
    previousButton.disabled = index === 0;
    nextButton.disabled = index === pages.length - 1;
    status.textContent = `${index + 1} of ${pages.length}`;
    scrollArea.scrollTop = 0;
    if (isOpen()) placePopup(false);
  }

  function openPopup(explicit, pointerType) {
    clearTimeout(hoverTimer);
    openedExplicitly = explicit;
    besideTrigger = pointerType !== 'touch';
    showPage(0);
    popup.showPopover();
    placePopup();
    imperionTrigger.setAttribute('aria-expanded', 'true');
    if (explicit) closeButton.focus({ preventScroll: true });
  }

  function closePopup(restoreFocus = false) {
    clearTimeout(hoverTimer);
    if (!isOpen()) return;
    popup.hidePopover();
    imperionTrigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) imperionTrigger.focus({ preventScroll: true });
  }

  imperionTrigger.disabled = false;

  imperionTrigger.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'mouse') return;
    clearTimeout(hoverTimer);
    if (!isOpen()) hoverTimer = setTimeout(() => openPopup(false, 'mouse'), 230);
  });

  function scheduleHoverClose(event) {
    if (event.pointerType !== 'mouse') return;
    clearTimeout(hoverTimer);
    if (!isOpen() || openedExplicitly) return;
    hoverTimer = setTimeout(() => {
      if (!popup.matches(':hover') && !imperionTrigger.matches(':hover') && !popup.contains(document.activeElement)) {
        closePopup();
      }
    }, 350);
  }

  imperionTrigger.addEventListener('pointerleave', scheduleHoverClose);
  popup.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') clearTimeout(hoverTimer);
  });
  popup.addEventListener('pointerleave', scheduleHoverClose);

  imperionTrigger.addEventListener('click', (event) => {
    if (!isOpen()) {
      openPopup(true, event.pointerType);
    } else if (!openedExplicitly) {
      clearTimeout(hoverTimer);
      openedExplicitly = true;
      closeButton.focus({ preventScroll: true });
    } else {
      closePopup(true);
    }
  });

  closeButton.addEventListener('click', () => closePopup(true));

  pageButtons.forEach((button, index) => {
    button.addEventListener('click', () => showPage(index));
  });

  [previousButton, nextButton].forEach((button) => {
    button.addEventListener('click', () => {
      showPage(currentPage + Number(button.dataset.imperionStep));
      pages[currentPage].querySelector('h4').focus({ preventScroll: true });
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || event.defaultPrevented) return;
    if (isOpen()) event.preventDefault();
    closePopup(popup.contains(document.activeElement));
  });

  document.addEventListener('focusin', (event) => {
    if (isOpen() && event.target !== imperionTrigger && !popup.contains(event.target)) closePopup();
  });

  document.addEventListener('click', (event) => {
    if (!imperionTrigger.contains(event.target) && !popup.contains(event.target)) closePopup();
  });

  window.addEventListener('resize', () => {
    if (isOpen()) placePopup();
  });
}
