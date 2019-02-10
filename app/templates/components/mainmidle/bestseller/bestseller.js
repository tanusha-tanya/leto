$('.bestseller-carousel').owlCarousel({
    autoplayHoverPause:true,
    loop:true,
    //smartSpeed:450,
    dots: true,
    autoheight: false,
    center: true,
    responsive : {
       0: {
        items:1,
        center: true
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
