const cities = document.querySelector('.cities');

if(cities){
    let citiesDetect = document.querySelector('.cities-detect');
    let headerInputHidden = document.querySelector('#cityId');
    let headerCityInput = document.querySelector('.cities-input');
    let buttonCities = document.querySelector('.cities-button');
    let headerevent = document.createEvent('Event');  
    let headCity = null; 
    let headerCityCompleet = document.querySelector('.cities-autocomplete');
    let reset = document.querySelector('.cities-reset');
    let typingTimer;                
    let doneTypingInterval = 300;    
    

    headerCityInput.addEventListener('keyup', () => {
        clearTimeout(typingTimer);
        if (headerCityInput.value) {            
            typingTimer = setTimeout(headerCityTyping, doneTypingInterval);
        }
    });   
    
    headerevent.initEvent('changeInput', true, true);

    citiesDetect.addEventListener('click', (e)=>{ 
        e.preventDefault()       
        fetch('/ajax/location_get_cur_city/')
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){                         
            let cityHeaderName = `${myJson.NAME} ${myJson.PARENT.NAME}`;
            headCity = myJson.NAME;
            headerCityInput.value = cityHeaderName;
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
            return
        })
    })
    

    let changeButton = ()=>{
        if(headerInputHidden.value.length > 0){
            buttonCities.classList.remove("disabled")
        }
        else{
            buttonCities.classList.add("disabled")
        }
    }

    changeButton()

    headerInputHidden.addEventListener('changeInput', () =>{
        changeButton()
    })
    let headerCityTyping = () => {
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
                $(ul).mCustomScrollbar();                 
                choiceLink();                
                closeAutocompeet();     
            } 
        }
        else{
            headerCityCompleet.innerHTML = "";
            headerCityCompleet.classList.remove('active');   
            headerInputHidden.dispatchEvent(headerevent);
            changeButton();      
            headerCityInput.value = "";
            headerInputHidden.value = "";  
        }
    }    

    let choiceLink = ()=>{
        let headerCityLink = document.querySelectorAll('.cities-link');   
        headerCityLink.forEach((link) =>{               
        link.addEventListener('click', (e) => {
                e.preventDefault();                
                headerCityInput.value = link.textContent;
                headerInputHidden.value = link.dataset.id;
                headerInputHidden.dispatchEvent(headerevent); 
                headerCityCompleet.innerHTML = "";
                headerCityCompleet.classList.remove('active');                
            })
        }) 
    }
    
    reset.addEventListener('click', (e) => { 
        e.preventDefault();
        headerCityCompleet.innerHTML = "";
        headerCityCompleet.classList.remove('active');   
        headerInputHidden.dispatchEvent(headerevent); 
        changeButton();         
        headerCityInput.value = "";
        headerInputHidden.value = "";          
    });

    choiceLink();

    let closeAutocompeet = ()=>{
        document.body.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target !== headerCityCompleet && !e.target.closest('.cities-autocomplete')){
                headerCityCompleet.innerHTML = "";
                headerCityCompleet.classList.remove('active');   
                headerInputHidden.dispatchEvent(headerevent);                                
            }           
        }) 
    }   
}