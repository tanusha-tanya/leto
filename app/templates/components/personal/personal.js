$(".personal-button").magnificPopup({
    type: 'ajax',
		overflowY: 'scroll',
		callbacks: {
			ajaxContentAdded: function() {
            $('body').trigger('ajaxReady')                
        }
    }
    
});