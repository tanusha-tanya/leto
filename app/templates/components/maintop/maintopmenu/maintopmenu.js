const sub = document.querySelectorAll('.maintopmenu-link__sub');
const submenu = document.querySelector('.maintopmenu-submenu');
if(sub){
  sub.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
      e.preventDefault();
      sub.forEach((el)=>{
        if(el == elem ){
          if(el.classList.contains('active')){
            el.classList.remove('active');
            submenu.classList.remove('active');
            submenu.innerHTML = '';
          }
          else{
            el.classList.add('active');
            submenu.classList.add('active');
            submenu.innerHTML = el.parentNode.querySelector('.maintopmenu-inner').innerHTML;
            missClick(el)
          }
        }
        else{
          el.classList.remove('active');
        }
      });
    })
  })
}
function missClick(el){
  document.body.onclick = function(e){    
    if(e.target.closest('.maintopmenu-submenu') == null && e.target != submenu && e.target != el){
      submenu.classList.remove('active');
      submenu.innerHTML = '';
      sub.forEach((elem)=>{
        elem.classList.remove('active');
      })
    }
  }
}
