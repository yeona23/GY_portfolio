var swiper = new Swiper(".sect03-slide", {
  slidesPerView: 2.5,
  spaceBetween: 70,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
  speed: 800,
});

var swiper02 = new Swiper(".sect04-slide", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
  speed: 1000,
});

var swiper03 = new Swiper(".sect03 .w_popup", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper04 = new Swiper(".page-scroll", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  // mousewheel: true,
});
$(".sect04 .aside ul li").click(function () {
  let target = $(this).index();

  $(".sect04 .swiper-pagination-bullet").eq(target).trigger("click");
  $(this).addClass("active").siblings().removeClass("active");
});
// $(".sect04 .aside ul li").on("click", function () {
//   $(this).addClass("active").siblings().removeClass("active");
// });

var swiper05 = new Swiper(".m_slide", {
  pagination: {
    el: ".main-pagination",
    clickable: true,
  },
});
var swiper06 = new Swiper(".part03_mslide", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper07 = new Swiper(".part04_mslide", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper08 = new Swiper(".part03 .m_popup", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
