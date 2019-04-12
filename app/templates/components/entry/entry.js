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