$('.saleofday-items').owlCarousel({
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    smartSpeed:450,
    dots: true,
    autoheight: false,
    center: true,
    items: 1,
    responsive: {
      768:{
        items: 1,
        center: false,
        dots: false,
        URLhashListener:true,
        smartSpeed:450,
        animateOut: 'slideOut',
        animateIn: 'flipInX'
      }
    }
});
