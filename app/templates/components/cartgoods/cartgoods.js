const cartQuantity = document.querySelectorAll('.cartgoods-quantity')
if(cartQuantity){
  let minus = document.querySelectorAll('.cartgoods-button-minus')
  let plus = document.querySelectorAll('.cartgoods-button-plus')
  let quantityCollection = document.querySelectorAll('.cartgoods-button-input')
  minus.forEach((elem) => {
    elem.addEventListener('click', () => {    
        changeAmount(elem, false)
    })
  })
  plus.forEach((elem) => {
    elem.addEventListener('click', () => {
        changeAmount(elem, true)
    })
  })

 let changeAmount = function(elem, sign){
     let goods = elem.closest('.cartgoods-item')
     let input = goods.querySelector('.cartgoods-button-input')
     let priceContainer = goods.querySelector('.cartcurrentprice')
     let price = priceContainer.dataset.price
     let value = input.value   
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
    input.value = value;
    priceContainer.textContent = price*value;
}

quantityCollection.forEach((quantity) =>{
    quantity.onblur = ()=>{
    if(quantity.value === '')
      {
          quantity.value = 1
      }
    let goods = quantity.closest('.cartgoods-item')
    let priceContainer = goods.querySelector('.cartcurrentprice')
    let price = priceContainer.dataset.price
    priceContainer.textContent = price * quantity.value
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
})
  /*quantity.onblur = ()=>{
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

const valume = document.querySelector('.card-volume')

if(valume){
  const valumeNum = valume.querySelectorAll('.card-volume-num');
  const price = document.querySelector('#price');
  valumeNum.forEach((elem)=>{
    elem.addEventListener('click', ()=>{
      let valumeId = elem.id
      price.textContent = price.dataset[valumeId]
    })
  })*/
}
