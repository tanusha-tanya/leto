const radioCollection = document.querySelectorAll('.delivery-radio');
if(radioCollection){
    let dataTarget = null;
    let dataFor = null;
    let methodCollection = document.querySelectorAll('.delivery-method-item')
    radioCollection.forEach((radio) => { 
        radio.addEventListener('click', () =>{            
            dataTarget = radio.dataset['target'];
            methodCollection.forEach((method) => {
                method.classList.remove('delivery-method-item__active')
                dataFor =  method.dataset['for'];
                if(dataTarget === dataFor){
                    method.classList.add('delivery-method-item__active')
                }
            })
        })   
    })
}
$(function(){
    ymaps.ready(init);
    function init() {
    var myMap = new ymaps.Map('map', {
        center: [56.8522511,53.2091607],        
        
        zoom: 12
    }, {
        balloonPanelMaxMapArea: Infinity
    });     
    var placemarks = [];
    var firstMark;
    $('.js-map_point').each(function(index, element){
        var coords = $(element).data('coords').split(',');
        var balloon = $(element).data('baloon');
        var id = $(element).data('id');
        coords = [Number(coords[0]), Number(coords[1])];
        
        placemarks[id] = new ymaps.Placemark(coords,{
            balloonContent: balloon
        },{
            iconLayout: 'default#image',
            iconImageHref: '/images/svg/baloon.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(placemarks[id]);
        if (!firstMark) {
            firstMark = placemarks[id];
        }
    })   
    firstMark.options.set('iconImageHref','/images/svg/baloon_current.svg');
    firstMark.balloon.open();      
    
    $('.js-map_point').click(function(){
        var coords = $(this).data('coords').split(',');        
        var geoPoint = [Number(coords[0]), Number(coords[1])];
        var id = $(this).data('id');
        var mark = placemarks[id];
        placemarks.forEach(function(item, i, arr) {
               item.options.set('iconImageHref','/images/svg/baloon.svg');
            });
            mark.options.set('iconImageHref','/images/svg/baloon_current.svg');
            mark.balloon.open();
        $('.js-map__item').removeClass('map__item-active');        
        $(this).parents('.js-map__item').addClass('map__item-active');
	    return false;
    })
    
}
$('.delivery-addresses-items').mCustomScrollbar();
})
const mapLinks = document.querySelectorAll('.delivery-addresses-item');
if(mapLinks){
    mapLinks.forEach((mapLink)=>{
        mapLink.addEventListener('click', ()=>{
            mapLinks.forEach((elem)=>{
                elem.classList.remove('delivery-addresses-item__active')
            })
            mapLink.classList.add('delivery-addresses-item__active')
        })
    })
    
}