$(document).ready(function() {
 
        $('.btn').click(function() {
        $('.menu ul').slideToggle();
    })



    $(".owl_carousel").owlCarousel({
    	singleItem: true,
    	autoPlay: 4000
    });

    $(".owl_carousel2").owlCarousel({
    	items: 3,
    	autoPlay: 4000,
    	pagination: false,
    	navigation: true,
    	navigationText: ['<img src="img/left.png">','<img src="img/right.png">']
    });

 
});