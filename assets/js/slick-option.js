$(function () {
  $(".works-list").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    speed: 7000,
    cssEase: "linear",
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
