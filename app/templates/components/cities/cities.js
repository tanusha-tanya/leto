const cities = document.querySelector('.cities');
let city = null;
let defaultCity = "Москва";

function setMap(){
        ymaps.geolocation.get({
            provider:"yandex",
            autoReverseGeocode: true
        })
        .then(function (result)  {
            city = result.geoObjects.get(0).properties.get('metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName');  
            return city
        })
        .catch(function (err) {
            console.log('Не удалось установить местоположение', err);
        });
    }
    window.onload = function () {
        if (ymaps) {   
            setMap();
        };
    }

if(cities){
    let inputText = cities.querySelector('.cities-input'),
        inputHidden = cities.querySelector('.cities-hidden'),
        detect = cities.querySelector('.cities-detect'),
        citiesListCollection = cities.querySelectorAll('.cities-list'),
        buttonCities = cities.querySelector('.cities-button'),
        event = new Event("changeValue"),
        cityName = null,
        citiesLinkCollection = document.querySelectorAll('.cities-link'),
        citiesPopupLinkCollection = document.querySelectorAll('.js-cities'),
        autocomplete = document.querySelector('.cities-autocomplete'),
        listShow = document.querySelectorAll('.cities-list:not(.hide)'),
        reset = cities.querySelector('.cities-reset');
  
    detect.addEventListener('click', (e) => {
        e.preventDefault();
        setMap();
        setCity(city)
    })

    function setCity(city){
        citiesListCollection.forEach((li) => {
            let currentCity = li.querySelector('.cities-link');
            if(city === currentCity.textContent){
                inputHidden.value = currentCity.dataset.id;
                inputHidden.dispatchEvent(event);
                inputText.value = currentCity.textContent;
            }
        })
    }    

    inputHidden.addEventListener('changeValue', () =>{
        if(inputHidden.value.length > 0){
            buttonCities.classList.remove("disabled")
        }
        else{
            buttonCities.classList.add("disabled")
        }
    })

    function setCityName(){
         try{
                if (localStorage.getItem('cityId')) {                   
                    citiesLinkCollection.forEach((link) => {
                    if(link.dataset.id === localStorage.getItem('cityId')){
                        cityName = link.textContent;
                    }
                    })
                        citiesPopupLinkCollection.forEach((city) => {
                            city.textContent = cityName;
                    })
                }
            }
            catch(err){
                console.log('Включите файлы coocies')
            }
        
    }    
    setCityName()

    buttonCities.addEventListener('click', (e) => {
        e.preventDefault();
        if(buttonCities.classList.contains('desabled')){
            return
        }
        else{ 
            try{
                localStorage.setItem('cityId', inputHidden.value);
            }
            catch(err){
                alert('В вашем браузере выключены файлы cookie, для продолжения включите файлы cookie в настройках вашего браузера')
            }
            setCityName()
            cities.classList.remove('active')
        }
    })
    inputText.oninput = ()=>{
        if(inputText.value !== ""){            
            citiesLinkCollection.forEach((link) => {
                let word = inputText.value.toLowerCase();
                let city = link.textContent.toLowerCase();
                if(city.indexOf(word) !== -1){
                    autocomplete.classList.add('active');
                    link.parentNode.classList.remove('hide');
                }
                else{
                    link.parentNode.classList.add('hide');
                    
                }
            }) 
            if(listShow.length < 0){
                autocompleteHide()
            }          
        }
        else{
            inputHidden.value = "";
            inputHidden.dispatchEvent(event);
            autocompleteHide()
        }
        
    }
    citiesLinkCollection.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            inputHidden.value = link.dataset.id;
            inputHidden.dispatchEvent(event);
            inputText.value = link.textContent;
            autocompleteHide()
        })
    })
    
    let autocompleteHide = function(){
        autocomplete.classList.remove('active');
        citiesListCollection.forEach((list) => {
            list.classList.add('hide')
        })
    }

    reset.onclick = function(e){
        e.preventDefault();
        inputHidden.value = "";
        inputText.value = "";
        inputHidden.dispatchEvent(event);        
        autocompleteHide()
    }
}
$('.cities-autocomplete').mCustomScrollbar();