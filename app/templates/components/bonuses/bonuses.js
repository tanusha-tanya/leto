let  copyPromo = ()=>{
  let bonusesCopy = document.querySelectorAll('.bonuses-copy')
  if(bonusesCopy){
      let number = null;
      bonusesCopy.forEach((copy) =>{
          copy.addEventListener('click', (e)=>{
            e.preventDefault();
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
}
copyPromo();