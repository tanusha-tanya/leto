const search = document.querySelector(".headersearch")
if(search){
  let json = '../search.json';
  let input = document.querySelector(".headersearch-input");
  let list = document.querySelector('.autocomplete');
  let li = "";
  let array = [];
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
          setArray(string);
        }
        else{
          hideAutocomplite(array)
        }
      })
  	})

  	.catch(function (error) {
  		document.body.innerHTML = error;
  	})
  }

  input.oninput = function(){
    let word = input.value.toLowerCase().trim();
    if(word != ""){
      parseJson(word);
    }
    else{
      hideAutocomplite(array)
    }
  }

  function setArray(string){
    if (array.length > 0){
      checkArray(string.item);
      if (flag === true){
        array.push(string);
      }
      else{
        return
      }
    }
    else {
      array.push(string);
    }
    showAutocomplite(array)
  }

  function checkArray(string, flag){
    let newArr = array.filter(function(words) {
      return string.indexOf(words.item) != -1;
    });
    if(newArr.length > 0){
      flag = false;
    }
  }

  function showAutocomplite(array){
    list.classList.add("active");
    array.forEach((item) =>{
      li += `<li><a href="${item.link}">${item.item}</a></li>`
    });
    list.innerHTML = li;
  }

  function hideAutocomplite(array){
    list.classList.remove("active");
    li = "";
    list.innerHTML = li;
    array = [];
  }
}
