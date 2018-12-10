const search = document.querySelector('.js-search');
const bodydark = document.querySelector('.body-dark');
if(search){
  const searchmenu = document.querySelector('.mobilesearch');
  const close = document.querySelector('.mobilesearch-close');
  search.onclick = function(){
    searchmenu.classList.add('open');
    console.log(bodydark);
    bodydark.classList.add('active');
  }
  close.onclick = function(){
    searchmenu.classList.remove('open');
    console.log(bodydark);
    bodydark.classList.remove('active');
  }
}
