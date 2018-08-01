$(function() {
	$('.toggles button').click(function() {
		var	get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(1000);
		get_current.show(1000);
	});

	$('#showall').click(function() {
		$('.post').show(1000);
	})
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 8,
  	loop: true, // закольцевать
    nav: true, // навигация
    navText: ['<i class="fa fa-caret-square-o-right"></i>', '<i class="fa fa-caret-square-o-left"></i>'],
    autoplay:true, // автопрокрутка
    autoplayTimeout:3000, // задержка в мс
    autoplayHoverPause:false, // не останавливать при наведении
    responsive:{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:8,
            nav:true,
            loop:false
        }
    }

  });

	if($(window).width() < 420){
	 $(".owl-carousel").owlCarousel({
  	items: 3
   })
	};

});