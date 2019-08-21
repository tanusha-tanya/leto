$('.js-phone').inputmask('+7(999) 999-9999');

$('.order-addreslist').mCustomScrollbar();

let orderform = document.querySelector(".order-orderform")
if(orderform){
    let choiceCheckbox = document.querySelector('#choice')
    let addresslist = document.querySelector('.order-addreslist')
    
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
    let city = document.querySelector("#js-ordercity");
    let street = document.querySelector("#js-orderstreet");
    let build = document.querySelector("#js-orderbuild");
    let flat = document.querySelector("#js-orderflat");
    let hiddenCity = document.querySelector("#js-ordercityhide");
    let hiddenStreet = document.querySelector("#js-orderstreethide");
    let radioCollection = document.querySelectorAll('.js-addresschoice')
    if(radioCollection.length > 0){
        radioCollection.forEach((radio) => {
            radio.addEventListener('change', () =>{                               
                if (radio.checked){                    
                    city.value =  radio.dataset.city;
                    street.value = radio.dataset.street;
                    build.value = radio.dataset.build;
                    flat.value = radio.dataset.flat;
                }
            })
        })
    }

    $('body').on('click','.js-close', function(event){
        let input = this.parentNode.querySelector("input");
            input.value = "";
            city.value = "";
            street.value = "";
            build.value = "";
            flat.value = "";
    })

    city.addEventListener('change', () => {        
        if(city.value.length > 0){ 
            let string = city.value.trim();
            let compleet = document.querySelector('#js-citycompleet');
            fetch(`'http://leto.dev.picom.ru/ajax/location_get_cities/?city=${string}'`)
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
                    compleet.classList.add('active')            
                for(let i = 0; i<myJson.length; i++){
                    let li = document.createElement('li');
                    li.className = 'compleet-item';
                    li.innerHTML = `<a href="#" data-id="${myJson[i].ID}" class="compleet-link"><strong>${myJson[i].NAME_RU}</strong> ${myJson[i].PARENT.NAME_RU}</a>`
                    ul.appendChild(li);                                      
                }
                let compleetlinks = document.querySelectorAll('.compleet-link');
                compleetlinks.forEach((link)=>{
                    link.addEventListener('click', () =>{
                        city.value = link.textContent;
                        hiddenCity.value = link.dataset.id;
                        compleet.classList.remove('active');
                        ul.parentNode.removeChild(ul);
                    })
                })
            } 
        }
    })
    
    street.addEventListener('change', () => {   
        if(street.value.length > 0){
            let string = street.value.trim();
            let compleet = document.querySelector('#js-orderstreet');
            let cityid = hiddenStreet.value
            fetch(`'http://leto.dev.picom.ru/ajax/location_get_streets/?city_id=${cityid}&street=${string}'`)
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
                    compleet.classList.add('active')            
                for(let i = 0; i<myJson.length; i++){
                    let li = document.createElement('li');
                    li.className = 'compleet-item';
                    li.innerHTML = `<a href="#" data-id="${myJson[i].ID}" class="compleet-link"><strong>${myJson[i].NAME_RU}</strong></a>`
                    ul.appendChild(li);                                      
                }
                let compleetlinks = document.querySelectorAll('.compleet-link');
                compleetlinks.forEach((link)=>{
                    link.addEventListener('click', () =>{
                        street.value = link.textContent;
                        hiddenStreet.value = link.dataset.id;
                        compleet.classList.remove('active');
                        ul.parentNode.removeChild(ul);
                    })
                })
            }            
        }
    })    
}
