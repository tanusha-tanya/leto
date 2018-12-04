function owlInitialize() {
   if ($(window).width() < 768) {
     $('.saleofday-items').owlCarousel({
         loop:true,
         smartSpeed:450,
         animateOut: 'fadeOut',
         animateIn: 'fadeIn',
         dots: true,
         autoheight: false,
         center: true,
         items: 1
     });
     $('.saleofday-items').slick('unslick');
     $('.saleofday-links').slick('unslick');
   }else{
      $('.saleofday-items').owlCarousel('destroy');
      $('.saleofday-items').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       dots: false,
       fade: true,
       asNavFor: '.saleofday-links'
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
}


$(document).ready(function(e) {
   owlInitialize();
});

$(window).resize(function() {
   owlInitialize();
});
