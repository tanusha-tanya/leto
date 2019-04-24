const innermenuSwitch = document.querySelector('.innermenu-hamburger');
if(innermenuSwitch){
    let innermenu = document.querySelector('.innermobilemenu')
    let close = document.querySelector('.innermobilemenu-close')
    let missClick = () => {
        document.body.addEventListener('click', (e) =>{
        if((!e.target.closest('.innermenu-hamburger') && 
            e.target !== innermenu &&
            !e.target.closest('.innermobilemenu')) || e.target === close){
            innermenu.classList.remove('innermobilemenu__active')
        }
        })
    }
    innermenuSwitch.onclick = function() {
        innermenu.classList.add('innermobilemenu__active')
        missClick();
    }
    close.onclick = function(){
        innermenu.classList.remove('innermobilemenu__active')
    }    
}