$('.js-phone').inputmask('+7(999) 999-9999');
$('.order-addreslist').mCustomScrollbar({
    theme:"dark"
});


let orderform = document.querySelector(".order-orderform")
if(orderform){
    let orderForm = document.querySelector('.order-form')
    let checkform = (form) =>{               
        let inputForm = form.querySelectorAll('.required-input');
        let buttonForm = form.querySelector('.send-button');
        let counter = 0;
        inputForm.forEach((input) => {
            if(input.value.length <= 0){
                counter++
            }        
        })
        if(counter >= 1){
            buttonForm.classList.add('disabled')
        }
        else{        
            buttonForm.classList.remove('disabled') 
        }
    }
    checkform(orderForm)

    let choiceCheckbox = document.querySelector('#choice')
    let addresslist = document.querySelector('.order-addreslist')
    let orderInput = orderForm.querySelectorAll('input') 
    let buttonForm = orderForm.querySelector('.order-button')  
      
    $('body').on('click','.order-button', function(event){        
        let button = $(this);
        if(button.hasClass('disabled')){
            event.preventDefault();
            return
        }        
    });

    orderInput.forEach((input) => {
        input.addEventListener('change', ()=>{
            checkform(orderForm)
        });
        input.addEventListener('input', ()=>{           
            checkform(orderForm)
        })
    })

    $('.js-phone').on('input', () => {
        checkform(orderForm)
    })

    let cityInput = document.querySelector("#js-ordercity");
    let street = document.querySelector("#js-orderstreet");
    let build = document.querySelector("#js-orderbuild");
    let flat = document.querySelector("#js-orderflat");
    let hiddenCity = document.querySelector("#js-ordercityhide");
    let hiddenStreet = document.querySelector("#js-orderstreethide");
    let radioCollection = document.querySelectorAll('.js-addresschoice');
    let cityCompleet = document.querySelector('#js-citycompleet');
    let cartAddress = document.querySelector('.js-cart-order-address');
    let streetCompleet = document.querySelector('#js-streetcompleet'); 

    let hideAddress = () => {
        $(cartAddress).hide()
        street.value = "";
        hiddenStreet.value="";
        build.value = "";
        flat.value = "";
        checkform(orderform)
    }

    let clearAddress = () => {
        cityCompleet.innerHTML = "";
        cityCompleet.classList.remove('active');
        hiddenStreet.value="";
        hiddenCity.value = "";            
        hideAddress();        
    }

    if(choiceCheckbox){  
        choiceCheckbox.addEventListener('change', ()=>{            
            if (choiceCheckbox.checked){
                addresslist.classList.add('open')            
            }
            else{
                addresslist.classList.remove('open')
            }
        }) 
    }       

    let showAddress = () => {
        $(cartAddress).show()
    }

    if(cityInput.value.length <= 0){        
        hideAddress();
    }

    if(radioCollection.length > 0){
        radioCollection.forEach((radio) => {
            radio.addEventListener('change', () =>{                               
                if (radio.checked){
                    showAddress(); 
                    let cityId = radio.dataset.city;    
                    let streetId = radio.dataset.street;
                    let buildName = radio.dataset.build;
                    let flatName = radio.dataset.flat;                                      
                    fetch(`/ajax/location_get_cities/?city_id=${cityId}`)                    
                    .then(function(response){                                            
                      return response.json();
                    })
                    .then(function(myJson){  
                        if(myJson.length > 0){                            
                            let cityName = `${myJson[0].NAME} ${myJson[0].PARENT.NAME}`
                            cityInput.value = cityName;
                            hiddenCity.value = cityId;
                        }   
                    });   
                  fetch(`/ajax/location_get_streets/?city_id=${cityId}&street_id=${streetId}`)
                    .then(function(response){
                      return response.json();
                    })
                    .then(function(myJson){     
                        if(myJson.length > 0){                            
                            street.value = myJson[0].NAME;
                            hiddenStreet.value = myJson[0].ID;  
                        }   
                    })
                    .then(function(){
                        checkform(orderForm); 
                    });                    
                    build.value = buildName;                              
                    if(flatName){
                        flat.value = flatName;
                    }
                    else{
                        flat.value = ""; 
                    }  
                    checkform(orderForm);                 
                }
            })
        })
    }

    $('body').on('click','.js-close', function(event){
        cityInput.value = "";
        hiddenCity.value = "";
        hideAddress();
    })  
    
    let bodyClick = () => {
        document.body.addEventListener('click', (e) => {            
            if((e.target !== cityCompleet && !e.target.closest('#js-citycompleet'))
                || (e.target !== streetCompleet && !e.target.closest('#js-streetcompleet'))){
                cityCompleet.innerHTML = "";
                cityCompleet.classList.remove('active');                
                streetCompleet.innerHTML = "";
                streetCompleet.classList.remove('active');
            }
        })
    } 

    
    let typingTimer;                
    let doneTypingInterval = 300; 
    
    cityInput.addEventListener('keyup', () => {
        clearTimeout(typingTimer);
        if (cityInput.value !== '') {
            typingTimer = setTimeout(cityTyping, doneTypingInterval);
        }
    }); 
    
    cityInput.onkeydown = function() {
        let key = event.keyCode || event.charCode;    
        if( key == 8 || key == 46 ){            
                clearAddress();      
                checkform(orderForm)          
        }           
    };
    
    street.addEventListener('keyup', () => {
        clearTimeout(typingTimer);
        if (street.value !== '') {            
            typingTimer = setTimeout(streetTyping, doneTypingInterval);
        }
    });   
    
    street.onkeydown = function() {
        let key = event.keyCode || event.charCode;    
        if( key == 8 || key == 46 ){             
            hiddenStreet.value="";     
            checkform(orderForm)         
        }           
    };

    let cityTyping = () => {
        cityCompleet.innerHTML = "";
        cityCompleet.classList.remove('active');        
        if(cityInput.value.length > 0){
            cityFetch(cityInput.value)
        }            
        else{
            clearAddress();
        } 
    }
    
    let cityFetch = (word) => {
        cityCompleet.innerHTML = "";
        let string = word.trim(); 
        let path = `/ajax/location_get_cities/?city=${string}`                     
        fetch(path)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){     
            if(myJson.length > 0){  
                autocompleetCity(myJson) 
            }   
        });          
     }

        let autocompleetCity = (myJson) => {  
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
            bodyClick()
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
                    street.value = "";
                    hiddenStreet.value="";
                    build.value = "";
                    flat.value = "";  
                    showAddress(); 
                    checkform(orderForm)        
                })
            })
        }     
    
    let streetTyping = () => { 
        streetCompleet.innerHTML = "";  
        if(street.value.length > 0){
            streetCompleet.innerHTML = ""; 
            let string = street.value.trim();            
            let cityid = hiddenCity.value;            
            let path = `/ajax/location_get_streets/?city_id=${cityid}&street=${string}`
            fetch(path)
            .then(function(response){
                return response.json();
            })
            .then(function(myJson){     
                if(myJson.length > 0){
                    autocompleetStreet(myJson) 
                }   
            });                     
        }
        else{
            streetCompleet.classList.remove('active');
            streetCompleet.innerHTML = "";   
        }  
    }     
        let autocompleetStreet = (myJson) => {    
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
            bodyClick();                         
        }     

        let choiceStreet = () => {
            let compleetlinks = document.querySelectorAll('.compleet-link');        
            compleetlinks.forEach((link)=>{
                link.addEventListener('click', (e) =>{                
                    e.preventDefault();                            
                    street.value = link.textContent;
                    hiddenStreet.value = link.dataset.id;
                    streetCompleet.classList.remove('active');
                    streetCompleet.innerHTML = "";   
                    checkform(orderForm)                         
                })
            })
        }   
}

