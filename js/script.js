
$('.liders-slider').slick({
  arrows: true,
  slidesToShow: 4,
  infinity: true,
  waitForAnimate: false,
  easing: 'easeInOutExpo',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 560,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }
  ]
});
$('.news-card__slider').slick({
  arrows: true,
  slidesToShow: 2,
  infinity: true,
  waitForAnimate: false,
  easing: 'easeInOutExpo',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }
  ]
});
$('.slide-block').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  LazyLoad.update();
});
$(function(){
  $("#phone_mask").mask("8(999) 999-9999");
});
$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger, .header-menu').toggleClass('header-active');
    $('body').toggleClass('lock');
  })
  $('.header-link').click(function(event) {
    $(this).removeClass('header-active');
    $('body').removeClass('lock');
  })
  $('.shop-item__visible').click(function(event) {
    $('.closes').toggleClass('closeup');
  })
});