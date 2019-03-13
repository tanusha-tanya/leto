const sub = document.querySelectorAll('.maintopmenu-link__sub');
const submenu = document.querySelector('.maintopmenu-submenu');
if(sub){
  sub.forEach((elem)=>{
    elem.onmouseover = function(){
      elem.classList.add('active');
      submenu.classList.add('active');
      submenu.innerHTML = elem.parentNode.querySelector('.maintopmenu-inner').innerHTML;
    }
  })
  document.body.onmouseover = function(e){
    if(e.target != submenu && e.target.closest('.maintopmenu-submenu') == null && !e.target.classList.contains("maintopmenu-link__sub") && !e.target.classList.contains("maintopmenu-li")){
        submenu.classList.remove('active');
        submenu.innerHTML = '';
        sub.forEach((elem)=>{
          elem.classList.remove('active');
        })
    }
  }
}
