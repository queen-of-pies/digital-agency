$(document).ready(function () {
  const portfolioSlider = new Swiper(".portfolio-slider", {
    // slidesPerView: 3,
    slidesPerGroup: 3,
    // spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: ".portfolio__button--next",
      prevEl: ".portfolio__button--prev",
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
      nextEl: ".reviews__button--next",
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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header__nav")
      .classList.toggle("header__nav--visible");
    document.querySelector("body").classList.toggle("preventScroll");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  $(document).keyup(keyCloseModal);

  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  function openModal() {
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $("body").css("overflow", "hidden");
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").css("overflow", "auto");
  }

  function keyCloseModal(e) {
    if (e.keyCode === 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $("body").css("overflow", "auto");
    }
  }
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Введите Ваше имя",
          minlength: "Имя должно быть не короче 2 символов",
        },
        email: {
          required: "Введите Ваш email",
          email: "Ваш email должен быть в формате name@domain.com",
        },
        phone: {
          required: "Введите Ваш номер телефона",
          minlength: "Номер телефона должен быть не короче 10 цифр",
        },
      },
    });
  });

  $(".input-phone").mask("+7(999)999-99-99");
});
