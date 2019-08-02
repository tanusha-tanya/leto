$('.bestseller-carousel').owlCarousel({
    autoplayHoverPause:true,  
    dots: true,
    autoheight: false,
    center: true,
    onInitialized: callbackBestseller,
    responsive : {
       0: {
        items:1,
        center: true,
        autoHeight:true
      },
       768: {
        items:2,
        center: false,
        margin: 20
      },
       1220:{
        items:4,
        center: false,
        margin: 40,
        nav: true,
        navText:["<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel'></svg>", "<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel-right'></svg>"],
        slideBy: 4
       }
    }
});
function callbackBestseller(event) {
  $('body').trigger('ajaxReady');
}