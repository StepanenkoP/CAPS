$(document).ready(function() {

	$(".arrow_bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".s_top").height() }, "slow");
		return false;
	});

	$(".s_top, .s_top__content").css("min-height", $(window).height());
	
	$(".s_top__content__button").css("margin-left", -($(".s_top__content__button .arrow_bottom").width())/2);
	
	$(".main_mnu").css("min-height", $(window).height());

	$(".main_mnu__logo").css("height", ($(window).height())*0.12);
	$(".main_mnu__logo a img").css("height", ($(".main_mnu__logo").height())*0.8);
	$(".main_mnu__logo a img").css("width", ($(".main_mnu__logo").width())*0.6);

	$(".big_mnu__img a img").css("height", ($(".main_mnu__logo").height())*0.8);
	$(".big_mnu__img").css("height", ($(".main_mnu__logo").height()));

	///Mobile mnu
	$(".m_mnu").css("width", $(window).width());
	$(".m_mnu").css("height", $(window).height() -35);
	$(".m_mnu").css("transform", "translate3d(0px," + -($(".m_mnu").height()+35) + "px, 0px)");
	$(".m_mnu_wrapper .m_mnu__img img").css("height", $(".m_mnu_wrapper .m_mnu__img").height()*0.7);
	$(".m_mnu_wrapper .m_mnu__img img").css("margin-left", -($(".m_mnu_wrapper .m_mnu__img img").width())/2);
	// second section

	if (window.matchMedia('(min-width: 768px)').matches) {
		$(".s_second, .s_second__content").css("min-height", $(window).height());
		$(".s_second__right").css("max-height", ($(window).height())*0.46);
		$(".s_second__left").css("max-height", ($(window).height())*0.61);
		$(".s_second__content__centertext .img_wrapper").css("max-height", ($(window).height())*0.33);
		$(".s_second__content__centertext .text_wrapper").css("max-height", ($(window).height())*0.50);
	}
	// third section
	
	if (window.matchMedia('(min-width: 768px)').matches) {
		$(".s_third, .s_third__content").css("min-height", $(window).height());
		$(".s_third__content__change").css("height", ($(window).height())*0.55);
		$(".s_third__content__change").css("perspective", ($(window).width())*0.44);
		$(".slide").css("height", ($(window).height())*0.55);
		$(".s_third__content__slider .slide .img_wrapper").css("height", ($(window).height())*0.55);
		$(".s_third__content__change .img_1").css("height", ($(".s_third__content__change").height())*0.85);
		$(".s_third__content__change .img_2").css("height", ($(".s_third__content__change").height())*0.7);
	}

	$(window).resize(function() {
		$(".s_top, .s_top__content").css("min-height", $(window).height());
		$(".s_top__content__button").css("margin-left", -($(".s_top__content__button .arrow_bottom").width())/2);
		$(".main_mnu").css("min-height", $(window).height());
		$(".big_mnu").css("min-height", $(window).height());
		$(".big_mnu__content").css("min-height", $(window).height());
		if (window.matchMedia('(max-width: 992px)').matches) {
			$(".m_mnu").css("width", $(window).width());
			$(".m_mnu").css("height", $(window).height() -35);
			$(".m_mnu").css("transform", "translate3d(0px," + -($(".m_mnu").height()+35) + "px, 0px)");
			$(".m_mnu_wrapper .m_mnu__img img").css("height", $(".m_mnu_wrapper .m_mnu__img").height()*0.7);
			$(".m_mnu_wrapper .m_mnu__img img").css("margin-left", -($(".m_mnu_wrapper .m_mnu__img img").width())/2);
		}
		if (window.matchMedia('(min-width: 768px)').matches) {
			$(".main_mnu__logo").css("height", ($(window).height())*0.12);
			$(".main_mnu__logo a img").css("height", ($(".main_mnu__logo").height())*0.8);
			$(".main_mnu__logo a img").css("width", ($(".main_mnu__logo").width())*0.6);
			$(".big_mnu__img").css("height", ($(".main_mnu__logo").height()));
			$(".big_mnu__img a img").css("height", ($(".main_mnu__logo").height())*0.8);
			$(".big_mnu").css("width", ($(window).width())/2 - $(".main_mnu").width());
			$(".big_mnu__img").css("width", ($(".big_mnu").width()) + $(".main_mnu").width());
			$(".big_mnu").css("transform", "translate3d(" + -($(".big_mnu").width()) + "px, 0px, 0px)");
			$(".s_second, .s_second__content").css("min-height", $(window).height());
			$(".s_second__right").css("max-height", ($(window).height())*0.46);
			$(".s_second__left").css("max-height", ($(window).height())*0.61);
			$(".s_second__content__centertext .img_wrapper").css("max-height", ($(window).height())*0.33);
			$(".s_second__content__centertext .text_wrapper").css("max-height", ($(window).height())*0.50);
		}
		if (window.matchMedia('(min-width: 768px)').matches) {
			$(".s_third, .s_third__content").css("min-height", $(window).height());
			$(".slide").css("height", ($(window).height())*0.55);
			$(".s_third__content__slider .slide .img_wrapper").css("height", ($(window).height())*0.55);
			$(".s_third__content__change").css("height", ($(window).height())*0.55);
			$(".s_third__content__change").css("perspective", ($(window).width())*0.44);
			$(".s_third__content__change .img_1").css("height", ($(".s_third__content__change").height())*0.85);
			$(".s_third__content__change .img_2").css("height", ($(".s_third__content__change").height())*0.7);
		}
	});

	
	$(".main_mnu__lang ul li").click(function() {
		$(".main_mnu__lang .title").text($(this).text());
	});

	$(".big_mnu").css("width", ($(window).width())/2 - $(".main_mnu").width());

	$(".big_mnu").css("min-height", $(window).height());


	$(".big_mnu__content").css("min-height", $(window).height());

	$(".big_mnu__img").css("width", ($(".big_mnu").width()) + $(".main_mnu").width());

	$(".big_mnu").css("transform", "translate3d(" + -($(".big_mnu").width()) + "px, 0px, 0px)");
	
	$(".main_mnu__open .mnu_button").click(function() {
		$(this).hide();
		$(".close").show();
		$(".big_mnu").toggleClass("opened");
		$("body").toggleClass("no_scroll");
		$(".big_mnu__dark").toggleClass("no_dark");
		$(".main_mnu__logo").toggleClass("no-logo");
		$(".big_mnu").css("transform", "translate3d(0px, 0px, 0px)");
	});

	$(".big_mnu__dark").click(function() {
		$(this).toggleClass("no_dark");
		$(".big_mnu").toggleClass("opened");
		$(".close").hide();
		$("body").toggleClass("no_scroll");
		$(".main_mnu__open .mnu_button").show();
		$(".main_mnu__logo").toggleClass("no-logo");
		$(".big_mnu").css("transform", "translate3d(" + -($(".big_mnu").width()) + "px, 0px, 0px)");
	});

	$(".close").click(function() {
		$(this).hide();
		$(".big_mnu").toggleClass("opened");
		$("body").toggleClass("no_scroll");
		$(".big_mnu__dark").toggleClass("no_dark");
		$(".main_mnu__logo").toggleClass("no-logo");
		$(".main_mnu__open .mnu_button").show();
		$(".big_mnu").css("transform", "translate3d(" + -($(".big_mnu").width()) + "px, 0px, 0px)");
	});

	$(".big_mnu__content .nav_mnu__left li").click(function() {
		$(".big_mnu__content .nav_mnu__left li").removeClass("active");
		$(this).addClass("active");
	});

	$(".m_mnu_wrapper .mnu_button").click(function() {
		$(".m_mnu").css("transform", "translate3d(0px, 0px, 0px)");
		$(this).hide();
		$(".m_mnu_wrapper .close").show();
		$("body").addClass("no_scroll");
	});

	$(".m_mnu_wrapper .close").click(function() {
		$(".m_mnu").css("transform", "translate3d(0px," + -($(".m_mnu").height()+35) + "px, 0px)");
		$(this).hide();
		$(".m_mnu_wrapper .mnu_button").show();
	});


	// Carousel
	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		nav: true,
		navText: "",
		items: 1,
		mouseDrag: false
	});

	$(".next").click(function() {
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function() {
		owl.trigger('prev.owl.carousel');
	});

	//tabs

	$(".m_mnu_wrapper .m_mnu__content .tabs .tab").click(function() {
		$(".m_mnu_wrapper .m_mnu__content .tabs .tab").removeClass("active");
		$(this).addClass("active");
		$(".tab_content div").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	//top animation
	$(".s_top, .s_third").mousemove(function (e) {
			var moveX = (e.pageX * -1/100);
			var moveY = (e.pageY * -1/100);
			$(this).css("background-position", moveX + "px " + moveY + "px");
	});

	//second section animation
	$(".s_second").waypoint(function() {

		$(".s_second >div").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("off").addClass("on")
			},500*index);

		});

	}, {
		offset: "50%"
	});


});
