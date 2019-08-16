$('.js-phone').inputmask('+7(999) 999-9999');
$('body').on('click','.js-close', function(event){
    let input = this.parentNode.querySelector("input");
        input.value = "";
})