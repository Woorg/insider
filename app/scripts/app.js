import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
import slick from 'slick-carousel';
import 'magnific-popup';
import mask from "jquery-mask-plugin";
// import 'jquery-validation';
// import printThis from "print-this";
import WOW from 'wowjs/dist/wow';

(function ($) {
	svg4everybody();

	var styles = [
		'padding: 0 9px',
		'background: #fff',
		'color: #000',
		'display: inline-block',
		'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
		'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
		'line-height: 1.4',
		'text-align: left',
		'font-size: 12px',
		'font-weight: 400'
	].join(';');

	console.log('%c заказать html верстку', styles);
	console.log('%c gorlov35@gmail.com', styles);

	$(function() {

		// loader


		// if( $(window).width() <= 425 ) {

		// 	$('.page').addClass('loading');

		// 	$(window).on('load', function () {
		// 		$('.preload').show();
		// 	});
		// }

		// $(window).on('resize', function () {
		// 	$('.preload').hide();
		// });

		// $(window).on('load', function () {

		// 	setTimeout( function() {
		// 		$('.preload').addClass('preload_hide');

		// 	}, 3000 );

		// });


		// Header

		if(	$(window).scrollTop() >= 1 ) {
			$('.header__body').hide().addClass('header__body_hide');
		} else {
			$('.header__body').show().removeClass('header__body_hide');

		}

		$(window).on('scroll', function () {
			if(	$(window).scrollTop() >= 1 ) {
				$('.header__body').hide().addClass('header__body_hide');
			} else {
				$('.header__body').show().removeClass('header__body_hide');

			}
		});

		// Menu

		$('.nav__trigger-w').on('click', function () {
			$(this).toggleClass('nav__trigger-w_active');
		});


		$('.hero__down').on('click', function(e) {
			var _scroll = $(this).attr('href');
			if (_scroll != '#' && $(_scroll).length) {
				$('html, body').animate({ scrollTop: $(_scroll).offset().top - 50 }, 800);
			}
		});


		// Teachers slider

		let $slider = $('.teachers__slider');

		if ($slider.length) {

			let currentSlide;
			let slidesCount = 0;
			let sliderCounter = $('.teachers__count');
			let updateSliderCounter = function(slick, currentIndex) {
				currentSlide = slick.slickCurrentSlide() + 1;
				slidesCount = slick.slideCount;
				sliderCounter.text(currentSlide + ' из ' + slidesCount);
			};

			$slider.on('init', function(event, slick) {
				$('.teachers__controls').append(sliderCounter);
				updateSliderCounter(slick);
			});

			$slider.on('afterChange', function(event, slick, currentSlide) {
				updateSliderCounter(slick, currentSlide);
			});

			$slider.slick({
				slidesToShow: 1,
				dots: false,
				arrows: true,
				speed: 900,
				waitForAnimate: true,
				adaptiveHeight: true,
				appendArrows: '.teachers__nav'
			});

		}

		// Graduates carousel

		let $gradCarousel = $('.graduates__carousel');

		if ($gradCarousel.length) {

			$gradCarousel.slick({
				loop: true,
				infinite: true,
				speed: 900,
				slidesToShow: 7,
				slidesToScroll: 1,
				dots: false,
				centerMode: true,
				centerPadding: '28px',
				focusOnSelect: true,
				variableWidth: false,
				waitForAnimate: true,
				responsive: [
				{
					breakpoint: 1024,
					settings: {
						arrows: true,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
				]
			});

		}


		// Tabs

		var tabsNavLink = $('.tabs__item');
		var tabsNavLinkActive = 'tabs__item_active';
		var tab = $('.tabs__tab');
		var tabActive = 'tabs__tab_active';

		tabsNavLink.click(function (event) {
			event.preventDefault();
			$(this).addClass(tabsNavLinkActive);
			$(this).siblings().removeClass(tabsNavLinkActive);
			var tabCurrent = $(this).children().attr('href');
			tab.not(tabCurrent).removeClass(tabActive).hide();
			$(tabCurrent).fadeIn(50).addClass(tabActive).show();
			if ($('.tabs__tab_active .team__item').length < 3) {
				console.log('true');
				$('.tabs__tab_active .team__list').addClass('team__list_quanted-low');
			}
		});

		function setSlideCount() {
			let $el = $('.teachers__count').find('.teachers__total');
			$el.text(slideCount);
		}

		function setCurrentSlideNumber(currentSlide) {
			let $el = $('.teachers__count').find('.teachers__curr');
			$el.text(currentSlide + 1);
		}

		$slider.on('init', function(event, slick){
			slideCount = slick.slideCount;
			setSlideCount();
			setCurrentSlideNumber(slick.currentSlide);
		});

		$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			setCurrentSlideNumber(nextSlide);
		});


		// Phone Mask

		$('.form__field_phone input').mask("+ 7 (999) 999-99-99", {
			placeholder: "Ваш телефон"
		});


		// Animate

		new WOW.WOW().init();


		// Popup

		// $('.teacher__link').magnificPopup({
		// 	type: 'inline',
		// 	midClick: true
		// });

		const magnificPopupInstance = $.magnificPopup.instance,

		button = $('.teacher__link');

		button.click(function(e){
			e.preventDefault();
			let dataset = $(this).data();
			// console.log(e.target);
			// console.log(dataset);
			magnificPopupInstance.open({
				type: 'inline',
				items: dataset,
				inline: {
					markup: `
					<div class="popup">
						<div class="mfp-close"></div>
						<div class="popup__col">
							<div class="popup__image">
								<img src="${dataset.image}" alt="${dataset.name}" />
							</div>
						</div>
						<div class="popup__col_wide">
							<div class="popup__title">${dataset.name}</div>
							<div class="popup__text">
								<p>${dataset.text}</p>
							</div>
						</div>
					</div>
					`
				}
			});
		});

		// Process photo

		$('.process__photo-link').magnificPopup({
			type: 'image',
			midClick: true,
			gallery: {
				enabled: true
			}
		});






		// let wow = new WOW().init();


		// $(window).on("load", function() {
		//   setTimeout(function() {
		//     $(".preloader").fadeOut(animDuration, function() {
		//       $(this).remove()
		//     }),
		//     pageLoaded = !0,
		//     $(window).trigger("scroll")
		//   }, 1000);

		// });



	});

})(jQuery);
