let copyPromo = document.querySelectorAll('.bonuses-copy')
if(copyPromo){
    let number = null;
    copyPromo.forEach((copy) =>{
        copy.addEventListener('click', ()=>{
            number = copy.parentNode.querySelector('.bonuses-number');
            number.select();
  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';   
  } catch(err) {  
    console.log('Oops, unable to cut');  
  }  
        })
    })
}