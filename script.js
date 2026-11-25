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

let activeLesson = null;

function setupPieceLesson(trigger, cancelPendingHovers) {
  const popup = document.getElementById(trigger.getAttribute('aria-controls'));
  const minSideWidth = Number(popup.dataset.minSideWidth ?? 510);
  const preferLeft = popup.dataset.side === 'left';
  const closeButton = popup.querySelector('.imperion__close');
  const scrollArea = popup.querySelector('.imperion__scroll');
  const pageButtons = [...popup.querySelectorAll('[data-lesson-page]')];
  const pages = pageButtons.map((button) => document.getElementById(button.getAttribute('aria-controls')));
  const stepButtons = popup.querySelectorAll('[data-lesson-step]');
  const [previousButton, nextButton] = stepButtons;
  const status = popup.querySelector('.imperion__status');
  const contains = (target) => trigger.contains(target) || popup.contains(target);
  const hasFocus = () => popup.contains(document.activeElement);
  const isOpen = () => activeLesson === lesson;
  let currentPage = 0;
  let hoverTimer;
  let openedExplicitly = false;
  let besideTrigger = false;

  function cancelHover() {
    clearTimeout(hoverTimer);
    hoverTimer = undefined;
  }

  const lesson = { contains, hasFocus, cancelHover, close: closePopup, place: placePopup };

  function placePopup(recenter = true) {
    const edge = 12;
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight;
    const triggerRect = trigger.getBoundingClientRect();
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const gap = Math.min(46, triggerRect.width / 4);
    const sideBoundary = triggerCenter + (preferLeft ? -gap : gap);
    const sideWidth = (preferLeft ? sideBoundary : viewportWidth - sideBoundary) - edge;
    const useSide = besideTrigger && sideWidth >= minSideWidth;
    const width = Math.min(980, useSide ? sideWidth : viewportWidth - 2 * edge);
    const sideLeft = preferLeft ? sideBoundary - width : sideBoundary;
    const left = useSide ? sideLeft : (viewportWidth - width) / 2;

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
    if (pageButtons.length) {
      previousButton.disabled = index === 0;
      nextButton.disabled = index === pages.length - 1;
      status.textContent = `${index + 1} of ${pages.length}`;
    }
    if (isOpen()) {
      scrollArea.scrollTop = 0;
      placePopup(false);
    }
  }

  function openPopup(explicit, pointerType) {
    cancelPendingHovers();
    if (!explicit && activeLesson?.hasFocus()) return;
    activeLesson?.close();
    openedExplicitly = explicit;
    besideTrigger = pointerType !== 'touch';
    showPage(0);
    activeLesson = lesson;
    popup.showPopover();
    scrollArea.scrollTop = 0;
    placePopup();
    trigger.setAttribute('aria-expanded', 'true');
    if (explicit) closeButton.focus({ preventScroll: true });
  }

  function closePopup(restoreFocus = false) {
    cancelHover();
    if (!isOpen()) return;
    activeLesson = null;
    popup.hidePopover();
    trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger.focus({ preventScroll: true });
  }

  trigger.disabled = false;

  trigger.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') cancelHover();
  });

  trigger.addEventListener('pointermove', (event) => {
    // Dismissing an overlapping panel can expose a trigger under a stationary pointer.
    if (event.pointerType !== 'mouse' || isOpen() || hoverTimer !== undefined) return;
    hoverTimer = setTimeout(() => openPopup(false, 'mouse'), 230);
  });

  function scheduleHoverClose(event) {
    if (event.pointerType !== 'mouse') return;
    cancelHover();
    if (!isOpen() || openedExplicitly) return;
    hoverTimer = setTimeout(() => {
      if (!popup.matches(':hover') && !trigger.matches(':hover') && !hasFocus()) {
        closePopup();
      }
    }, 350);
  }

  trigger.addEventListener('pointerleave', scheduleHoverClose);
  popup.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') cancelHover();
  });
  popup.addEventListener('pointerleave', scheduleHoverClose);

  trigger.addEventListener('click', (event) => {
    if (!isOpen()) {
      openPopup(true, event.pointerType);
    } else if (!openedExplicitly) {
      cancelHover();
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

  stepButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showPage(currentPage + Number(button.dataset.lessonStep));
      pages[currentPage].querySelector('h4').focus({ preventScroll: true });
    });
  });

  return lesson;
}

const lessonTriggers = document.querySelectorAll('.piece-lesson-trigger');

if (lessonTriggers.length && typeof HTMLElement.prototype.showPopover === 'function') {
  const cancelPendingHovers = () => lessons.forEach((lesson) => lesson.cancelHover());
  const lessons = [...lessonTriggers].map((trigger) => setupPieceLesson(trigger, cancelPendingHovers));

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || event.defaultPrevented) return;
    cancelPendingHovers();
    if (!activeLesson) return;
    event.preventDefault();
    activeLesson.close(activeLesson.hasFocus());
  });

  document.addEventListener('focusin', (event) => {
    if (activeLesson && !activeLesson.contains(event.target)) activeLesson.close();
  });

  document.addEventListener('click', (event) => {
    if (activeLesson?.contains(event.target)) return;
    cancelPendingHovers();
    activeLesson?.close();
  });

  window.addEventListener('resize', () => activeLesson?.place());
}
