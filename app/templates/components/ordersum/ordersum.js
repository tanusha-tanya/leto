const orderOpener = document.querySelector('.order-sum-openspoiler')
if (orderOpener){
    let orderList = document.querySelector('.order-sum-spoiler')
    let linkText = document.querySelector('.order-sum-link')
    orderOpener.addEventListener('click', () =>{
        orderOpener.classList.toggle('order-sum-openspoiler__active')
        orderList.classList.toggle('order-sum-spoiler__active')
        linkText.textContent=="Свернуть" ? linkText.textContent="Посмотреть весь заказ" : linkText.textContent="Свернуть"
    });        
}
