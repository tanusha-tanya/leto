const quantityValue = document.querySelector('#quantity')
if(quantityValue){
  let minus = document.querySelector('.card-minus')
  let plus = document.querySelector('.card-plus')

  quantityValue.onblur = ()=>{
    if(quantityValue.value === '')
      quantityValue.value = 1
  }

  quantityValue.onkeypress = (e)=> {
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
  minus.addEventListener('click', (e)=>{   
    e.preventDefault();
    console.log(quantityValue)
    quantityChange(false)
  })

  plus.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(quantityValue)
    quantityChange(true)
  })

  let quantityChange = function(sign){
    let value = quantityValue.value
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
    quantityValue.value = value
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


const goodadded = document.querySelector('.goodadded')
if(goodadded){
  let close = document.querySelector('.js-continue');
  close.onclick = function(e){
    e.preventDefault();
    goodadded.classList.remove('active')
  }
}

let goodAddedShow = (succes, info, button) => {
  let status = goodadded.querySelector('.goodadded-status'),
      text = goodadded.querySelector('.goodadded-text'),
      svg = goodadded.querySelector('.goodadded-pick'),
      buttonLeft = goodadded.querySelector('.js-continue'),
      buttonRight =  $(button).clone();
  if(succes){
    status.textContent = "Вы добавили следующий товар";
    text.textContent = info;
    svg.innerHTML = '<svg class="goodadded-svg" role="img" width="28" height="32"><use xlink:href="#bag"></use></svg>';
    $('.goodadded-right').html('<a class="goodadded-link__white" href="cart.html">В корзину</a>');
  }
  else{
    status.textContent = "Ошибка";
    text.textContent = info;
    svg.innerHTML = '<svg class="goodadded-svg" role="img" width="28" height="32"><use xlink:href="#cancel"></use></svg>';
    buttonLeft.textContent = 'Отмена';
    $(buttonRight).text('Повторить операцию');
    $(buttonRight).addClass('goodadded-link__white');
    $('.goodadded-right').html(buttonRight);
    buttonRight.click((e) => {
      e.preventDefault();
      goodAddedShow(true, 'крем', e.target)
    })
  }
    goodadded.classList.add('active');
    missClick();
}
let missClick = ()=>{
  document.body.onclick = (e) =>{
    if ((e.target.closest !== goodadded || e.target !== goodadded) && !e.target.classList.contains('js-add')){  
      goodadded.classList.remove('active')
    } 
  }
}

