const search = document.querySelector('.js-search');
const bodydark = document.querySelector('.body-dark');
if(search){
  const searchmenu = document.querySelector('.mobilesearch');
  const close = document.querySelector('.mobilesearch-close');
  search.onclick = function(){
    searchmenu.classList.add('open');
    bodydark.classList.add('active');
  }
  close.onclick = function(){
    label = document.querySelector('.mobilesearch-label');
    if(label.querySelector('.searchblock-ul')){
       label.removeChild(searchblock)
    }
    searchmenu.classList.remove('open');
    bodydark.classList.remove('active');
  }
}
