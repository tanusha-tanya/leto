const citiesPopupLink = document.querySelector('.js-cities');
if(citiesPopupLink){    
    let citiesPopup = document.querySelector('.cities')
    let close = citiesPopup.querySelector('.cities-close')
    citiesPopupLink.onclick = (e) => {
        e.preventDefault();
        citiesPopup.classList.toggle('active')
    }
    document.body.onclick = (e) => {
        if(e.target !== citiesPopup && !e.target.closest('.cities') && e.target !== citiesPopupLink){
            citiesPopup.classList.remove('active')
        }
    }
    close.onclick = () => {
        citiesPopup.classList.remove('active')
    }
}