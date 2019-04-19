const burger = document.querySelector(".headerburger");
if(burger){
  const menu = document.querySelector(".mobilemenu");
  const wrapCollection = document.querySelectorAll(".main-wrap");
  burger.onclick = function(){
    menu.classList.toggle("open");
    burger.classList.toggle("open");
    wrapCollection.forEach((wrap) => {
      wrap.classList.toggle("hide");
    })
  }
}
