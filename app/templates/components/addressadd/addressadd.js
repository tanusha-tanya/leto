let adressAdd = document.querySelector('.address-add')

if(adressAdd){ 
    document.body.oninput = (e)=>{
        if(e.target.classList.contains('js-inputcheck')){            
            let form = e.target.closest('.add-form') || null;
            if (form){                
                let cityInput = form.querySelector("#js-ordercity");
                let street = form.querySelector("#js-orderstreet");
                let build = form.querySelector("#js-orderbuild");
                let flat = form.querySelector("#js-orderflat");
                let hiddenCity = form.querySelector("#js-ordercityhide");
                let hiddenStreet = form.querySelector("#js-orderstreethide");    
                let cityCompleet = form.querySelector('#js-citycompleet');
                let cartAddress = form.querySelector('.js-cart-order-address');
                let streetCompleet = form.querySelector('#js-streetcompleet');
                
                let hideAddress = () => {
                    $(cartAddress).hide()
                    street.value = "";
                    hiddenStreet.value="";
                    build.value = "";
                    flat.value = ""; 
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
                        bodyClick();
                        backspase();
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
            let backspase = () => {
                let key = event.which || event.keyCode || event.charCode;
                if(key == 8){
                    cityCompleet.innerHTML = "";
                    cityCompleet.classList.remove('active');    
                    if(cityInputDelivery.value.length < 0){
                        cityInputDelivery.value = "";
                        hiddenCityDelivery.value = "";  
                    }
                }
            }
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
                        li.innerHTML = `<a href="#" data-id="${myJson[i].ID}" class="compleet-link">${myJson[i].NAME}</a>`
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
        }
    }
}
    
    