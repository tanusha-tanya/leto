const search = document.querySelector(".js-search")
if(search){
  const searchmenu = document.querySelector(".mobilesearch");
  const close = document.querySelector(".mobilesearch-close");
  search.onclick = function(){
    searchmenu.classList.add("open")
  }
  close.onclick = function(){
    searchmenu.classList.remove("open")
  }
}
