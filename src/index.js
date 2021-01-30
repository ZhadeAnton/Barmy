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

//slider
const slider = {
  slideshow: document.querySelector('.slideshow'),
  dotsContainer: document.querySelector('.slideshow__dots'),
  slides: document.querySelectorAll('.slider__item'),
  prevArrow: document.querySelector('.slideshow--left-arrow'),
  nextArrow: document.querySelector('.slideshow--right-arrow'),
};

let curSlide = 0;
const maxSlides = slider.slides.length;

const createDots = function () {
  slider.slides.forEach(function (_, i) {
    slider.dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}">
        <div class="dots__dot--bg" style="background-image: url(slider-${
          i + 1
        }.jpg)"></div>
      </button>`
    );
  });
};

const activeDots = function (slide) {
  document.querySelectorAll('.dots__dot').forEach((dot) => {
    dot.classList.remove('dots__dot--active');
  });

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slider.slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activeDots(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activeDots(curSlide);
};

createDots();
activeDots(0);
goToSlide(0);

slider.nextArrow.addEventListener('click', nextSlide);
slider.prevArrow.addEventListener('click', prevSlide);
