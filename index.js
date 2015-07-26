$(document).ready(function(){

	$(".cw_actual_logo").on("click",function(){
		$(".lani_actual_logo").animate({"opacity":0.5},250);
		$(this).animate({"opacity":1},250);
		$(".specific_project_pic").attr("src","cw_project.png");
		$(".project_link").attr("href","http://www.ChrisWissmach.me");
		$(".project_title").html("ChrisWissmach.me");
		$(".project_description").html("Created a personal website to showcase interests and past projects.");
		$(".task_1").html("Website design");
		$(".task_2").html("Web development in HTML, CSS, JavaScript, and jQuery");
	});

	$(".lani_actual_logo").on("click",function(){
		$(".cw_actual_logo").animate({"opacity":0.5},250);
		$(this).animate({"opacity":1},250);
		$(".specific_project_pic").attr("src","lani_project.png");
		$(".project_link").attr("href","http://www.lanilabs.com");
		$(".project_title").html("Lani Inc.");
		$(".project_description").html("Worked as a Software Developer Intern from May 2015 - present date.");
		$(".task_1").html("Web development in Ruby on Rails, HTML, CSS, JavaScript, and jQuery");
		$(".task_2").html("UI/UX design and development");
	});
	

	// show navbar if page loads under the home div
	if(document.body.scrollTop > window.innerHeight * 0.5){
		$(".navbar").show();
		$(".down_arrow").hide();
	};

	// set my name to be proportional to screen width
	$(".my_name").css("font-size", window.innerWidth * 0.06 + "px");

	// initiate paint drops
	paint_drip($(".blue"));
	paint_drip($(".yellow"));
	paint_drip($(".red"));
	paint_drip($(".green"));
	paint_drip($(".orange"));
	paint_drip($(".purple"));


	// icon hovers
	$(".down_arrow").hover(function(){
		$(this).animate({"opacity": "1"},250);
	}, function(){
		$(this).animate({"opacity": "0.5"},250);
	});

	$(".github_icon").hover(function(){
		$(this).animate({"opacity": "1"},250);
	}, function(){
		$(this).animate({"opacity": "0.5"},250);
	});

	$(".linkedin_icon").hover(function(){
		$(this).animate({"opacity": "1"},250);
	}, function(){
		$(this).animate({"opacity": "0.5"},250);
	})

	// scroll to certain sections when navbar buttons are clicked
	var nav_height = parseInt($(".navbar").css("height"));

	$(".down_arrow").on("click",function(){
		$("html, body").animate({ scrollTop: $("#about").offset().top - nav_height + 2}, 1000);
	});

	$(".navbar-brand").on("click",function(){
		$("html, body").animate({ scrollTop: $("#home").offset().top }, 1000);
	});

	$(".about_nav").on("click",function(){
		$("html, body").animate({ scrollTop: $("#about").offset().top - nav_height + 2}, 1000);
	});
	$(".projects_nav").on("click",function(){
		$("html, body").animate({ scrollTop: $("#projects").offset().top - nav_height + 2}, 1000);
	});
	$(".contact_nav").on("click",function(){
		$("html, body").animate({ scrollTop: $("#contact").offset().top - nav_height + 2}, 1000);
	});

	// adjust position to scroll to, depending on navbar collapse
	// adjust project picture height
	$(window).resize(function(){
		nav_height = parseInt($(".navbar").css("height"));
		updateNavActive(nav_height);
		
	})

	// check where on the site we are, adjust navbar accordingly
	$(window).on("scroll",function(){
		updateNavActive(nav_height);
	})
})

// return a random number between max and min
function getRandom(max,min){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// paint drips
function paint_drip(elem){
	var width = window.innerWidth;
	elem.css("margin-left", getRandom(0,width - 20));
	elem.css("width", getRandom(1,30));
	elem.fadeOut(5000, function(){
		$(this).slideDown((10000 + getRandom(-5000,5000)), paint_drip(elem));
	});
} 

function updateNavActive(nav_height){
	var home_height = parseInt($("#home").css("height"));
	var about_height = parseInt($("#about").css("height"));
	var projects_height = parseInt($("#projects").css("height"));
	var contact_height = parseInt($("#contact").css("height"));
	$(".active").removeClass("active");
	if(document.body.scrollTop < home_height * 0.5){
		$(".navbar").fadeOut();
		$(".down_arrow").show();
		$(".about_nav").addClass("active");
	};
	if(document.body.scrollTop == 0){
		$(".down_arrow").show();
	};
	if(document.body.scrollTop > 0){
		$(".down_arrow").hide();
	};

	if(document.body.scrollTop >= home_height * 0.5 && document.body.scrollTop < home_height + about_height -nav_height){
		$(".navbar").fadeIn();
		$(".down_arrow").hide();
		$(".about_nav").addClass("active");
	};

	if(document.body.scrollTop >= home_height + about_height - nav_height && document.body.scrollTop < home_height + about_height + projects_height - nav_height){
		$(".projects_nav").addClass("active");
	};

	if(document.body.scrollTop >= home_height + about_height + projects_height - nav_height){
		$(".contact_nav").addClass("active");
	};
}