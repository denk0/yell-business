$(document).ready(function() {
	$('.go-next').click(function() {
		var nextLink = $('#fp-nav li a.active').parent().next().children('a').attr('href');
		$(".go-next").attr("href", nextLink);
	});
	$('.auto-box').click(function(){
		$('.auto-box').removeClass('index-more');
		$(this).addClass('index-more');
	});
});
