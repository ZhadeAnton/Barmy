import $ from 'jquery';
import 'slick-carousel';
window.$ = window.jQuery = $;

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: false,
    focusOnSelect: true,
    prevArrow:
      "<button type='button' class='slick-prev'></button>",
    nextArrow:
      "<button type='button' class='slick-next'></button>",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  });
});
