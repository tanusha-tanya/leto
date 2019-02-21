let hide = true;
document.body.onclick = (e)=>{
    if(e.target.classList.contains('js-button')){
       e.preventDefault();
       let form = e.target.closest('.js-form');
       check(form);
    }
    else if(e.target.classList.contains('js-password')){
        e.preventDefault();
        let label = e.target.closest('.entry-label');
        let input = label.querySelector('.entry-input__password');
        hide = !hide;
        if(hide === false){
            input.type ='text';
            e.target.classList.remove('hide')
        }
        else{
            input.type = 'password';
            e.target.classList.add('hide')
        }
    }
}
let check = function(form){
    let inputCollection = form.querySelectorAll('.js-inputcheck')
    let errorText = form.querySelector('.error-text')
    let name = null;
    let message = null;
    let array = [];
    inputCollection.forEach((input)=>{
        if(input.value.length==0){
            input.classList.add('error');
            name = input.name;
            array.push(name)            
        }
        else{
            input.classList.remove('error');
        }
    })
    if(array.length > 0){
        if(array.length === 1){
            message = "Не заполнено поле" + array[0];
        }
        else{
            message = "Не заполнены поля";
            for(let i=0; i < array.length; i++){
                message += ' ' + array[i];
            }
        } 
        errorText.textContent = message;
    }
    else{
         errorText.textContent = '';         
    }
}

/*document.body.onchange = (e)=>{
    if(e.target.classList.contains('js-inputcheck')){
       let form = e.target.closest('.js-form');
       check(form)
    }
}*/

