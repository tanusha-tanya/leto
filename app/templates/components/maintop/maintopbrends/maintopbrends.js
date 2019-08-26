let loop = false;
if(location.href.indexOf('bitrix_include_areas=Y') == -1){
  loop = true;
}


$('.maintopbrends-carousel').owlCarousel({
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  loop:loop,
  smartSpeed:450,
  dots: false,
  autoheight: false,
  center: true,
  responsive: {
    0: {
      items:3,
      center: true
    },
    768: {
      items:4,
      center: false
    },
    1220:{
      items:7,
      nav: true,
      navText:["<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel'></svg>", "<svg role='img' width='21' height='21'><use xlink:href='#arrow_carousel-right'></svg>"]
    }
  }
});
