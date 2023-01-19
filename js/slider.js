var swiper = new Swiper(".main-slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".main-slider-next",
    prevEl: ".main-slider-prev",
  },
});
