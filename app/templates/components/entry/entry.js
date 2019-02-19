const formCollection = document.querySelectorAll('.js-form')
if(formCollection){
    formCollection.forEach((form) => {
        consolr.log(form)
    })
}

const passwordCollection = document.querySelectorAll('.js-password');
if(passwordCollection){
    let svg = null;
    let input = null;
    passwordCollection.forEach((password)=>{
        svg = password.querySelector('.entry-eye');
        input = password.querySelector('.entry-input');
        svg.click = changeVisible(svg, input);
    })
    let changeVisible = (svg, input) => {
        alert(svg)
    }
}
