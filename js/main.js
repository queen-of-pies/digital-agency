const portfolioSlider = new Swiper(".portfolio-slider", {
  slidesPerView: 3.5,

  spaceBetween: 100,

  // slidesPerGroup: 0.5,

  // Navigation arrows
  navigation: {
    nextEl: ".portfolio-slider__button--next",
    prevEl: ".portfolio-slider__button--prev",
  },
});
