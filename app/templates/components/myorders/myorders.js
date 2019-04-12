let openOrder = ()=>{
    $('.js-order').click(function(e){
        e.preventDefault();
        $('.js-order').removeClass('active');
        $(this).addClass('active');
    }) 
    $('.js-order').magnificPopup({
        type: 'ajax',
        overflowY: 'scroll',
        disableOn: ()=> {
            if($(window).width() < 1220 ) {
                return true;
            }
                return false;
            }
    })
}
openOrder();
