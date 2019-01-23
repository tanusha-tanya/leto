const quantity = document.querySelector('.card-pricecontroller-input')
if(quantity){
  const minus = document.querySelector('.card-minus')
  const plus = document.querySelector('.card-plus')

  minus.addEventListener('click', ()=>{
    quantityChange(false)
  })

  plus.addEventListener('click', ()=>{
    quantityChange(true)
  })

  let quantityChange = function(sign){
    if (!sign){
      if(quantity.placeholder <= 1){
        return
      }
      else{
        quantity.placeholder--
      }
    }
    else{
      quantity.placeholder++
    }
  }
}
