let navItems = document.querySelectorAll('.card-slider__nav .card-slider-item');
let nav = 3;
if(navItems.length < 3){
  nav = navItems.length 
}

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
    slidesToShow: nav,
    slidesToScroll: 1,
    asNavFor: '.card-slider__for',    
    focusOnSelect: true,
    arrows: false,  
    dots: false, 
    centerMode: true  
  });
}

let sliderItems = document.querySelectorAll('.card-slider-item')

if(sliderItems.length > 1){
  cardCarousel();
}


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
