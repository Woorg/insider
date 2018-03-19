import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
import slick from 'slick-carousel';
// import 'magnific-popup';
// import mask from "jquery-mask-plugin";
// import 'jquery-validation';
// import printThis from "print-this";

(function ($) {

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
		svg4everybody();


		// Header

		if(	$(window).scrollTop() >= 1 ) {
			$('.header__body').hide();
		} else {
			$('.header__body').show();

		}

		$(window).on('scroll', function () {
			if(	$(window).scrollTop() >= 1 ) {
				$('.header__body').hide();
			} else {
				$('.header__body').show();

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
				appendArrows: '.teachers__nav'
			});

		}

		// Graduates carousel

		let $gradCarousel = $('.graduates__carousel');

		if ($gradCarousel.length) {

			$gradCarousel.slick({
				slidesToShow: 7,
				dots: false,
				centerMode: true,
				centerPadding: '30px',
				focusOnSelect: true
				// variableWidth: true
			});

		}














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





	});

})(jQuery);
