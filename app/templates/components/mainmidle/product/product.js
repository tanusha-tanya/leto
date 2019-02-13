if ($(window).width() > 1220) {
$('.product-fastshow').magnificPopup({
    type: 'ajax',
		overflowY: 'scroll',
		callbacks: {
			ajaxContentAdded: function() {
            $(this.content).find('.card-slider__for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.card-slider__nav'
            });
            $(this.content).find('.card-slider__nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.card-slider__for',
                dots: true,
                focusOnSelect: true,
                arrows: false,
            });
            quantity($(this.content).find('#quantity'));           
        }
    }
    
});
function quantity(){
    if(quantity){
  let minus = $(this.content).find('.card-minus')
  let plus = $(this.content).find('.card-plus')

  quantity.onblur = ()=>{
    if(quantity.value === '')
      quantity.value = 1
  }

  quantity.onkeypress = (e)=> {
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
  minus.addEventListener('click', ()=>{
    quantityChange(false)
  })

  plus.addEventListener('click', ()=>{
    quantityChange(true)
  })

  let quantityChange = function(sign){
    let value = quantity.value
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
    quantity.value = value
  }
}

const valume = $(this.content).find('.card-volume')

if(valume){
  const valumeNum = valume.querySelectorAll('.card-volume-num');
  const price = $(this.content).find('#price');
  valumeNum.forEach((elem)=>{
    elem.addEventListener('click', ()=>{
      let valumeId = elem.id
      price.textContent = price.dataset[valumeId]
    })
  })
}
}
}
else{    
    $('.product-fastshow').click(function(e) {
        e.preventDefault();
    })
}