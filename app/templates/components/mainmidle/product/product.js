if ($(window).width() > 1220) {
$('.product-fastshow').magnificPopup({
    type: 'ajax',
		overflowY: 'scroll',
		callbacks: {
			ajaxContentAdded: function() {
        let content = $(this.content);
          content.find('.card-slider__for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.card-slider__nav'
          });
          content.find('.card-slider__nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.card-slider__for',
            dots: true,
            focusOnSelect: true,
            arrows: false,
          });
          let minus = content.find('.js-minus');
          let plus = content.find('.js-plus');
          let quantityCollection = content.find('.js-quantity');  
          quantity(minus, plus, quantityCollection);
          $(this.content).find(".js-img").on('click', (e)=>{
            e.preventDefault();
          })
          $('body').trigger('ajaxReady')          
        }
    }
    
});
let quantity = (minus, plus, quantityCollection) => {

  $(quantityCollection).on('blur', ()=>{
    if($(quantityCollection).val() === '')
      $(quantityCollection).val(1)
  })

  quantityCollection.onkeypress = (e)=> {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr <= '0' || chr > '9') {
      return false;
    }
}

  function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode)
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which)
      }

      return null;
    }
  $(minus).on('click', (e)=>{
    e.preventDefault();
    quantityChange(false)
  })

  $(plus).on('click', (e)=>{
    e.preventDefault();
    quantityChange(true)
  })

  let quantityChange = (sign) => {
    let value = $(quantityCollection).val()
    if (!sign){
      if(value <= 1){
        return
      }
      else{
         value--
      }
    }
    else{
       value++
    }
    $(quantityCollection).val(value);
  }
}
} 