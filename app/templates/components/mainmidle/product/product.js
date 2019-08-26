if ($(window).width() > 1220) {
$('.product-fastshow').magnificPopup({
    type: 'ajax',
		overflowY: 'scroll',
		callbacks: {
			ajaxContentAdded: function() {
        let content = $(this.content);
        let sliderItems = content.find('.card-slider-item')
        let navItems = content.find('.card-slider__nav .card-slider-item');
        let nav = 3;
        if(navItems.length < 3){
          nav = navItems.length 
        }
        if(sliderItems.length > 1){
          content.find('.card-slider__for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.card-slider__nav',
            dots: true,
          });
          content.find('.card-slider__nav').slick({
            slidesToShow: nav,
            slidesToScroll: 1,
            asNavFor: '.card-slider__for',
            dots: false,
            focusOnSelect: true,
            arrows: false,
            centerMode: true
          });
        }
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
else{
  $('.product-fastshow').on('click', (e) => {
    e.preventDefault();
  })
}

let cuter = (element, size, n)=>{
  let text = null, fullText = null;  
  for(var i = 0; i < element.length; i++) {    
    if(element[i].innerHTML.length > size) {
      fullText = element[i].innerHTML;
      text = element[i].innerHTML.substr(0,n);
      element[i].setAttribute('data-text', element[i].innerHTML)          
      element[i].addEventListener('mouseover', (event) => {       
        event.target.innerHTML = event.target.dataset.text;     
      })  
      element[i].addEventListener('mouseout', (event) => {
        event.target.innerHTML = event.target.innerHTML.substr(0,n) + '...';
      })
      element[i].innerHTML = text + '...';
    }
  else {
    text = element[i].innerHTML;
  }    
  }
}

let productName = document.querySelectorAll('.product-name')
if(productName){
  cuter(productName, 40, 45)  
}

