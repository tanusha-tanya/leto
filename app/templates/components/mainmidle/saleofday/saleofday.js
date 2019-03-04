function owlInitialize() {
  $('.saleofday-items').owlCarousel({
    loop:true,
    smartSpeed:450,
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

/*$(window).resize(function() {
  $('.saleofday-items').slick('unslick');
  $('.saleofday-links').slick('unslick');
  $('.saleofday-items').owlCarousel('destroy');
  if ($(window).width() < 768) {
    owlInitialize();
  }
  else{    
    slickInitialize();
  }
});*/
