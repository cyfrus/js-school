var $dots = $(".circle_container");
$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    appendDots: $dots
  })
});