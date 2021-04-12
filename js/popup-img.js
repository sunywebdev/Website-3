/*
$(function () {
	    "use strict";
	    
	    $(".popup img").click(function () {
	        var $src = $(this).attr("src");
	        $(".show-img").fadeIn();
	        $(".img-show img").attr("src", $src);
	    });
	    
	    $("span, .overlay-image").click(function () {
	        $(".show-img").fadeOut();
	    });
	    
	});
	
*/
$(function () {
	    "use strict";
	    
	    $(".card img").click(function () {
	        var $src = $(this).attr("src");
	        $(".show-img").fadeIn();
	        $(".img-show img").attr("src", $src);
	    });
	    
	    $("span, .overlay-image").click(function () {
	        $(".show-img").fadeOut();
	    });
	    
	});