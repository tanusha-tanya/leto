const innermenuSwitch = document.querySelector('.innermenu-hamburger');
if(innermenuSwitch){
    let innermenu = document.querySelector('.innermobilemenu')
    let close = document.querySelector('.innermobilemenu-close')
    innermenuSwitch.onclick = function() {
        innermenu.classList.add('innermobilemenu__active')
    }
    close.onclick = function(){
        innermenu.classList.remove('innermobilemenu__active')
    }
}