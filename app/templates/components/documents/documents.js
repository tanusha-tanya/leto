let documentSpoiler = document.querySelectorAll('.documents-spoiler')

if (documentSpoiler){
    documentSpoiler.forEach((spoiler) =>{
        spoiler.addEventListener('click', (e)=>{  
            console.log(e.target)           
            if(e.target.closest('.documents-download') || e.target.classList.contains('documents-download')){
                return
            }
            else{
                documentSpoiler.forEach((element) => {
                    if(element !== spoiler){
                        element.classList.remove('open')
                    }                
                })  
               spoiler.classList.toggle('open')   
               checkTetx()  
            }                          
        })        
    })

    let checkTetx = () => {     
        let spoiledTextCollection = document.querySelectorAll('.documents-info__spoil');
        spoiledTextCollection.forEach((spoiledText) =>{
            if(spoiledText.closest('.open')){
                let fullText = spoiledText.dataset.text;
                let spoilText =  spoiledText.textContent;
                spoiledText.textContent = fullText;
                spoiledText.dataset.text = spoilText;
            }
            else if(spoiledText.dataset.text.length < spoiledText.textContent.length){
                let spoilText = spoiledText.dataset.text;
                let fullText =  spoiledText.textContent;
                spoiledText.textContent = spoilText;
                spoiledText.dataset.text = fullText;
            }
            else {
                return;
            }
        })
    }    
}