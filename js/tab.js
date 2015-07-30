$(document).ready(function() {
	$('.d1-tab > li').click(function() {
		$(this).find('span').addClass('d1-active');
		$(this).siblings().find('span').removeClass('d1-active')
		var tab = $(this).attr('data-title');
		$('#'+tab).show().siblings().hide();
	})

	$('.d2-tab > li').click(function() {
		$(this).find('span').addClass('d2-active');
		$(this).siblings().find('span').removeClass('d2-active')
		var tab1 = $(this).attr('data-title');
		$('#'+tab1).show().siblings().hide();
	});

})