$(function () {


	// Мобильное меню
	$(".menu-toggle").click(function () {
		$('body').toggleClass("menu-expanded");
	});

	$('.btn-up').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 500);
		return false;
	});

	var swiper = new Swiper('.responses-slider', {
		autoHeight: true,
		slidesPerView: 2,
		spaceBetween: 30,
		// loop: true,
		observer: true,
		observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
		},
		// autoplay: {
		// 	delay: 5000,
		// },
	});

	var swiper = new Swiper('.beginners-slider', {
		autoHeight: true,
		slidesPerView: 3,
		spaceBetween: 30,
		// loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
		},
		// autoplay: {
		// 	delay: 5000,
		// },
	});

});