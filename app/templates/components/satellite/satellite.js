let satelliteSlider = ()=>{
    $('.cartgoods-satellite-slider').owlCarousel({
        center: true,
        arrows: false,
        dots: true,
        onInitialized: callback,
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
            items:3,
            center: true,
            loop: true 
        }
        }
    });
    function callback(event) {
        $('body').trigger('ajaxReady');
    }
}
satelliteSlider()