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
}
$('.deskfilter-scroll-container').mCustomScrollbar();
