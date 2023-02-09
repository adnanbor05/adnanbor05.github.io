'use strict';

(function ($) {

	// Preloader
	$("#preloder").delay(400).fadeOut("slow");


	//AOS Init
	AOS.init({
		disable: 'mobile'
	});

	// navigation
	$(".menu-switch").on('click', function () {
		$('.side-menu-wrapper').addClass('active');
		$('.menu-wrapper').addClass('hide-left');
	});

	$(".menu-close").on('click', function () {
		$('.side-menu-wrapper').removeClass('active');
		$('.menu-wrapper').removeClass('hide-left');
	});


	// background set
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	// work-slider
	$('.work-slider').owlCarousel({
		margin: 0,
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});


})(jQuery);


var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

var fullHeight = function () {

	if (!isMobile.any()) {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});
	}

};

fullHeight();


var sliderMain = function () {

	$('#banner .flexslider').flexslider({
		animation: "fade",
		slideshowSpeed: 8000,
		directionNav: true,
		start: function () {
			setTimeout(function () {
				$('.slider-text').removeClass('animated fadeInUp');
				$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
			}, 500);
		},
		before: function () {
			setTimeout(function () {
				$('.slider-text').removeClass('animated fadeInUp');
				$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
			}, 500);
		}

	});

};

sliderMain();


// go to top
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});
// scroll body to 0px on click
$('#back-to-top').on('click', function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});


// Isotope Filter
var $container = $('.work-gallery');
$container.imagesLoaded().progress(function () {
	$container.isotope();
});

$('.filter-wrapper li a').on('click', function () {
	$(".filter-wrapper li a").removeClass("active");
	$(this).addClass("active");
	var selector = $(this).attr('data-filter');
	$container.imagesLoaded().progress(function () {
		$container.isotope({
			filter: selector,
		});
	});
	return false;
});


//Page portfolio cursors
$("body").on("mousemove", function (n) {
	t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px",
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px",
		i.style.left = n.clientX + "px",
		i.style.top = n.clientY + "px"
});


var t = $('#cursor')[0],
	e = $('#cursor2')[0],
	i = $('#cursor3')[0];


function n(t) {
	e.classList.add("hover"), i.classList.add("hover")
}

function s(t) {
	e.classList.remove("hover"), i.classList.remove("hover")
}

s();

for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
	o(r[a])
}

function o(t) {
	$(t).on("mouseover", n), $(t).on("mouseout", s)
}

const cursor = document.querySelector('.cursor');

$(this).on('mousemove', function (e) {
	cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

$(this).on('click', function () {
	cursor.classList.add("expand");

	setTimeout(() => {
		cursor.classList.remove("expand");
	}, 500)
});