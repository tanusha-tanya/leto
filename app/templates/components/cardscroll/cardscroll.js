let cardscroll = document.querySelector('.cardscroll');
if(cardscroll){   
    let cardContainer = document.querySelector('.container__card');
    let html = document.documentElement;
    let body = document.body;
    let scrollTop = null;
   
    let scrolled = () => {
        scrollTop = html.scrollTop || body && body.scrollTop || 0;
        scrollTop -= html.clientTop; 
        
        if(scrollTop >= cardContainer.clientHeight){
			cardscroll.classList.add('active')
        }
        else{
            cardscroll.classList.remove('active')
        }
    }

    document.addEventListener('scroll', scrolled)
    
}
