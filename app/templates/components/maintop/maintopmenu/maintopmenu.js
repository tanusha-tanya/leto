const sub = document.querySelectorAll(".maintopmenu-link__sub");
if(sub){
  //const submenu = document.querySelector(".maintopmenu-submenu");
  sub.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
      e.preventDefault();
      elem.parentNode.querySelector('.maintopmenu-submenu').classList.toggle('active')
    })
  })
}
