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
    if(word != ""){
      parseJson(word);
    }
  }

  function setArray(string){
    if(array.length > 0){
      let filterArr = array.filter(function(element) {
        if (element.item.indexOf(string) == -1) {
          console.log(string)
          console.log("строки нет в массиве")
      	} else {
      		console.log("строка есть в массиве")
      	}
      });
    }
    else{
        array.push(string);
      	console.log("массив не пустой");
        return
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
