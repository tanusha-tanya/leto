$('.js-phone').inputmask('+7(999) 999-9999');
$('body').on('click','.js-close', function(event){
    let input = this.parentNode.querySelector("input");
        input.value = "";
})
let choiceCheckbox = document.querySelector('#choice')
let addresslist = document.querySelector('.order-addreslist')
$('.order-addreslist').mCustomScrollbar();
if(choiceCheckbox){
    choiceCheckbox.addEventListener('change', ()=>{
        if (choiceCheckbox.checked){
            addresslist.classList.add('open')
        }
        else{
            addresslist.classList.remove('open')
        }
    })
 }