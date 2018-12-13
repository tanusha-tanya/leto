const search = document.querySelector(".headersearch")
if(search){
  let json = '../search.json';
  let input = document.querySelector(".headersearch-input");
  let list = document.querySelector('.autocomplete');
  let li = "";
  let array = [];
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
          setArray(string)
        }
      })
  	})
  	.catch(function (error) {
  		document.body.innerHTML = error;
  	})
  }

  input.oninput = function(){
    let word = input.value.toLowerCase().trim();
    parseJson(word);
  }

  function setArray(string){
    if(array.length > 0){
      array.forEach((content)=>{
        if(content.item.indexOf(string.item) == -1){

        }
      })
    }
    else{
      array.push(string)
    }
    console.log(array)
    /*list.classList.add("active")
    list.innerHTML = li*/
  }
}
//1. получаем содержимое инпута
//2. сравниваем со строками
//3. пушим совпадения в автокомплит
//4. показываем автокомплит
