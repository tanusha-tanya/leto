$('.card-slider__for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.card-slider__nav'
});
$('.card-slider__nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.card-slider__for',
 dots: true,
 focusOnSelect: true,
 arrows: false,
});
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
