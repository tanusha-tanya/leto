const citiesPopupLink = document.querySelectorAll('.js-cities'),
citiesPopup = document.querySelector('.cities'),
close = citiesPopup.querySelector('.cities-close'),
headercityCollection = document.querySelectorAll('.headercity')

if(citiesPopupLink){  
    citiesPopupLink.forEach((link) =>{
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if(!link.closest('.headercity').querySelector('.cities')){
                link.closest('.headercity').append(citiesPopup);
                citiesPopup.classList.add('active');
            }
            else{
                citiesPopup.classList.remove('active');
                 link.closest('.headercity').removeChild(citiesPopup);
            }
        })           
    })
     close.onclick = () => {
        citiesPopup.classList.remove('active');
        this.closest('.headercity').removeChild(citiesPopup);
    }
    document.body.onclick = (e) => {
        if(e.target !== citiesPopup && !e.target.closest('.cities') && !e.target.classList.contains('js-cities')){
           citiesPopup.classList.remove('active')  
           headercityCollection.forEach((headercity) => {
               headercity.removeChild(citiesPopup);
           })
        }
    }
    
}