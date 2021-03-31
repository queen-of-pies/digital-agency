const portfolioSlider = new Swiper(".portfolio-slider", {
  slidesPerView: 3.5,
  // Navigation arrows
  navigation: {
    nextEl: ".portfolio-slider__button--next",
    prevEl: ".portfolio-slider__button--prev",
  },
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    567: {
      slidesPerView: 1.5,
    },
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3.5,
    },
  },
});
