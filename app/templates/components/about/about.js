$(function(){
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map('aboutmap', {
            center: [56.8522511,53.2091607],        
            zoom: 12
        }, {
            balloonPanelMaxMapArea: Infinity
        });
    }
});