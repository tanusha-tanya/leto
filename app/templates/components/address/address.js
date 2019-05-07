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

let openPopup = () => {
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
}

openPopup()

$('body').on('click','.add-button__send', function(event){
    event.preventDefault();
    let button = $(this);
    let form = $(this).closest('.js-form');
    if(button.hasClass('disabled')){
        return
    }
    else{
        form.submit() 
    }
});

$('body').on('click', '.add-button__close', function(e){
    e.preventDefault();
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
        if(input.value.length <= 0){
            arr++
       }
    })   
    if(arr === 0){

        button.classList.remove('disabled')
    }
    else{
         button.classList.add('disabled')
    }
    console.log(button)
}

const deleteCollection = document.querySelectorAll('.js-delete');
if(deleteCollection){
    deleteCollection.forEach((element) =>{
        element.addEventListener('click',(e)=>{                    
           e.preventDefault()
        })
    })
}


