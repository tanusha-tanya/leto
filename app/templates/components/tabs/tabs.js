const tabs = document.querySelector('.tabs')

if(tabs){
  let links = document.querySelectorAll('.tabs-anchor')
  let tabsContent = document.querySelectorAll('.tabs-content')
  let target = null;
  let currenttab = null;

  let openTab = () =>{
    links.forEach((elem)=>{
    if(location.hash === elem.hash){      
      for(let i = 0; i < links.length; i++){
        if(links[i] !== elem){
          links[i].classList.remove('tabs-anchor__active')
          tabsContent[i].classList.remove('tabs-content__active')
        }
      }
      elem.classList.add('tabs-anchor__active')
      target = elem.hash.split('#')[1]
      currenttab = document.getElementById(target)
      currenttab.classList.add('tabs-content__active')
    }
  })
}  
  openTab();

  window.addEventListener('hashchange', hashchange);
  function hashchange(e){ 
    e.preventDefault();
    var hash = location.hash;
    openTab()
  }

  links.forEach((elem)=>{
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = elem.hash;
  })
})

}

let linksScroll = () => {
  $('.tabs-links').slick({
   slidesToShow: 3,
   slidesToScroll: 3,
   infinite: false,
   mobileFirst: true,
   responsive: [
    {
      breakpoint: 768,
      settings: "unslick"
    }
  ]
})

}
linksScroll()

window.addEventListener('resize', linksScroll, false)