let cases = document.querySelectorAll('.searchblock-li'),
    searchblock = document.querySelector('.searchblock-ul');
let searchText = (inputSearch, label) => {
    inputSearch.oninput = () => {
        matchWord(inputSearch.value)
        cases.forEach((caseLi) => {
            if(caseLi.classList.contains('active')){
                $(label).append(searchblock);
                chooseWord(inputSearch, label);
            }
            else if(label.querySelector('.searchblock-ul')){
                label.removeChild(searchblock)
            }
        })
    }
}

let matchWord = (word) => {
    if(word.length !== 0){
        word.trim().toLowerCase();
        cases.forEach((caseLi) => {
            let caseWord = caseLi.textContent.trim().toLowerCase();
            if(caseWord.indexOf(word) !== -1){
                caseLi.classList.add('active')
            }
            else{
                caseLi.classList.remove('active');
            }
        })
    }    
    else{
        cases.forEach((caseLi) => {
             caseLi.classList.remove('active');
        })
    }
}

let chooseWord = (inputSearch, label) => {
    cases.forEach((item) =>{
        item.addEventListener('click',() => {
            inputSearch.value = item.textContent;
            if(label.querySelector('.searchblock-ul')){
                label.removeChild(searchblock)
            }
            searchText(inputSearch, label) 
        })
    })
} 
