$('.beneficiaries-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px'
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$('.gallery-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$('.news-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('header').addClass('fixed-header');
      $('header div').addClass('visible-title');
  }
  else {
      $('header').removeClass('fixed-header');
      $('header div').removeClass('visible-title');
  }
});
  
