const sitemap = document.querySelector('.sitemap');
if(sitemap){
    let openerCollection = document.querySelectorAll('.js-opener');
    let spoiled = null;
    let spoilerCollection = null;
    openerCollection.forEach((opener)=>{
        opener.addEventListener('click', ()=>{
            spoiled = opener.parentNode;
            spoiled.classList.toggle('open');
            spoilerCollection = spoiled.parentNode.querySelectorAll('.js-spoiled');
            spoilerCollection.forEach((anotherSpoiler) => {
                if(anotherSpoiler !== spoiled){
                    anotherSpoiler.classList.remove('open') 
                }
            })
        })
    })
}