$(function() {

	$('input.formstyler, select.formstyler').styler();

	$('.main__list').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		items:1
	});

	// $('.recipes-list').owlCarousel({
	// 	loop:true,
	// 	margin:0,
	// 	nav:true,
	// 	items:3
	// });

});
