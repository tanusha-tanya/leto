$(function(){
    let contacts = document.querySelector('.about-map')
    function init() {
        var myMap = new ymaps.Map('aboutmap', {
            center: [55.711016, 37.436283],        
            zoom: 12
        });
        
        var myPlacemark = new ymaps.Placemark([55.711016, 37.436283], {
            balloonContent: 'Верейская улица, 29'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/images/svg/baloon.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42],
        });
    // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark); 
    }
    if(contacts){
        ymaps.ready(init);
    }
});