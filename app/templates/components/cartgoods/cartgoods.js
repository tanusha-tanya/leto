let plusMinus = ()=>{
  let minus = document.querySelectorAll('.js-minus');
  let plus = document.querySelectorAll('.js-plus');
  let quantityCollection = document.querySelectorAll('.js-quantity');
  
  if(quantityCollection){
    minus.forEach((elem) => {
  elem.addEventListener('click', (e) => {    
    e.preventDefault();
    changeAmount(elem, false)
  })
})

plus.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    changeAmount(elem, true)
  })
})

let changeAmount = function(elem, sign){
  let input = elem.parentNode.querySelector('.js-quantity');
  let value = input.value; 
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
}

quantityCollection.forEach((quantity)=>{
  quantity.onkeypress = (e)=> {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr <= '0' || chr > '9') {
        return false;
    }
  }
})


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

  }
}

plusMinus()