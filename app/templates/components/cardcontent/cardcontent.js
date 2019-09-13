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
    $('.goodadded-right').html('<a class="goodadded-link__white" href="/cart/">В корзину</a>');
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
    cardMissClick();
}
let cardMissClick = ()=>{
  document.body.onclick = (e) =>{
    if ((e.target.closest !== goodadded || e.target !== goodadded) && !e.target.classList.contains('js-add')){  
      if(goodadded.classList.contains('active')){
        goodadded.classList.remove('active')
      }      
    } 
  }
}

