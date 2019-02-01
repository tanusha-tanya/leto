const orderOpener = document.querySelector('.order-sum-openspoiler')
if (orderOpener){
    let orderList = document.querySelector('.order-sum-spoiler')
    orderOpener.onclick = function(){
        orderList.classList.toggle('order-sum-spoiler__active')
    }
}