const deskfilter = document.querySelector('.deskfilter');
if (deskfilter){
  const spoilToggle = document.querySelectorAll('.deskfilter-spoiler-title')
  spoilToggle.forEach((elem)=>{
    elem.addEventListener('click',()=>{
      if(!elem.parentNode.classList.contains('deskfilter-spoiler__active')){
        elem.parentNode.classList.add('deskfilter-spoiler__active')
      }
      else{
        elem.parentNode.classList.remove('deskfilter-spoiler__active')
      }
      for(let i = 0; i < spoilToggle.length; i++){
        if(spoilToggle[i] !== elem){
          spoilToggle[i].parentNode.classList.remove('deskfilter-spoiler__active')
        }
      }
    })
  })

  const brandCheck = document.querySelectorAll('.deskfilter-scroll-checkbox')
  const counter = document.querySelector('.counter');
  const reset = document.querySelector('.deskfilter-reset');

  brandCheck.forEach((elem)=>{
    elem.addEventListener('change',()=>{
      let j = 0;
      for(let i = 0; i < brandCheck.length; i++){
        if(brandCheck[i].checked){
          j++;
        }
      }
      counter.textContent = j;
    })
  })

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
