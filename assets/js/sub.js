$(function(){
    
    //lnb
	$("#subVisual .lnb li button").on("click", function(){
		$(this).parent("li").toggleClass("active").siblings("li").removeClass("active");
		$(this).next(".depth02").stop().slideToggle();
		$(this).parents().siblings("li").find(".depth02").slideUp();
	});

});