const sub = document.querySelectorAll('.maintopmenu-link__sub');
const submenu = document.querySelector('.maintopmenu-submenu');
if(sub){
  sub.forEach((elem)=>{
    elem.onmouseover = function(){
      elem.classList.add('active');
      submenu.classList.add('active');
      submenu.innerHTML = elem.parentNode.querySelector('.maintopmenu-inner').innerHTML;
    }
  })
  document.body.onmouseover = function(e){
    if(e.target != submenu && e.target.closest('.maintopmenu-submenu') == null && !e.target.classList.contains("maintopmenu-link__sub") && !e.target.classList.contains("maintopmenu-li__sub")){
        submenu.classList.remove('active');
        submenu.innerHTML = '';
        sub.forEach((elem)=>{
          elem.classList.remove('active');
        })
    }
  }
}
(function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
      };
}(Element.prototype));