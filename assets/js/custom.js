(function ($) {
	"use strict";


	//Clone Mobile Menu
	function cloneMobileMenu($cloneItem, $mobileLoc) {
		var $combinedmenu = $($cloneItem).clone().removeClass('d-none d-xl-inline-block');
		$combinedmenu.appendTo($mobileLoc);

		var $submenu = $($mobileLoc).find('li').has('.has-mega-menu');
		var $mobileSubMenuOpen = $(".menu-click");
		$mobileSubMenuOpen.each(function() {
			var $self = $(this);
			$self.on("click", function(e) {
				e.stopImmediatePropagation();
				$self.siblings(".has-mega-menu").slideToggle("slow");
			});
		});
		
	}
	cloneMobileMenu(".header .navbar .navbar-menu", ".mobileMenu");

	/* Humberger Button Click - Right Side Nav Open && body click - Right Side Nav hide */
    function mobileMenu(selector, actionSelector) {
		// Sub Menu Indicator
		var $submenuIndicator = $('.mobileMenu li.has-mega-menu > a');
		$submenuIndicator.append('<span class="sub-menu-indicator float-right"><svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="12px" height="12px" viewBox="0 0 792 792" style="transform: rotate(90deg)" fill="#fff" > <polygon points="580.802,369.604 580.802,369.604 211.198,0 184.802,26.396 554.405,396 184.802,765.604 211.198,792 607.198,396 "/> </svg></span>');
		
		var mobileMenu = $(selector);
    	mobileMenu.on("click", function() {
    		$(selector).toggleClass('menu-open');
    	});
		
    	var hamburgerbtn = $(selector);
    	hamburgerbtn.on("click", function() {
			$(actionSelector).toggleClass('menu-open');
			// $('body').toggleClass('is-menu-open');
		});

    	$(document).on('click', function(e) {
    		var selectorType = $(actionSelector).add(mobileMenu);
    		if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
    			$(actionSelector).removeClass("menu-open");
    			$(selector).removeClass("menu-open");
    		}          
    	});

		$(".mobileMenu li.has-mega-menu a").attr({
			"data-toggle": "collapse", 
			"data-target" : ".mega-menu"
		});
		$(".mobileMenu li.has-mega-menu .mega-menu").addClass("collapse");
    };
    
    mobileMenu('.header .hamburger-btn', '.mobileMenu');

	function showSearchForm(selector, action) {
		
		var searchIcon = $(selector);
    	searchIcon.on("click", function() {
    		$(action).toggleClass('d-none');
    	});

    	$(document).on('click', function(e) {
    		var selectorType = $(action).add(searchIcon);
    		if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
    			$(selector).removeClass("show-form");
    			$(action).removeClass("show-form");
    		}          
    	});
	};
	showSearchForm('.nav-hamburger .search-btn', '.search-movie-form');

	$('.movie-banner-carousel').slick({
		centerMode: true,
		infinite: true,
		focusOnSelect: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 1,
		arrows: !1,
		dots: true,
		cssEase: 'ease-in-out',
	});




})(jQuery);