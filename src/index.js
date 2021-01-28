import './scss/main.scss';

const hamburger = document.querySelector('.header__hamburger');
const header = document.querySelector('.header');
const hasFade = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburger.addEventListener('click', function () {
  if (!header.classList.contains('open')) {
    console.log(body);
    header.classList.add('open');
    body.classList.add('noscroll');
    hasFade.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  } else {
    header.classList.remove('open');
    body.classList.remove('noscroll');
    hasFade.forEach((element) => {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    });
  }
});

//hover
const images = document.querySelectorAll('.scale-image');
const gallery = document.querySelector('.about__gallery');

gallery.addEventListener('mouseover', function (e) {
  if (!e.target) return;

  if (e.target.classList.contains('scale-image')) {
    images.forEach((img) => {
      img.style.transform = 'scale(0.9)';
      img.style.boxShadow = 'none';
    });

    e.target.style.transform = 'scale(1.1)';
    e.target.style.boxShadow = '0px 0px 23px 10px #000000';
  }
});

gallery.addEventListener('mouseleave', function () {
  images.forEach((img) => {
    img.style.transform = 'scale(1)';
    img.style.boxShadow = '0px 0px 23px 10px #000000';
  });
});
