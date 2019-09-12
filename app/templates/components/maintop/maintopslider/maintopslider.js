function sliderCarousel(){
    let maintopslider = $('.maintopslider');
    maintopslider.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:4500,
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
                navText:["<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel'></svg>", "<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel-right'></svg>"]
            }
        }
    }); 

    let autoplay = () => {        
        maintopslider.trigger('play.owl.autoplay',[4500])        
    }

    $('.maintopslider-nav .owl-dot, .maintopslider-nav .owl-next, .maintopslider-nav .owl-prev' ).on('click', function(){
        maintopslider.trigger('stop.owl.autoplay');
        setTimeout(() => {
            autoplay()
          }, 1000);
    })   
}

$(document).ready(function() {
    sliderCarousel();
    $(window).resize(function(){
        sliderCarousel()
    });
});
