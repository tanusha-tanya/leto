if ($(window).width() < 1220) {
    $('.js-order').magnificPopup({
        type: 'ajax',
        overflowY: 'scroll',
        callbacks: {}
    })
}
else{
  $('.js-order').click(function(e){
        e.preventDefault();
        console.log(this)
        $('.js-order').removeClass('active');
        $(this).addClass('active');
    })  
}