jQuery(window).load(function(){
	if(jQuery('.header-cart').length > 0){
		jQuery('.header-cart').hover(function(){
			jQuery(this).find('.block-content').slideToggle('fast');
		});
	}
});