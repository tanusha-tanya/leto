let clickSearch = (input, button) => {
  button.onclick = (e)=>{
    e.preventDefault();
    let searchText = input.value;
    goSearch(searchText) 
  }
}
let goSearch = (searchText) => {
  window.location.search = "";
  window.location = "search.html?q="+searchText;
}

const headersearch = document.querySelector('.headersearch')
if(headersearch){
  let input = document.querySelector('.headersearch-input'),
      button = document.querySelector('.headersearch-button'),
      label = document.querySelector('.headersearch-label');
  searchText(input, label)  
  clickSearch(input, button)  

}
const mobilesearch = document.querySelector('.mobilesearch')
if(mobilesearch){
  let input = document.querySelector('.mobilesearch-input'),
      button = document.querySelector('.mobilesearch-svg'),
      label = document.querySelector('.mobilesearch-label');
  searchText(input, label)  
  clickSearch(input, button) 
}


  
  /*let list = document.querySelector('.autocomplete');
  let li = '';
  let array = [];
  let isPushed = false;

  function parseJson(word){
    fetch(json)

  	.then(function (response) {
  		if (response.status !== 200) {
  		  return Promise.reject(new Error(response.statusText))
  		}
  		return Promise.resolve(response)
  	})

  	.then(function (response) {
  		return response.json()
  	})

  	.then(function (data) {
      data.forEach((string)=>{
        let smallString = string.item.toLowerCase().trim();
        if(smallString.indexOf(word) !== -1){
           checkArray(string)
        }
        else{
          hideAutocomplete()
        }
      })
      if(isPushed){
        showAutocomplete()
      }
  	})

  	.catch(function (error) {
  		console.log(error);
  	})
  }

  input.oninput = function(){
    let word = input.value.toLowerCase().trim();
    if(word != ""){
      parseJson(word);
    }
    else{
      hideAutocomplete()
    }
  }

  function checkArray(string){
    if(array.length === 0){
      array.push(string.item);
      isPushed = true;
    }
    else if(array.indexOf(string.item) == -1){
        array.push(string.item);
        isPushed = true;
    }
    else{
        isPushed = false;       
    }
    return isPushed
  }
  
  
  function showAutocomplete(){    
    list.classList.add("active");
    list.innerHTML = "";
    array.forEach((item) =>{
      li += `<li>${item}</li>`
    });
    list.innerHTML = li;
  }

  function hideAutocomplete(){
    list.classList.remove("active");
    list.innerHTML = "";
    array = [];
  }
}*/
