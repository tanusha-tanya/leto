$('.maintopslider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    items:1,
    smartSpeed:450,
    responsive : {
       1220:{
        nav: true,
        navText:["<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel-right'></svg>", "<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel'></svg>"]
       }
    }
});
