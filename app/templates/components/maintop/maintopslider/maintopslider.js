function sliderCarousel(){
    $('.maintopslider').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop:true,
        items:1,
        smartSpeed:450,
        nav: false,    
        dotsContainer:'.maintopslider-nav .owl-dots',
        responsive : {
            1220:{
                nav: true,
                navContainer: '.maintopslider-nav',
                navText:["<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel-right'></svg>", "<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel'></svg>"]
            }
        }
    });
}

$(document).ready(function() {
    sliderCarousel();
    $(window).resize(
        sliderCarousel()
    );
});
