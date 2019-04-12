const citiesPopupLink = document.querySelectorAll('.js-cities'),
citiesPopup = document.querySelector('.cities'),
headercityCollection = document.querySelectorAll('.headercity');
if(citiesPopupLink){  
    let closePopup = citiesPopup.querySelector('.cities-close');
    citiesPopupLink.forEach((link) =>{
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if(link.closest('.headercity').querySelector('.cities')){
                link.closest('.headercity').removeChild(citiesPopup);
                citiesPopup.classList.remove('active');                
            }
            else{
                $(link).closest('.headercity').append(citiesPopup);
                citiesPopup.classList.add('active');
                cityMissClick();
            }
        })           
    })
    closePopup.addEventListener('click', () => {
        closePopup.closest('.headercity').removeChild(citiesPopup);
        citiesPopup.classList.remove('active');       
    })
    let cityMissClick = () =>{
        document.body.onclick = (e) => {
        if(e.target !== citiesPopup && !e.target.closest('.cities') && !e.target.classList.contains('js-cities')){
                if(citiesPopup.classList.contains('active')){
                    citiesPopup.classList.remove('active')  
                    headercityCollection.forEach((headercity) => {
                        if(headercity.querySelector('.cities')){ 
                            headercity.removeChild(citiesPopup)
                        }
                    })
                }
            } 
        }
    }
}
