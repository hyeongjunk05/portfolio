$(document).ready(function(){
	$('.issue_MacLeft li').mouseover(function(){
		$('.opaqueBox').show().css({
			'left':$(this).offset().left,
			'top':$(this).offset().top,
			'width':$(this).width(),
			'height':$(this).height()
		}).mouseout(function(){
			$('.opaqueBox').hide();	
		});
	});
});