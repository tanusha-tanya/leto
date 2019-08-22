$('.js-phone').inputmask('+7(999) 999-9999');
$('.order-addreslist').mCustomScrollbar();

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

let orderform = document.querySelector(".order-orderform")
if(orderform){
    checkform(orderform)
    let choiceCheckbox = document.querySelector('#choice')
    let addresslist = document.querySelector('.order-addreslist')
    let orderInput = orderform.querySelectorAll('input')
    
    orderInput.forEach((input) => {
        input.addEventListener('change', ()=>{
            checkform(orderform)
        });
        input.addEventListener('input', ()=>{
            checkform(orderform)
        })
    })

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
                    let buildName =  radio.dataset.build;
                    let flatName = radio.dataset.flat;                    
                    fetch(`/ajax/location_get_cities/?city_id=${cityId}`)                    
                    .then(function(response){
                      return response.json();
                    })
                    .then(function(myJson){     
                        if(myJson.length > 0){
                            cityName = `${myJson[0].NAME} ${myJson[0].PARENT.NAME}`
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
                    });  
                    build.value = buildName;                              
                    if(flatName){
                        flat.value = flatName;
                    }
                    else{
                        flat.value = ""; 
                    }                   
                }
            })
        })
    }

    $('body').on('click','.js-close', function(event){
        cityInput.value = "";
        hiddenCity.value = "";
        hideAddress();
    })
      
    cityInput.addEventListener('input', () => { 
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
                bodyClick()
            } 
        }
        else{
            cityCompleet.innerHTML = "";
            cityCompleet.classList.remove('active');
            hiddenStreet.value="";
            cityInput.value = "";
            hiddenCity.value = "";            
            hideAddress();
        }
    })
    cityInput.addEventListener('change', () => {
        if(hiddenCity.value.length <= 0){
            hideAddress();
        }
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

    let hideAddress = () => {
        $(cartAddress).hide()
        street.value = "";
        hiddenStreet.value="";
        build.value = "";
        flat.value = "";
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
            })
        })
    }
    
    let showAddress = () => {
        $(cartAddress).show()
    }
    street.addEventListener('input', () => { 
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
                   autocompleet(myJson) 
                }   
            });

            let autocompleet = (myJson) => {                
                let ul = document.createElement('ul');
                    ul.className = 'compleet-ul';   
                for(let i = 0; i<myJson.length; i++){                    
                    let li = document.createElement('li');
                    li.className = 'compleet-item';
                    li.innerHTML = `<a href="#" data-id="${myJson[i].Id}" class="compleet-link">${myJson[i].NAME}</a>`
                    ul.appendChild(li);                                     
                }
                streetCompleet.classList.add('active');
                streetCompleet.appendChild(ul);
                choiceStreet();  
                bodyClick();            
            }         
        }
        else{
            streetCompleet.classList.remove('active');
            streetCompleet.innerHTML = "";   
        }
    })   

    let choiceStreet = () => {
        let compleetlinks = document.querySelectorAll('.compleet-link');        
        compleetlinks.forEach((link)=>{
            link.addEventListener('click', (e) =>{                
                e.preventDefault();                            
                street.value = link.textContent;
                hiddenStreet.value = link.dataset.id;
                streetCompleet.classList.remove('active');
                streetCompleet.innerHTML = "";                            
            })
        })
    }
}
