let hide = true;
document.body.onclick = (e)=>{
    if(e.target.classList.contains('js-password')){
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

document.body.onchange = (e)=>{    
    if(e.target.classList.contains('entry-file')){
        let label = document.querySelector('.entry-label__file');
        let file = e.target;
        if(file.value.length > 0){
            let fileName = file.value.split(/(\\|\/)/g).pop();
            label.innerHTML =  `${fileName} <span class="hr-delete"></span>`
        }; 
    }
}
