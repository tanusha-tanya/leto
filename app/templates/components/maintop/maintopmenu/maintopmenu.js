const sub = document.querySelectorAll('.maintopmenu-link__sub');
const submenu = document.querySelector('.maintopmenu-submenu');
if(sub){
  sub.forEach((elem)=>{
    elem.onmouseover = function(){
      let menuHeight = 0;
      elem.classList.add('active');      
      submenu.innerHTML = elem.parentNode.querySelector('.maintopmenu-inner').innerHTML;
      let childrenCollection = submenu.children;
      submenu.classList.add('active');
      for(let i = 0; i < childrenCollection.length; i++){
        menuHeight += Number(childrenCollection[i].clientHeight)        
      }            
      menuHeight = menuHeight / 2.5 + 50;      
      submenu.style.height = menuHeight + 'px';     
    }
  })
  document.body.onmouseover = function(e){
    if(e.target != submenu && e.target.closest('.maintopmenu-submenu') == null && !e.target.classList.contains("maintopmenu-link__sub") && !e.target.classList.contains("maintopmenu-li")){
        submenu.classList.remove('active');
        submenu.innerHTML = '';
        submenu.style.height = '';
        sub.forEach((elem)=>{
          elem.classList.remove('active');
        })
    }
  }
}
