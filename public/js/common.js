"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			},
			beforeLoad: function beforeLoad() {
				document.querySelector("html").classList.add("fixed");
			},
			afterClose: function afterClose() {
				document.querySelector("html").classList.remove("fixed");
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		var linkModal = document.querySelectorAll('.link-modal');

		function addData() {
			linkModal.forEach(function (element) {
				element.addEventListener('click', function () {
					var modal = document.querySelector(element.getAttribute("href"));
					var data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							var el = modal.querySelector(elem);
							el.tagName == "INPUT" ? el.value = val : el.innerHTML = val; // console.log(modal.querySelector(elem).tagName)
						}
					}

					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				});
			});
		}

		if (linkModal) addData();
	},
	// /modalCall
	// /mobileMenu
	// tabs  .
	tabscostume: function tabscostume(tab) {
		var tabs = {
			Btn: [].slice.call(document.querySelectorAll(".tabs__btn")),
			BtnParent: [].slice.call(document.querySelectorAll(".tabs__caption")),
			Content: [].slice.call(document.querySelectorAll(".tabs__content"))
		};
		tabs.Btn.forEach(function (element, index) {
			element.addEventListener('click', function () {
				if (!element.classList.contains('active')) {
					var siblings = element.parentNode.querySelector(".tabs__btn.active");
					var siblingsContent = tabs.Content[index].parentNode.querySelector(".tabs__content.active");
					siblings.classList.remove('active');
					siblingsContent.classList.remove('active');
					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			});
		}); // $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
		// 	$(this)
		// 		.addClass('active').siblings().removeClass('active')
		// 		.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
		// 		.eq($(this).index()).fadeIn().addClass('active');
		// });
	},
	// /tabs
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm: function sendForm() {
		var gets = function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");

			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}

			return b;
		}(); // form


		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			var th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data
			}).done(function (data) {
				$.fancybox.close();
				$.fancybox.open({
					src: '#modal-thanks',
					type: 'inline'
				}); // window.location.replace("/thanks.html");

				setTimeout(function () {
					// Done Functions
					th.trigger("reset"); // $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () {});
		});
	},
	heightwindow: function heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

		document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

		window.addEventListener('resize', function () {
			// We execute the same script as before
			var vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
		}, {
			passive: true
		});
	},
	animateScroll: function animateScroll() {
		$(document).on('click', " .top-nav li a, .scroll-link", function () {
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html, body').animate({
				scrollTop: destination
			}, 1100);
			return false;
		});
	},
	getCurrentYear: function getCurrentYear(el) {
		var now = new Date();
		var currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	}
};
var $ = jQuery;

