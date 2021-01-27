import './scss/main.scss';

const hamburger = document.querySelector('.header__hamburger');
const header = document.querySelector('.header');
const hasFade = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburger.addEventListener('click', function () {
  if (!header.classList.contains('open')) {
    console.log(body);
    header.classList.add('open');
    body.classList.remove('noscroll');
    hasFade.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
      console.log(body);
    });
  } else {
    header.classList.remove('open');
    body.classList.add('noscroll');
    hasFade.forEach((element) => {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    });
  }
});
