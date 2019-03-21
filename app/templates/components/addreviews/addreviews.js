$('body').on('click', '.js-star', function(e){
    e.preventDefault();
    let starsBlock = $(this).closest('.message-stars')
    let input = starsBlock.find('#addreviews')
    let stars = starsBlock.find('.js-star');
    let currentstar = this;
    let num = 0;
     for(let i = 0; i < stars.length; i++){
        stars[i].classList.remove('active')
    } 
    for(let i = 0; i < stars.length; i++){
        if(stars[i] !== currentstar){
            num++
        }
        else{
            setStars(num+1, starsBlock)
        }
    }    
})
let setStars = (counter, starsBlock)=>{
    let input = starsBlock.find('#addreviews')
    let stars = starsBlock.find('.js-star');
    for(let i = 0; i < counter; i++){
        stars[i].classList.add('active')
    } 
    input.val(counter)
}