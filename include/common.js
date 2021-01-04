$(function () {


	// Мобильное меню
	$(".menu-toggle").click(function () {
		$('body').toggleClass("menu-expanded");
	});

	// кнопка скролл вверх
	$('.js-btn-up').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 500);
		return false;
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

	var swiper = new Swiper('.swip-gallery-slider', {
		autoHeight: true,
		slidesPerView: 4,
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
				slidesPerView: 3,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
		},
		// autoplay: {
		// 	delay: 5000,
		// },
	});

	jQuery(document).ready(function ($) {
		$('a[data-rel^=lightcase]').lightcase({
			showSequenceInfo: false,
			showTitle: false,
			showCaption: false
		});
	});


	// видео
	$(document).ready(function () {

		$('.js-videoWrapper').each(function (i, el) {
			var id = $(this).data('id');
			var poster = "url('https://i1.ytimg.com/vi/" + id + "/sddefault.jpg')";
			$(this).append('<iframe class="videoIframe js-videoIframe" frameborder="0" src="" allowtransparency="true" allowfullscreen="" data-src="https://www.youtube.com/embed/' + id + '?autoplay=1"></iframe>');
			$(this).find('.js-videoPoster').css('background-image', poster);
		});

	});

	$(document).on('click', '.js-videoPoster', function (ev) {
		ev.preventDefault();
		var $poster = $(this);
		var $wrapper = $poster.closest('.js-videoWrapper');
		videoPlay($wrapper);
	});

	function videoPlay($wrapper) {
		var $iframe = $wrapper.find('.js-videoIframe');
		var src = $iframe.data('src');
		$wrapper.addClass('videoWrapperActive');
		$iframe.attr('src', src);
	}

	$('.open-modal').click(function (event) {
		$(this).modal({
			fadeDuration: 250
		});
		return false;
	});

	Inputmask({
		mask: ['8|(+7) (999) 999-99-99'],
		greedy: false,
		showMaskOnHover: false
	}).mask(".js-tel-mask");
	$(".js-tel-mask").keypress(function (e) {
		var val = $(this).val();
		var key = e.charCode || e.keyCode || 0;
		if (val.slice(0, 1) != '+' && val.slice(0, 1) != '8') {
			$(this).val('+' + String.fromCharCode(key));
		}
	});

});