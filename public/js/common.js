"use strict";

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
		Inputmask("+9(999)999-99-99", {
			showMaskOnHover: false
		}).mask(InputTel);
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
	},
	checkEmptyVal: function checkEmptyVal() {
		this.value !== '' || this.type == "date" ? $(this).addClass('not-empty') : $(this).removeClass('not-empty');
	}
};
var $ = jQuery;

function eventHandler() {
	JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.inputMask();
	JSCCommon.heightwindow();
	$('.has-ph-js').blur(JSCCommon.checkEmptyVal);
	$('.has-ph-js').each(JSCCommon.checkEmptyVal); //remove on prod

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
			},
			navigation: {
				nextEl: '.projects-next-js',
				prevEl: '.projects-prev-js'
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
		},
		navigation: {
			nextEl: '.story-next-js',
			prevEl: '.story-prev-js'
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
		// initialSlide: 1,
		spaceBetween: 30,
		// slidesPerView: 2,
		slidesPerColumn: 2,
		slidesPerView: 'auto',
		freeMode: true,
		loop: true,
		loopFillGroupWithBlank: true,
		// touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
		// breakpoints: {
		// 	0:{
		// 	},
		// 	768: {
		// 		spaceBetween: 20,
		// 		slidesPerView: 3,
		// 		slidesPerColumn: 2,
		// 	},
		// 	1200: {
		// 		spaceBetween: 38,
		// 		slidesPerView: 4,
		// 		slidesPerColumn: 2,
		// 	},
		// },
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 10
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
	} // for (let slide of allPatnerSlides){
	// 	if ($(slide).index() + 1 <= breakpoint){
	// 		$(slide).addClass('pushed');
	// 	}
	// }
	//mob-menu


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
		},
		navigation: {
			nextEl: '.direction-next-js',
			prevEl: '.direction-prev-js'
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

	function makeDDGroup(parentSelect) {
		var parent = document.querySelectorAll(parentSelect);
		if (!parent) return;
		parent.forEach(function (el) {
			// childHeads, kind of funny))
			var ChildHeads = el.querySelectorAll('.dd-head-js');
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
		});
	}

	makeDDGroup('.faq-items-js, .participants-items-js'); //

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
		},
		navigation: {
			nextEl: '.act-next-js',
			prevEl: '.act-prev-js'
		}
	}); //custom ph
	//

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

	var grid = document.querySelector('.grid');

	if (grid) {
		var msnry = new Masonry(grid, {
			itemSelector: '.grid-item',
			columnWidth: '.grid-item',
			percentPosition: true
		});
		imagesLoaded(grid).on('progress', function () {
			return msnry.layout();
		});
	} //


	$(".slider-wrapper").each(function () {
		var festSlider = new Swiper($(this).find('.slider--js'), {
			slidesPerView: 1,
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 3
			},
			//
			navigation: {
				nextEl: $(this).find('.act-next-js'),
				prevEl: $(this).find('.act-prev-js')
			}
		});
	});
	$(".sCurators").each(function () {
		var slider = new Swiper($(this).find('.sCurators__slider--js'), {
			slidesPerView: "auto",
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 3
			},
			//
			navigation: {
				nextEl: $(this).find('.feedback-next-js'),
				prevEl: $(this).find('.feedback-prev-js')
			}
		});
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}