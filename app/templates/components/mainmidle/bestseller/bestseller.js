let bestsellerRemove = ()=>{  
  let bestsellerParent = document.querySelectorAll('.bestseller-carousel');
  if(bestsellerParent){
    if(bestsellerParent.length > 0 && $(window).width() < 768){
      bestsellerParent.forEach((bestseller)=>{
        let items = bestseller.querySelectorAll('.bestseller-item');
        if(items.length > 9){
          for(let i = 9; i < items.length; i++){
            items[i].parentElement.removeChild(items[i])
          }
        }
      })
    }  
  }
    $('.bestseller-carousel').owlCarousel({
      autoplayHoverPause:true,  
      dots: true,
      autoheight: false,
      center: true,
      onInitialized: callbackBestseller,
      responsive : {
        0: {
          items:1,
          center: true,
          autoHeight:true
        },
        768: {
          items:2,
          center: false,
          margin: 20
        },
        1220:{
          items:4,
          center: false,
          margin: 40,
          nav: true,
          navText:["<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel'></svg>", "<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel-right'></svg>"],
          slideBy: 4
        }
      }
  });
  function callbackBestseller(event) {
    $('body').trigger('ajaxReady');
  }
}

bestsellerRemove();
