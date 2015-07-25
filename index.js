$(document).ready(function(){

	$(".my_name").css("font-size", window.innerWidth * 0.06 + "px");
	paint_drip($(".blue"));
	paint_drip($(".yellow"));
	paint_drip($(".red"));
	paint_drip($(".green"));
	paint_drip($(".orange"));
	paint_drip($(".purple"));

	$(".down_arrow").on("click",function(){
		$("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
	})

	$(".home_nav").on("click",function(){
		$("html, body").animate({ scrollTop: $("#home").offset().top }, 1000);
	})

	$(".about_nav").on("click",function(){
		$("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
	})

	$(window).on("scroll",function(){
		$(".active").removeClass("active");
		if(document.body.scrollTop < window.innerHeight * 0.5){
			$(".navbar").fadeOut();
			$(".down_arrow").show();
			$(".about_nav").addClass("active");
		}
		else if(document.body.scrollTop > window.innerHeight * 0.5){
			$(".navbar").fadeIn();
			$(".down_arrow").hide();
			$(".about_nav").addClass("active");
		}

		else if(document.body.scrollTop > window.innerHeight){
			$(".projects_nav").addClass("active");
		}
	})
	
})

function getRandom(max,min){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function paint_drip(elem){
	var width = window.innerWidth * 0.5;
	
	elem.css("margin-left", getRandom(0,width));
	elem.css("width", getRandom(1,15));
	elem.fadeOut(5000, function(){
		$(this).slideDown((10000 + getRandom(-5000,5000)), paint_drip(elem));
	});
	} 
