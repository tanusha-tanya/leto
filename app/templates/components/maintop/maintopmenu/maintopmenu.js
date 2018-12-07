const sub = document.querySelectorAll(".maintopmenu-link__sub");
const submenu = document.querySelector(".maintopmenu-submenu");
if(sub){
  sub.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
      e.preventDefault();
      sub.forEach((el)=>{
        console.log(el == elem);
        if(el == elem ){
          if(el.classList.contains('active')){
            el.classList.remove('active');
            submenu.classList.remove('active');
            submenu.innerHTML = "";
          }
          else{
            el.classList.add('active');
            submenu.classList.add('active');
            submenu.innerHTML = el.parentNode.querySelector('.maintopmenu-inner').innerHTML;
          }
        }
        else{
          el.classList.remove('active');
        }
      });
    })
  })
}
