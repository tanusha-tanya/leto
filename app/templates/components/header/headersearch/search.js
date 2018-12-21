const search = document.querySelector(".headersearch")
if(search){
  let json = '../search.json';
  let input = document.querySelector(".headersearch-input");
  let list = document.querySelector('.autocomplete');
  let li = "";
  let array = [];
  let strings = [];
  let flag = true;

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
        if(smallString.indexOf(word) != -1){
          checkArray(string)
          showAutocomplete()
        }
        else{
          hideAutocomplete()
        }
      })
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
      hideAutocomplete(strings)
    }
  }

  function checkArray(string){
    if(array.length === 0){
      array.push(string);
      strings.push(string.item);
    }
    else{
      if(strings.indexOf(string.item) == -1){
        array.push(string);
        strings.push(string.item);
      }
    }
  }

  function showAutocomplete(){
    list.classList.add("active");
    list.innerHTML = "";
    array.forEach((item) =>{
      li += `<li><a href="${item.link}">${item.item}</a></li>`
    });
    list.innerHTML = li;
  }

  function hideAutocomplete(){
    list.classList.remove("active");
    list.innerHTML = "";
    array = [];
    strings = []
  }
}
