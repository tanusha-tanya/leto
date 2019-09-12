const burger = document.querySelector(".headerburger");
if(burger){
  const menu = document.querySelector(".mobilemenu");
  const wrapCollection = document.querySelectorAll(".main-wrap");
  const header = document.querySelector(".header");
  burger.onclick = function(){
    menu.classList.toggle("open");
    burger.classList.toggle("open");
    let height = menu.clientHeight + header.clientHeight;
    if(menu.classList.contains("open")){      
      document.body.style.height = height + 'px'; 
      document.body.style.overflow = 'hidden'; 
    }
    else{
      document.body.style.height = 'auto'; 
      document.body.style.overflow = 'auto'; 
    }    
  }
}
