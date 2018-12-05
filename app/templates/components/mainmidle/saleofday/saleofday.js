function owlInitialize() {
  $('.saleofday-items').owlCarousel({
    loop:true,
    smartSpeed:450,
    //animateOut: 'fadeOut',
    //animateIn: 'fadeIn',
    dots: true,
    autoheight: false,
    center: true,
    items: 1
  });
}

function slickInitialize(){
  $('.saleofday-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.saleofday-links',
    adaptiveHeight: true
  });
  $('.saleofday-links').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.saleofday-items',
    dots: false,
    arrows: false,
    vertical: true,
    focusOnSelect: true,
    centerMode: false,
    draggable: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        dots: true,
      }
    }]
  });
}

$(document).ready(function() {
  if ($(window).width() < 768) {
    owlInitialize();
  }
  else{
    slickInitialize();
  }
});

$(window).resize(function() {
  if ($(window).width() < 768) {
    $('.saleofday-items').slick('unslick');
    $('.saleofday-links').slick('unslick');
    owlInitialize();
  }
  else{
    $('.saleofday-items').owlCarousel('destroy');
    slickInitialize();
  }
});
