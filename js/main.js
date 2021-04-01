const portfolioSlider = new Swiper(".portfolio-slider", {
  slidesPerView: 3.5,

  spaceBetween: 30,
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
const reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,
  // slidesPerView: 2,
  // spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    // prevEl: ".portfolio-slider__button--prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
