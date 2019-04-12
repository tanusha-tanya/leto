$.extend(true, $.magnificPopup.defaults, {
  tClose: 'Закрыть',
  tLoading: 'Загрузка...', 
  gallery: {
    tPrev: 'Назад (Левая стрелка)', 
    tNext: 'Вперед (Правая стрелка)',
    tCounter: '%curr% из %total%'
  },
  image: {
    tError: '<a href="%url%">Изображение</a> не может быть загружено.' // Error message when image could not be loaded
  },
  ajax: {
    tError: '<a href="%url%">Контент</a> не может быть загружен.'
  }
});
$(".js-popup").magnificPopup({
    type: 'ajax',
		overflowY: 'scroll',
		callbacks: {
			ajaxContentAdded: function()    {  
                $(this.content).find(".js-popup-inside").magnificPopup({
					type: 'ajax',
					alignTop: true,
					overflowY: 'scroll'
                });
                $('body').trigger('ajaxReady')           
            }
        }    
});

$('body').on('submit','.ajaxform', function(event){
    event.preventDefault();
    let button = $(this).find('.add-button__send');
    if(button.hasClass('disabled')){
        return
    }
    else{
      $(this).submit()  
    }
});
$('body').on('click', '.add-button__close', function(){
    var magnificPopup = $.magnificPopup.instance; 
    magnificPopup.close(); 
})

document.body.oninput = (e)=>{
    if(e.target.classList.contains('js-inputcheck')){
       let form = e.target.closest('.js-form');
       check(form)
    }
}

let check = function(form){
    let inputs = form.querySelectorAll('.js-inputcheck');
    let button = form.querySelector('.add-button__send');
    let arr = 0
    inputs.forEach((input) => {
        console.log(input.value.length)
        if(input.value.length <= 0){
            arr++
             console.log(arr)
       }
    })   
    if(arr === 0){
        button.classList.remove('disabled')
    }
    else{
         button.classList.add('disabled')
    }
}

const deleteCollection = document.querySelectorAll('.js-delete');
if(deleteCollection){
    deleteCollection.forEach((element) =>{
        element.addEventListener('click',(e)=>{                    
           e.preventDefault()
        })
    })
}


