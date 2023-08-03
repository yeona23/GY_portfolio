$(".sect03 .icon_prev").click(function () {
  $(".sect03 .swiper-button-prev").trigger("click");
});

$(".sect03 .icon_next").click(function () {
  $(".sect03 .swiper-button-next").trigger("click");
});

$(".sect04 .icon_prev").click(function () {
  $(".sect04 .swiper-button-prev").trigger("click");
});

$(".sect04 .icon_next").click(function () {
  $(".sect04 .swiper-button-next").trigger("click");
});

$(".sect03 .aside span").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
$(".sect03-slide .swiper-slide:nth-child(1)").click(function () {
  $(".wide").fadeIn();
  $(".wide .popup_box01").fadeIn();
  $(".shadow").show();
});
$(".sect03-slide .swiper-slide:nth-child(2)").click(function () {
  $(".wide").fadeIn();
  $(".wide .popup_box02").fadeIn();
  $(".shadow").show();
});
$(".sect03-slide .swiper-slide:nth-child(3)").click(function () {
  $(".wide").fadeIn();
  $(".wide .popup_box03").fadeIn();
  $(".shadow").show();
});
$(".sect03-slide .swiper-slide:nth-child(4)").click(function () {
  $(".wide").fadeIn();
  $(".wide .popup_box04").fadeIn();
  $(".shadow").show();
});
$(".sect03-slide .swiper-slide:nth-child(5)").click(function () {
  $(".wide").fadeIn();
  $(".wide .popup_box05").fadeIn();
  $(".shadow").show();
});
$(".sect03-slide .swiper-slide:nth-child(6)").click(function () {
  $(".wide").fadeIn();
  $(".wide .popup_box06").fadeIn();
  $(".shadow").show();
});
$(".sect03-slide .swiper-slide:nth-child(7)").click(function () {
  $(".wide").fadeIn();
  $(".wide .popup_box07").fadeIn();
  $(".shadow").show();
});
$(".sect03-slide .swiper-slide:nth-child(8)").click(function () {
  $(".wide").fadeIn();
  $(".wide .popup_box08").fadeIn();
  $(".shadow").show();
});
$(".btn_close").click(function () {
  $(".popup_box01").fadeOut();
  $(".popup_box02").fadeOut();
  $(".popup_box03").fadeOut();
  $(".popup_box04").fadeOut();
  $(".popup_box05").fadeOut();
  $(".popup_box06").fadeOut();
  $(".popup_box07").fadeOut();
  $(".popup_box08").fadeOut();
  $(".shadow").hide();
  $("body").removeClass("notScroll");
  $(".popup_box05").empty();
});

$(".shadow").on("click", function () {
  $(".popup_box01").fadeOut();
  $(".popup_box02").fadeOut();
  $(".popup_box03").fadeOut();
  $(".popup_box04").fadeOut();
  $(".popup_box05").fadeOut();
  $(".popup_box06").fadeOut();
  $(".popup_box07").fadeOut();
  $(".popup_box08").fadeOut();
  $(".shadow").hide();
  $(".popup_box05").empty();
});

$(function () {
  $(".wide .popup_box05").on("click", function () {
    let tpl = `
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WFtP5rCwwHY"
        title="YouTube video player"
        frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div>
`;
    $(".wide .popup_box05").append(tpl);
    $(".wide .popup_box05").show();
    $(".shadow").show();
  });
});

$(".shadow").mouseup(function (e) {
  if ($(".popup_box05").has(e.target).length === 0) {
    $(".popup_box05").fadeOut();
    $(".shadow").fadeOut();
  }
});
// SECTION03 pagination
$(".sect03 .aside .all").on("click", function () {
  $(".sect03-slide .swiper-pagination-bullet:nth-child(1)").trigger("click");
});
$(".sect03 .aside .ad").on("click", function () {
  $(".sect03-slide .swiper-pagination-bullet:nth-child(1)").trigger("click");
});
$(".sect03 .aside .leaflet").on("click", function () {
  $(".sect03-slide .swiper-pagination-bullet:nth-child(3)").trigger("click");
});
$(".sect03 .aside .character").on("click", function () {
  $(".sect03-slide .swiper-pagination-bullet:nth-child(4)").trigger("click");
});
$(".sect03 .aside .motion").on("click", function () {
  $(".sect03-slide .swiper-pagination-bullet:nth-child(5)").trigger("click");
});
$(".sect03 .aside .logo_layout").on("click", function () {
  $(".sect03-slide .swiper-pagination-bullet:nth-child(6)").trigger("click");
});
$(".sect03 .aside .pakage").on("click", function () {
  $(".sect03-slide .swiper-pagination-bullet:nth-child(7)").trigger("click");
});
$(".sect03 .aside .page").on("click", function () {
  $(".sect03-slide .swiper-pagination-bullet:nth-child(7)").trigger("click");
});

