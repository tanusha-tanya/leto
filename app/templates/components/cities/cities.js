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
        button = cities.querySelector('.cities-button'),
        event = new Event("change"),
        cityName = null,
        citiesLinkCollection = document.querySelectorAll('.cities-link'),
        citiesPopupLink = document.querySelector('.js-cities'),
        autocomplete = document.querySelector('.cities-autocomplete');
    detect.onclick = (e) => {
        e.preventDefault();
        setMap();
        setCity(city)
    }

    let setCity = function(city){
        citiesListCollection.forEach((li) => {
            let currentCity = li.querySelector('.cities-link');
            if(city === currentCity.textContent){
                inputHidden.value = currentCity.dataset.id;
                inputHidden.dispatchEvent(event);
                inputText.value = currentCity.textContent;
            }
        })
    }    

    inputHidden.addEventListener('change', () =>{
        if(inputHidden.value.length >= 0){
            button.classList.remove("disabled")
        }
    })

    let setCityName = () => {
        if (localStorage.getItem('cityId') !== null) {
            citiesLinkCollection.forEach((link) => {
                if(link.dataset.id === localStorage.getItem('cityId')){
                    cityName = link.textContent;
                }
            })
            citiesPopupLink.textContent = cityName;
        }
    }    
    setCityName()

    button.onclick = (e) => {
        e.preventDefault();
        if(button.classList.contains('desabled')){
            return
        }
        else{            
            localStorage.setItem('cityId', inputHidden.value);
            setCityName()
            cities.classList.remove('active')
        }
    }
    inputText.oninput = ()=>{
        if(inputText.value !== ""){            
            citiesLinkCollection.forEach((link) => {
                if(link.textContent.indexOf(inputText.value) !== -1){
                    autocomplete.classList.add('active');
                    link.parentNode.classList.remove('hide')
                }
            })
        }
    }
}