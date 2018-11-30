const burger = document.querySelector(".headerburger");
if(burger){
  const menu = document.querySelector(".mobilemenu");
  const wrap = document.querySelector(".main-wrap");
  burger.onclick = function(){
    menu.classList.toggle("open");
    burger.classList.toggle("open");
    wrap.classList.toggle("hide");
  }
}
