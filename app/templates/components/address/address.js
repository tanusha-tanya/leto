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
            ajaxContentAdded: function(){  
                $(this.content).find(".js-popup-inside").magnificPopup({
                    type: 'ajax',
                    alignTop: true,
                    overflowY: 'scroll'
                });             
                $(this.content).find('.js-phone').inputmask('+7(999) 999-9999');   
                $('body').trigger('ajaxReady');
                let addresBlock = $(this.content).find(".js-cart-order-address");
                let orederCity = $(this.content).find("#js-ordercity-popup");
                if($(orederCity).length > 0){
                    if($(orederCity)[0].value) {
                        $(addresBlock).show() 
                    }              
                }                
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
    let button = form.querySelector('button');
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
}

$('body').on('change', '.add-input-photo', function (event) {
        var input = $(this)[0];
        if (input.files && input.files[0]) {
            if (input.files[0].type.match('image.*')) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    if($('.add-label-photo img').length>0){
                        $('.add-label-photo img').attr('src', e.target.result);
                    }
                    else{                        
                        $('.add-label-photo').prepend(`<img src="${e.target.result}">`)
                    }                    
                    $('.add-label-photo span').html('Заменить');                    
                }
                reader.readAsDataURL(input.files[0]);
                let form = event.target.closest('.js-form');
                check(form)
            } else {
                console.log('ошибка, не изображение');
            }
        } else {
            console.log('хьюстон у нас проблема');
        }
    });

    $('body').on('change', '.add-checkbox', function (event) {
        let form = event.target.closest('.js-form');
         check(form)
    })
    
const deleteCollection = document.querySelectorAll('.js-delete');
if(deleteCollection){
    deleteCollection.forEach((element) =>{
        element.addEventListener('click',(e)=>{                    
           e.preventDefault()
        })
    })
}

