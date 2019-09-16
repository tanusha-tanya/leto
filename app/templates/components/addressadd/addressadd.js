let adressAdd = document.querySelector('.address-add')
if(adressAdd){ 
    let typingTimer;                
    let doneTypingInterval = 500;     
    
    document.body.onkeyup = (e)=>{
        if(e.target.id == "js-ordercity-popup"){
            let cityInput = e.target;
            clearTimeout(typingTimer);
            if (cityInput.value) {
                typingTimer = setTimeout(CityTyping(cityInput), doneTypingInterval);
            }
        }
        if(e.target.id == "js-orderstreet-popup"){
            let streetInput = e.target;
            clearTimeout(typingTimer);
            if (streetInput.value) {
                typingTimer = setTimeout(streetTyping(streetInput), doneTypingInterval);
            }
        }
    }    

    document.body.onkeydown = (e)=>{        
        let key = event.keyCode || event.charCode;    
        if( key == 8 || key == 46 ){             
            if(e.target.id == "js-ordercity-popup"){
                
            }
            if(e.target.id == "js-orderstreet-popup"){
                
            }        
        }           
    };

    let CityTyping = (cityInput) => {
        let form = cityInput.closest('.add-form');
        let hiddenCity = form.querySelector("#js-ordercityhide");
        let cityCompleet = form.querySelector('#js-citycompleet');
        let addressBlock = form.querySelector('.js-cart-order-address');

        cityCompleet.innerHTML = "";
        cityCompleet.classList.remove('active');        
        if(cityInput.value.length > 0){ 
            cityCompleet.innerHTML = "";
            let string = cityInput.value.trim(); 
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
                cityCompleet.innerHTML = "";               
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
                $(ul).mCustomScrollbar({
                    theme:"dark"
                }); 
                choiceCity(); 
            } 
        }
        else{
            $(addressBlock).hide();             
            hiddenCity.value = "";
        }
        
        let choiceCity = () => {
            let compleetlinks = document.querySelectorAll('.compleet-link');        
            compleetlinks.forEach((link)=>{
                link.addEventListener('click', (e) =>{                
                    e.preventDefault();                            
                    cityInput.value = link.textContent;
                    hiddenCity.value = link.dataset.id;
                    cityCompleet.classList.remove('active');
                    cityCompleet.innerHTML = "";
                    $(addressBlock).show();                             
                })
            })
        }
    }

    let streetTyping = (streetInput) => {
        let form = streetInput.closest('.add-form');
        let hiddenStreet = form.querySelector("#js-orderstreethide");
        let streetCompleet = form.querySelector('#js-streetcompleet');
        let cityId = form.querySelector("#js-ordercityhide").value;

        streetCompleet.innerHTML = "";  
        if(streetInput.value.length > 0){
            streetCompleet.innerHTML = ""; 
            let string = streetInput.value.trim();            
            let path = `/ajax/location_get_streets/?city_id=${cityId}&street=${string}`
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
                streetCompleet.innerHTML = "";                                
                let ul = document.createElement('ul');
                    ul.className = 'compleet-ul';   
                for(let i = 0; i<myJson.length; i++){                    
                    let li = document.createElement('li');
                    li.className = 'compleet-item';
                    li.innerHTML = `<a href="#" data-id="${myJson[i].ID}" class="compleet-link">${myJson[i].NAME}</a>`
                    ul.appendChild(li);                                     
                }
                streetCompleet.classList.add('active');
                streetCompleet.appendChild(ul);
                $(ul).mCustomScrollbar({
                    theme:"dark"
                }); 
                choiceStreet();
            }        
        }
        let choiceStreet = () => {
            let compleetlinks = document.querySelectorAll('.compleet-link');        
            compleetlinks.forEach((link)=>{
                link.addEventListener('click', (e) =>{                
                    e.preventDefault();                          
                    streetInput.value = link.textContent;
                    hiddenStreet.value = link.dataset.id;
                    streetCompleet.classList.remove('active');
                    streetCompleet.innerHTML = "";
                })
            })
        }
    } 
    $('body').on('click', '.js-close', function(e){
        if(e.target.closest('.add-form')){
            let form = e.target.closest('.add-form');
            let hiddenStreet = form.querySelector("#js-orderstreethide");        
            let streetInput = form.querySelector("#js-orderstreet-popup");
            let cityInput = form.querySelector("#js-ordercity-popup");
            let hiddenCity = form.querySelector("#js-ordercityhide");
            let build = form.querySelector("#js-orderbuild");
            let flat = form.querySelector("#js-orderflat");
            let addressBlock = form.querySelector(".js-cart-order-address");
            let button = form.querySelector(".add-button__send");        
            hiddenStreet.value = "";
            streetInput.value  = "";
            cityInput.value  = "";
            hiddenCity.value  = "";
            build.value = ""; 
            flat.value = "";
            button.classList.add('disabled');
            $(addressBlock).hide();    
        }
    })  
}


