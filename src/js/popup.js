const popup = {
  container: document.querySelector('.popup'),
  btnClose: document.querySelector('.popup__close'),
  overlay: document.querySelector('.popup__overlay'),
  btnsPopup: document.querySelectorAll('.button-popup'),
};

const body = document.querySelector('body');

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

const openModal = function () {
  popup.container.classList.remove('hidden');
  popup.overlay.classList.remove('hidden');
  popup.container.classList.add('animate__animated', 'animate__backInUp');
  body.style.paddingRight = `${getScrollbarWidth()}px`;
  body.classList.add('noscroll');
};

const closeModal = function () {
  popup.container.classList.add('hidden');
  popup.overlay.classList.add('hidden');
  body.classList.remove('noscroll');
  popup.container.classList.add('animate__backOutUp');
  popup.container.classList.remove('animate__animated', 'animate__backInDown');
  body.style.paddingRight = 0;
};

popup.btnsPopup.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

popup.btnClose.addEventListener('click', closeModal);
popup.overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});
