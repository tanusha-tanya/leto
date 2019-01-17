const sort = document.querySelector('.sort-block');
if(sort){
  const sortType = document.querySelector('.sort-type');
  sortType.addEventListener('click', function(){
    sort.classList.toggle('sort-block__active')
  })
  const sortLink = document.querySelectorAll('.sort-link')
  sortLink.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        for(let i = 0; i < sortLink.length; i++){
          sortLink.classList.remove('.sort-link__active')
        }
        elem.classList.toggle('.sort-link__active')
    })
  })
}
