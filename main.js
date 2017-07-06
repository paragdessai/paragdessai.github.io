/*$ (document).ready(function(){

	$(".giftBox").click(function(){

		$(this).css("background-color", "yellow")

	})

}) */

$(document).ready(function(){
	$('.carousel').slick({
		autoplay:true, 
		adaptiveHeight:true,

	});
});



$(document).ready(function(){
$(".giftBox").click(function(){
$(".giftBoxSelected").removeClass("giftBoxSelected");
	$(this).addClass("giftBoxSelected");
})


})


	