function eventHandler() {
	var _defaultSl;

	JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('.tabs--js'); //JSCCommon.mobileMenu();

	JSCCommon.inputMask();
	JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll(); // JSCCommon.CustomInputFile(); 

	var x = window.location.host;
	var screenName;
	screenName = '03.png';

	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	}

	function whenResize() {
		var topH = document.querySelector("header ").offsetHeight;

		if (topH) {
			if ($(window).scrollTop() > topH) {
				document.querySelector('.top-nav  ').classList.add('fixed');
			} else {
				document.querySelector('.top-nav  ').classList.remove('fixed');
			}
		}
	}

	window.addEventListener('resize', function () {
		whenResize();
	}, {
		passive: true
	});
	whenResize();
	var defaultSl = (_defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true
		},
		watchOverflow: true
	}, _defineProperty(_defaultSl, "spaceBetween", 0), _defineProperty(_defaultSl, "loop", true), _defineProperty(_defaultSl, "navigation", {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}), _defineProperty(_defaultSl, "pagination", {
		el: ' .swiper-pagination',
		type: 'bullets',
		clickable: true // renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// }

	}), _defaultSl);
	var swiper4 = new Swiper('.sBanners__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true
	})); // modal window
	//luckyone js

	var residentSlider = new Swiper('.resident-slider-js', {
		slidesPerView: "auto",
		breakpoints: {
			0: {
				spaceBetween: 20
			},
			1200: {
				spaceBetween: 40
			}
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 10
		},
		loop: true,
		navigation: {
			nextEl: '.resident-next-js',
			prevEl: '.resident-prev-js'
		} // on: {
		// 	init: function () {
		// 		$('.resident-slider-js .swiper-slide').mouseenter(function (){
		// 			let thisSlide = this;
		// 			if (!thisSlide.timeOutDown){
		// 				$(this).find('.res-descr-js').slideDown(250, function (){
		// 					$(this).toggleClass('active');
		// 					thisSlide.timeOutDown = false;
		// 				});
		//
		// 				this.timeOutDown = true;
		// 			}
		//
		// 		});
		//
		// 		$('.resident-slider-js .swiper-slide').mouseleave(function (){
		// 			let thisSlide = this;
		// 			if (!thisSlide.timeOutUp){
		// 				$(this).find('.res-descr-js').slideUp(250,function (){
		// 					$(this).removeClass('active');
		// 					thisSlide.timeOutUp = false;
		// 				});
		//
		// 				this.timeOutUp = true;
		// 			}
		// 		});
		// 	},
		// },

	});
	$('.sProjects__slider--js').each(function () {
		var projectSlider = new Swiper($(this).find('.project-slider-js'), {
			slidesPerView: "auto",
			loop: true,
			breakpoints: {
				0: {
					spaceBetween: 20
				},
				1200: {
					spaceBetween: 40
				}
			},
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 10
			}
		});
	}); //

	var storySlider = new Swiper('.story-slider-js', {
		slidesPerView: "auto",
		loop: true,
		spaceBetween: 0,
		// breakpoints: {
		// 	0:{
		// 		spaceBetween: 20,
		// 	},
		// 	1200: {
		// 		spaceBetween: 40,
		// 	},
		// },
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 10
		}
	}); //

	var famousSlider = new Swiper('.famous-slider-js', {
		slidesPerView: "auto",
		breakpoints: {
			0: {
				spaceBetween: 20
			},
			768: {
				spaceBetween: 40
			},
			1200: {
				spaceBetween: 72
			}
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3
		},
		navigation: {
			nextEl: '.famous-next-js',
			prevEl: '.famous-prev-js'
		},
		pagination: {
			el: '.famous-pugin--js',
			type: 'bullets',
			clickable: true
		}
	}); //

	var partnerSlider = new Swiper('.partners-slider-js', {
		slidesPerColumnFill: 'row',
		initialSlide: 1,
		breakpoints: {
			0: {
				spaceBetween: 20,
				slidesPerView: 2,
				slidesPerColumn: 2
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 3,
				slidesPerColumn: 2
			},
			1200: {
				spaceBetween: 38,
				slidesPerView: 4,
				slidesPerColumn: 2
			}
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 30
		},
		navigation: {
			nextEl: '.partners-next-js',
			prevEl: '.partners-prev-js'
		}
	});
	var allPatnerSlides = document.querySelectorAll('.partners-slider-js .swiper-slide');
	var breakpoint;
	var l = allPatnerSlides.length;

	if (l % 2 === 0) {
		breakpoint = l / 2;
	} else {
		breakpoint = l / 2 + 1;
	}

	var _iterator = _createForOfIteratorHelper(allPatnerSlides),
			_step;

	try {
		for (_iterator.s(); !(_step = _iterator.n()).done;) {
			var slide = _step.value;

			if ($(slide).index() + 1 <= breakpoint) {
				$(slide).addClass('pushed');
			}
		} //mob-menu

	} catch (err) {
		_iterator.e(err);
	} finally {
		_iterator.f();
	}

	$('.burger-js').click(function () {
		$('.burger-js, .mm--js').toggleClass('active');
		$('body').toggleClass('fixed2');
	}); //

	var directionSlider = new Swiper('.direction-slider-js', {
		spaceBetween: 20,
		slidesPerView: 'auto',
		//loop: true,
		freeMode: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 30
		}
	});
	var artistSlider = new Swiper('.artist-slider-js', {
		slidesPerView: "auto",
		breakpoints: {
			0: {
				spaceBetween: 20
			},
			1200: {
				spaceBetween: 40
			}
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		},
		navigation: {
			nextEl: '.artist-next-js',
			prevEl: '.artist-prev-js'
		}
	}); //

	var feedbackSlider = new Swiper('.feedback-slider-js', {
		slidesPerView: "auto",
		loop: true,
		breakpoints: {
			0: {
				spaceBetween: 30
			},
			1200: {
				spaceBetween: 40
			}
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		},
		navigation: {
			nextEl: '.feedback-next-js',
			prevEl: '.feedback-prev-js'
		}
	});

	function makeDDGroup(qSelecorts) {
		var _iterator2 = _createForOfIteratorHelper(qSelecorts),
				_step2;

		try {
			for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
				var parentSelect = _step2.value;
				var parent = document.querySelector(parentSelect);

				if (parent) {
					(function () {
						// childHeads, kind of funny))
						var ChildHeads = parent.querySelectorAll('.dd-head-js');
						$(ChildHeads).click(function () {
							var clickedHead = this;
							$(ChildHeads).each(function () {
								if (this === clickedHead) {
									$(this.parentElement).toggleClass('active');
									$(this.parentElement).find('.dd-content-js').slideToggle(function () {
										$(this).toggleClass('active');
									});
								} else {
									$(this.parentElement).removeClass('active');
									$(this.parentElement).find('.dd-content-js').slideUp(function () {
										$(this).removeClass('active');
									});
								}
							});
						});
					})();
				}
			}
		} catch (err) {
			_iterator2.e(err);
		} finally {
			_iterator2.f();
		}
	}

	makeDDGroup(['.faq-items-js']); //

	var usefullSlider = new Swiper('.useful-slider-js', {
		slidesPerView: "auto",
		loop: true,
		breakpoints: {
			0: {
				spaceBetween: 20
			},
			1200: {
				spaceBetween: 40
			}
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		}
	}); //

	var actSlider = new Swiper('.act-slider-js', {
		slidesPerView: "auto",
		loop: true,
		breakpoints: {
			0: {
				spaceBetween: 30
			},
			1200: {
				spaceBetween: 40
			},
			1400: {
				spaceBetween: 48
			}
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		}
	}); //end luckyone js
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} // window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }