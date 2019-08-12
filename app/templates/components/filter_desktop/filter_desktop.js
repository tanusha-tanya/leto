const deskfilter = document.querySelector('.deskfilter');
if (deskfilter){
  const spoilToggle = document.querySelectorAll('.deskfilter-opener')
  spoilToggle.forEach((elem)=>{
    elem.addEventListener('click',()=>{
      let thisSpoiler = elem.closest('.deskfilter-spoiler');
      let spoilers = document.querySelectorAll('.deskfilter-spoiler');
      if(!thisSpoiler.classList.contains('deskfilter-spoiler__active')){
        thisSpoiler.classList.add('deskfilter-spoiler__active')
      }
      else{
        thisSpoiler.classList.remove('deskfilter-spoiler__active')
      }
      for(let i = 0; i < spoilers.length; i++){
        if(spoilers[i] !== thisSpoiler){          
          spoilers[i].classList.remove('deskfilter-spoiler__active')
        }
      }
    })
  })  
}
const brandCheck = document.querySelectorAll('.deskfilter-scroll-checkbox')
const counter = document.querySelector('.counter');
const reset = document.querySelector('.deskfilter-reset');

if(counter){
  brandCheck.forEach((elem)=>{
    elem.addEventListener('change',()=>{
      brandCounter()
    })
  })


  let brandCounter = () => {
      let j = 0;
      for(let i = 0; i < brandCheck.length; i++){
        if(brandCheck[i].checked){
          j++;
        }
      }
      counter.textContent = j;
  }

  brandCounter();
  
  reset.addEventListener('click', (e)=>{
    e.preventDefault();
    brandCheck.forEach((elem)=>{
      elem.checked = false;
      counter.textContent = 0;
    })
  })
  const close = document.querySelector('.deskfilter-close');
   close.addEventListener('click', (e)=>{
     deskfilter.classList.remove('deskfilter__active')
   })
}
  
$('.deskfilter-scroll-container').mCustomScrollbar();
