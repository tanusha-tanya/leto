const radioCollectionDelivery = document.querySelectorAll('.delivery-radio');
if(radioCollectionDelivery){
    let dataTarget = null;
    let dataFor = null;
    let methodCollection = document.querySelectorAll('.delivery-method-item')
    radioCollectionDelivery.forEach((radio) => { 
        radio.addEventListener('click', () =>{            
            dataTarget = radio.dataset['target'];
            methodCollection.forEach((method) => {
                method.classList.remove('delivery-method-item__active')
                dataFor = method.dataset['for'];
                if(dataTarget === dataFor){
                    method.classList.add('delivery-method-item__active');
                }
            })
        })   
    })
}
const map = document.querySelector('#map')
if(map){
    $(function(){
    ymaps.ready(init);    
    function init() {
    $('#pickup').click(function(){
    var myMap = new ymaps.Map('map', {
        center: [56.8522511,53.2091607],     
        zoom: 12
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

    }) 
}
$('.delivery-addresses-items').mCustomScrollbar();
})
}

const mapLinks = document.querySelectorAll('.delivery-addresses-item');
if(mapLinks.length >= 2){
    mapLinks.forEach((mapLink)=>{
        mapLink.addEventListener('click', ()=>{
            mapLinks.forEach((elem)=>{
                elem.classList.remove('delivery-addresses-item__active')
            })
            mapLink.classList.add('delivery-addresses-item__active')
        })
    })
    
}

let cityDelivery = document.querySelector('.delivery-city')
if(cityDelivery){
    let cityInputDelivery = document.querySelector('.delivery-city-input');
    let hiddenCityDelivery = document.querySelector("#js-ordercityhide");
    let cityCompleet = document.querySelector('#js-citycompleet');
   
    cityInputDelivery.addEventListener('input', () => { 
        cityCompleet.innerHTML = "";
        cityCompleet.classList.remove('active');        
        if(cityInputDelivery.value.length > 0){ 
            cityCompleet.innerHTML = "";
            let string = cityInputDelivery.value.trim(); 
            let path = `/ajax/location_get_cities/?city=${string}`           
            fetch(path)
            .then(function(response){
              return response.json();
            })
            .then(function(myJson){     
                if(myJson.length > 0){
                  autocompleet(myJson) 
                }   
            });           
            let autocompleet = (myJson) => {                
                let ul = document.createElement('ul');
                    ul.className = 'compleet-ul';   
                for(let i = 0; i<myJson.length; i++){                    
                    let li = document.createElement('li');
                    li.className = 'compleet-item';
                    li.innerHTML = `<a href="#" data-id="${myJson[i].ID}" class="compleet-link"><strong>${myJson[i].NAME}</strong> ${myJson[i].PARENT.NAME}</a>`
                    ul.appendChild(li);                                     
                }
                cityCompleet.classList.add('active');
                cityCompleet.appendChild(ul);
                choiceCity();  
                bodyClick();
            } 
        }
        else{
            cityCompleet.innerHTML = "";
            cityCompleet.classList.remove('active');
            cityInputDelivery.value = "";
            hiddenCityDelivery.value = "";            
        }

        let bodyClick = () => {
            document.body.addEventListener('click', (e) => {            
                if(e.target !== cityCompleet && !e.target.closest('#js-citycompleet')){
                    cityCompleet.innerHTML = "";
                    cityCompleet.classList.remove('active');         
                }
            })
        } 
    })

    let choiceCity = () => {
        let compleetlinks = document.querySelectorAll('.compleet-link');        
        compleetlinks.forEach((link)=>{
            link.addEventListener('click', (e) =>{                
                e.preventDefault();                            
                cityInputDelivery.value = link.textContent;
                hiddenCityDelivery.value = link.dataset.id;
                cityCompleet.classList.remove('active');
                cityCompleet.innerHTML = "";            
            })
        })
    }
}
