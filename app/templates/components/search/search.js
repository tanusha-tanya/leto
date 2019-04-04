let cases = document.querySelectorAll('.searchblock-li'),
    searchblock = document.querySelector('.searchblock-ul');
let searchText = (input, label) => {
    input.oninput = () => {
        matchWord(input.value)
        cases.forEach((caseLi) => {
            if(caseLi.classList.contains('active')){
                label.append(searchblock)
            }
            else if(label.queryselector('.searchblock-ul')){
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
                caseLi.classList.remove('active')
            }
        })
    }    
    else{
        cases.forEach((caseLi) => {
             caseLi.classList.remove('active')
        })
    }
}