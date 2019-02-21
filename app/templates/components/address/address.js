$(".js-popup").magnificPopup({
    type: 'ajax',
		overflowY: 'scroll',
		callbacks: {
			ajaxContentAdded: function()    {  
                $(this.content).find(".js-popup-inside").magnificPopup({
					type: 'ajax',
					alignTop: true,
					overflowY: 'scroll'
				});                
            }
        }    
});

const deleteCollection = document.querySelectorAll('.js-delete');
if(deleteCollection){
    deleteCollection.forEach((element) =>{
        element.addEventListener('click',(e)=>{                    
           e.preventDefault()
        })
    })
}