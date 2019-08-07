let cardCarousel = ()=>{
  $('.card-slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.card-slider__nav',
    dots: true,    
  });
  $('.card-slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.card-slider__for',    
    focusOnSelect: true,
    arrows: false,  
    dots: true,   
  });
}

cardCarousel();

$('.js-img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  },
  callbacks: {
			ajaxContentAdded: function()    {  
         $('body').trigger('ajaxReady') 
      }
    }         
});
