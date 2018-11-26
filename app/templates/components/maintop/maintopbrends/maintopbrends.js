$('.maintopbrends-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    smartSpeed:450,
    dots: false,
    autoheight: false,
    center: true,
    responsive : {
       0: {
        items:3,
        center: true
      },
       768: {
        items:4,
        center: false
      },
       1220:{
        items:7,
        nav: true
       }
    }
});
