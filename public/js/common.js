"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
	tabscostume: function tabscostume(tab) {
		var tabs = {
			Btn: [].slice.call(document.querySelectorAll(".".concat(tab, "__btn"))),
			BtnParent: [].slice.call(document.querySelectorAll(".".concat(tab, "__caption"))),
			Content: [].slice.call(document.querySelectorAll(".".concat(tab, "__content")))
		};
		tabs.Btn.forEach(function (element, index) {
			element.addEventListener('click', function () {
				if (!element.classList.contains('active')) {
					//turn off old
					var oldActiveEl = element.closest(".".concat(tab)).querySelector(".".concat(tab, "__btn.active"));
					var oldActiveContent = tabs.Content[index].closest(".".concat(tab)).querySelector(".".concat(tab, "__content.active"));
					oldActiveEl.classList.remove('active');
					oldActiveContent.classList.remove('active'); //turn on new(cklicked el)

					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			});
		});
	},
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
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
	}
};
var $ = jQuery;

function eventHandler() {
	JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.inputMask();
	JSCCommon.heightwindow(); //remove on prod

	var x = window.location.host;
	var screenName;
	screenName = '04.png';

	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	} //luckyone js


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
		}
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

	makeDDGroup(['.faq-items-js', '.participants-items-js']); //

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
	}); //custom ph

	$('.has-ph-js').blur(checkEmptyVal);
	$('.has-ph-js').each(checkEmptyVal);

	function checkEmptyVal() {
		if (this.value !== '') {
			$(this).addClass('not-empty');
		} else {
			$(this).removeClass('not-empty');
		}
	} //


	var festSlider = new Swiper('.fest-slider-js', {
		slidesPerView: "auto",
		//loop: true,
		spaceBetween: 30,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3
		},
		//
		navigation: {
			nextEl: '.fest-next-js',
			prevEl: '.fest-prev-js'
		},
		//
		pagination: {
			el: '.fest-pugin--js',
			type: 'bullets',
			clickable: true
		}
	}); //end luckyone js
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}