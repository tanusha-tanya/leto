let clickSearch = (inputSearch, button) => {
  button.onclick = (e)=>{
    e.preventDefault();
    let text = inputSearch.value;
    goSearch(text) 
  }
}

let goSearch = (text) => {
  window.location.search = "";
  window.location = "search.html?q="+text;
}

const headersearch = document.querySelector('.headersearch')
if(headersearch){
  let inputSearch = document.querySelector('.headersearch-input'),
      button = document.querySelector('.headersearch-button'),
      label = document.querySelector('.headersearch-label');
  searchText(inputSearch, label)  
  clickSearch(inputSearch, button)
}

const mobilesearch = document.querySelector('.mobilesearch')
if(mobilesearch){
  let inputSearch = document.querySelector('.mobilesearch-input'),
      button = document.querySelector('.mobilesearch-svg'),
      label = document.querySelector('.mobilesearch-label');
  searchText(inputSearch, label)  
  clickSearch(inputSearch, button) 
}


  
