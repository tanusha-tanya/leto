let clickSearch = (inputSearch, button) => {
  button.onclick = (e)=>{
    e.preventDefault();
    let text = inputSearch.value;
    goSearch(text, inputSearch) 
  }
}

let goSearch = (text, inputSearch) => {
  let formAction = inputSearch.closest('.headersearch-form').action
  window.location.search = "";
  window.location = formAction+"?q="+text;
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
      button = document.querySelector('.mobilesearch-search'),
      label = document.querySelector('.mobilesearch-label');
  searchText(inputSearch, label)  
  clickSearch(inputSearch, button) 
}


  
