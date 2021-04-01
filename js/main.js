const portfolioSlider = new Swiper(".portfolio-slider", {
  slidesPerView: "auto",
  // slidesPerGroup: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".portfolio-slider__button--next",
    prevEl: ".portfolio-slider__button--prev",
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
