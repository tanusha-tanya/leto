const cities = document.querySelector('.cities');
let headCity = null,
    defaultCity = "Москва";

if(cities){
    let citiesDetect = document.querySelector('.cities-detect');
    let headerInputHidden = document.querySelector('#cityId');
    let headerCityInput = document.querySelector('.cities-input');
    let buttonCities = document.querySelector('.cities-button');
    //let citiesPopupLinkCollection = document.querySelectorAll('.js-cities');
    let headerevent = document.createEvent('Event');  
    //let headerCityId = null; 
    let headerCityCompleet = document.querySelector('.cities-autocomplete');

    headerevent.initEvent('changeInput', true, true);

    citiesDetect.addEventListener('click', (e)=>{ 
        e.preventDefault()       
        fetch('/ajax/location_get_cur_city/')
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){                         
            let cityName = `${myJson.NAME} ${myJson.PARENT.NAME}`;
            headCity = myJson.NAME;
            headerCityInput.value = cityName;
            headerInputHidden.value = myJson.ID;            
            headerInputHidden.dispatchEvent(headerevent);             
        })
        .catch(function (err) {            
            let error = document.createElement('div');                       
            error.classList.add('error-text')
            error.textContent = 'Не удалось установить Ваше местоположение автоматически. Пожалуйста, введите город вручную или выберите из списка'
            let label = document.querySelector('.cities-label');
            label.removeChild(citiesDetect);
            label.appendChild(error);
        })
    })

    headerInputHidden.addEventListener('changeInput', () =>{
        if(headerInputHidden.value.length > 0){
            buttonCities.classList.remove("disabled")
        }
        else{
            buttonCities.classList.add("disabled")
        }
    })

    headerCityInput.addEventListener('input', () => {        
        headerCityCompleet.innerHTML = "";
        headerCityCompleet.classList.remove('active');        
        if(headerCityInput.value.length > 0){             
            headerCityCompleet.innerHTML = "";
            let string = headerCityInput.value.trim(); 
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
                    ul.className = 'cities-ul';   
                for(let i = 0; i<myJson.length; i++){                    
                    let li = document.createElement('li');
                    li.className = 'cities-list';
                    li.innerHTML = `<a href="#" data-id="${myJson[i].ID}" class="cities-link"><strong>${myJson[i].NAME}</strong> ${myJson[i].PARENT.NAME}</a>`
                    ul.appendChild(li);                                     
                }
                headerCityCompleet.classList.add('active');
                headerCityCompleet.appendChild(ul);                
            } 
        }
        else{
            headerCityCompleet.innerHTML = "";
            headerCityCompleet.classList.remove('active');            
            headerCityInput.value = "";
            headerInputHidden.value = "";            
        }
    })
    $('.cities-autocomplete').mCustomScrollbar();
}