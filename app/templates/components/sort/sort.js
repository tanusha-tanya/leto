const sort = document.querySelector('.sort-block');
if(sort){
  const sortType = document.querySelector('.sort-type');
  sortType.addEventListener('click', function(){
    sort.classList.toggle('sort-block__active')
  })
  const sortLink = document.querySelectorAll('.sort-link')
  sortLink.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
      e.preventDefault()
      if(!elem.classList.contains('sort-link__active')){
        sortType.textContent = elem.textContent
        elem.classList.add('sort-link__active')
      }
      for(let i = 0; i < sortLink.length; i++){
        if(sortLink[i] !== elem){
          sortLink[i].classList.remove('sort-link__active')
        }
      }
      sort.classList.remove('sort-block__active')
    })
  })
}