$(".sect04 .aside .sadaharu").click(function () {
  $(".sect04-slide .swiper-pagination-bullet:nth-child(1)").trigger("click");
});
$(".sect04 .aside .bma").click(function () {
  $(".sect04-slide .swiper-pagination-bullet:nth-child(2)").trigger("click");
});

swiper02.on("slideChange", function () {
  $(".sect04 .aside ul li").removeClass("active");
  if (
    $(".swiper-pagination-bullet:first-child").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $(".sect04 .aside .sadaharu").addClass("active");
  }
  if (
    $(".swiper-pagination-bullet:nth-child(2)").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $(".sect04 .aside .bma").addClass("active");
  }
});

window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
var $html = $("html");
var page = 1;
var lastPage = $(".content").length;

$html.animate({ scrollTop: 0 }, 1000);

$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });
});

$(document).ready(function () {
  $(".back").click(function () {
    var offset = $(".sect01").offset();
    $("html").animate({ scrollTop: offset.top }, 300);
  });
});
// li click scroll event
$(document).ready(function () {
  $(".sect01 .pt01 ul li:nth-child(1)").click(function () {
    var offset = $(".sect01").offset();
    $("html").animate({ scrollTop: offset.top }, 300);
  });
});
$(document).ready(function () {
  $(".sect01 .pt01 ul li:nth-child(2)").click(function () {
    var offset = $(".sect02").offset();
    $("html").animate({ scrollTop: offset.top }, 300);
  });
});
$(document).ready(function () {
  $(".sect01 .pt01 ul li:nth-child(3)").click(function () {
    var offset = $(".sect03").offset();
    $("html").animate({ scrollTop: offset.top }, 300);
  });
});
$(document).ready(function () {
  $(".sect01 .pt01 ul li:nth-child(4)").click(function () {
    var offset = $(".sect04").offset();
    $("html").animate({ scrollTop: offset.top }, 300);
  });
});
$(document).ready(function () {
  $(".sect01 .pt01 ul li:nth-child(5)").click(function () {
    var offset = $(".sect05").offset();
    $("html").animate({ scrollTop: offset.top }, 300);
  });
});
$(".sect01 .pt01 ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
$(window).scroll(function () {
  let Cscroll = $(this).scrollTop();
  $(".scroll").text(Cscroll);
  if (Cscroll >= $(".sect01").offset().top) {
    $(".sect01 .pt01 ul li:nth-child(1)")
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  if (Cscroll >= $(".sect02").offset().top) {
    $(".sect01 .pt01 ul li:nth-child(2)")
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  if (Cscroll >= $(".sect03").offset().top) {
    $(".sect01 .pt01 ul li:nth-child(3)")
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  if (Cscroll >= $(".sect04").offset().top) {
    $(".sect01 .pt01 ul li:nth-child(4)")
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  if (Cscroll >= $(".sect05").offset().top) {
    $(".sect01 .pt01 ul li:nth-child(5)")
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
});

$(".mode span:nth-child(1)").on("click", function () {
  if ($(this).hasClass("active") == true) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
  if ($(this).hasClass("active") == true) {
    $("html").addClass("dark");
  } else {
    $("html").removeClass("dark");
  }
  if ($(this).hasClass("active") == true) {
    $(".pt02 .back").addClass("dark");
  } else {
    $(".pt02 .back").removeClass("dark");
  }
  if ($(this).hasClass("active") == true) {
    $(".pt02 .main_title").addClass("dark");
  } else {
    $(".pt02 .main_title").removeClass("dark");
  }
});

// //page_number

$(".pt01 ul li").click(function () {
  let num = $("li").index(this);
  $(".num .current-page-no").text(num + 1);
});

// $(window).scroll(function () {
//   let Cscroll = $(this).scrollTop();
// });

$("header .hamburger").click(function () {
  $("header .side_menu").addClass("show");
});
$("header .side_close").click(function () {
  $("header .side_menu").removeClass("show");
});

$(".mode_btn div:nth-child(2)").on("click", function () {
  if ($(this).hasClass("active") == true) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
  if ($(this).hasClass("active") == true) {
    $("html").addClass("dark");
  } else {
    $("html").removeClass("dark");
  }
  if ($(this).hasClass("active") == true) {
    $("header .side_menu > div:nth-child(1) img").addClass("dark");
  } else {
    $("header .side_menu > div:nth-child(1) img").removeClass("dark");
  }
  if ($(this).hasClass("active") == true) {
    $("main .m_slide .part01 img").addClass("dark");
  } else {
    $("main .m_slide .part01 img").removeClass("dark");
  }
});

$("main .part02 .detail_btn").on("click", function () {
  $("main .part02 .profile_popup").addClass("show");
});
$("main .part02 .close_btn").on("click", function () {
  $("main .part02 .profile_popup").removeClass("show");
});

$(".part03 .sub_title span").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
// part03 pagination
$(".part03 .sub_title .all").on("click", function () {
  $(".part03_mslide .swiper-pagination-bullet:nth-child(1)").trigger("click");
});
$(".part03 .sub_title .ad").on("click", function () {
  $(".part03_mslide .swiper-pagination-bullet:nth-child(1)").trigger("click");
});
$(".part03 .sub_title .leaflet").on("click", function () {
  $(".part03_mslide .swiper-pagination-bullet:nth-child(3)").trigger("click");
});
$(".part03 .sub_title .character").on("click", function () {
  $(".part03_mslide .swiper-pagination-bullet:nth-child(4)").trigger("click");
});
$(".part03 .sub_title .motion").on("click", function () {
  $(".part03_mslide .swiper-pagination-bullet:nth-child(5)").trigger("click");
});
$(".part03 .sub_title .logo_layout").on("click", function () {
  $(".part03_mslide .swiper-pagination-bullet:nth-child(6)").trigger("click");
});
$(".part03 .sub_title .pakage").on("click", function () {
  $(".part03_mslide .swiper-pagination-bullet:nth-child(7)").trigger("click");
});
$(".part03 .sub_title .page").on("click", function () {
  $(".part03_mslide .swiper-pagination-bullet:nth-child(8)").trigger("click");
});
// part03 popup
$(".part03_mslide .swiper-slide:nth-child(1)").click(function () {
  $(".mobile").fadeIn();
  $(".mobile .popup_box01").fadeIn();
  $(".shadow").show();
});
$(".part03_mslide .swiper-slide:nth-child(2)").click(function () {
  $(".mobile").fadeIn();
  $(".mobile .popup_box02").fadeIn();
  $(".shadow").show();
});
$(".part03_mslide .swiper-slide:nth-child(3)").click(function () {
  $(".mobile").fadeIn();
  $(".mobile .popup_box03").fadeIn();
  $(".shadow").show();
});
$(".part03_mslide .swiper-slide:nth-child(4)").click(function () {
  $(".mobile").fadeIn();
  $(".mobile .popup_box04").fadeIn();
});
$(".part03_mslide .swiper-slide:nth-child(5)").click(function () {
  $(".mobile").fadeIn();
  $(".mobile .popup_box05").fadeIn();
});
$(".part03_mslide .swiper-slide:nth-child(6)").click(function () {
  $(".mobile").fadeIn();
  $(".mobile .popup_box06").fadeIn();
});
$(".part03_mslide .swiper-slide:nth-child(7)").click(function () {
  $(".mobile").fadeIn();
  $(".mobile .popup_box07").fadeIn();
});
$(".part03_mslide .swiper-slide:nth-child(8)").click(function () {
  $(".mobile").fadeIn();
  $(".mobile .popup_box08").fadeIn();
});
$(".btn_close").click(function () {
  $(".popup_box01").fadeOut();
  $(".popup_box02").fadeOut();
  $(".popup_box03").fadeOut();
  $(".popup_box04").fadeOut();
  $(".popup_box05").fadeOut();
  $(".popup_box06").fadeOut();
  $(".popup_box07").fadeOut();
  $(".popup_box08").fadeOut();
  $(".shadow").hide();
  $("body").removeClass("notScroll");
  // $(".popup_box05").empty();
});
// part03 notification
$(".part03 .icon_prev").click(function () {
  $(".part03 .part03_mslide .swiper-button-prev").trigger("click");
});

$(".part03 .icon_next").click(function () {
  $(".part03 .part03_mslide .swiper-button-next").trigger("click");
});

$(".part04 .sub_title span").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
//part04 pagination
$(".part04 .sub_title .sadaharu").click(function () {
  $(".part04_mslide .swiper-pagination-bullet:nth-child(1)").trigger("click");
});
$(".part04 .sub_title .bma").click(function () {
  $(".part04_mslide .swiper-pagination-bullet:nth-child(2)").trigger("click");
});

// part04 notification
$(".part04 .icon_prev").click(function () {
  $(".part04 .swiper-button-prev").trigger("click");
});

$(".part04 .icon_next").click(function () {
  $(".part04 .swiper-button-next").trigger("click");
});

//main slide

$("header nav ul li:nth-child(1)").on("click", function () {
  $(".m_slide .main-pagination .swiper-pagination-bullet:nth-child(1)").trigger(
    "click"
  );
});
$("header nav ul li:nth-child(2)").on("click", function () {
  $(".m_slide .main-pagination .swiper-pagination-bullet:nth-child(2)").trigger(
    "click"
  );
});
$("header nav ul li:nth-child(3)").on("click", function () {
  $(".m_slide .main-pagination .swiper-pagination-bullet:nth-child(3)").trigger(
    "click"
  );
});
$("header nav ul li:nth-child(4)").on("click", function () {
  $(".m_slide .main-pagination .swiper-pagination-bullet:nth-child(4)").trigger(
    "click"
  );
});
$("header nav ul li:nth-child(5)").on("click", function () {
  $(".m_slide .main-pagination .swiper-pagination-bullet:nth-child(5)").trigger(
    "click"
  );
});

swiper05.on("slideChange", function () {
  $("header nav ul li").removeClass("active");
  if (
    $(".swiper-pagination-bullet:nth-child(1)").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $("header nav ul li:nth-child(1)")
      .addClass("active")
      .siblings()
      .removeClass("active");
    $("footer .ft01").show();
    $("footer .ft02").hide();
    $("footer .ft03").hide();
  }
  if (
    $(".swiper-pagination-bullet:nth-child(2)").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $("header nav ul li:nth-child(2)")
      .addClass("active")
      .siblings()
      .removeClass("active");
    $("footer .ft01").show();
    $("footer .ft02").hide();
    $("footer .ft03").hide();
  }
  if (
    $(".swiper-pagination-bullet:nth-child(3)").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $("header nav ul li:nth-child(3)")
      .addClass("active")
      .siblings()
      .removeClass("active");
    $("footer .ft01").hide();
    $("footer .ft02").show();
    $("footer .ft03").hide();
  }
  if (
    $(".swiper-pagination-bullet:nth-child(4)").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $("header nav ul li:nth-child(4)")
      .addClass("active")
      .siblings()
      .removeClass("active");
    $("footer .ft01").hide();
    $("footer .ft02").hide();
    $("footer .ft03").show();
  }
  if (
    $(".swiper-pagination-bullet:nth-child(5)").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $("header nav ul li:nth-child(5)")
      .addClass("active")
      .siblings()
      .removeClass("active");
    $("footer .ft01").show();
    $("footer .ft02").hide();
    $("footer .ft03").hide();
  }
});

$("header nav ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$("footer .ft02 .icon_prev").click(function () {
  $(".part03_mslide .swiper-button-prev").trigger("click");
});

$("footer .ft02 .icon_next").click(function () {
  $(".part03_mslide .swiper-button-next").trigger("click");
});

$("footer .ft03 .icon_prev").click(function () {
  $(".part04_mslide .swiper-button-prev").trigger("click");
});

$("footer .ft03 .icon_next").click(function () {
  $(".part04_mslide .swiper-button-next").trigger("click");
});
