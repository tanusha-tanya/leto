const quantity = document.querySelector('#quantity')
if(quantity){
  let minus = document.querySelector('.card-minus')
  let plus = document.querySelector('.card-plus')

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

const valume = document.querySelector('.card-volume')

if(valume){
  const valumeNum = valume.querySelectorAll('.card-volume-num');
  const price = document.querySelector('#price');
  valumeNum.forEach((elem)=>{
    elem.addEventListener('click', ()=>{
      let valumeId = elem.id
      price.textContent = price.dataset[valumeId]
    })
  })
}
