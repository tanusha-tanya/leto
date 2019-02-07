const payItemCollection = document.querySelectorAll('.pay-item');
if(payItemCollection){
    let info = null;
    payItemCollection.forEach((payItem) =>{
        payItem.addEventListener('click',()=>{                    
            if(!payItem.classList.contains("pay-item__activ"))
            {
                payItemCollection.forEach((elem)=>{
                 elem.classList.remove("pay-item__activ")
                });
                payItem.classList.add("pay-item__activ") 
            }
            else{
                 payItem.classList.remove("pay-item__activ")
            }
        })
    })
}