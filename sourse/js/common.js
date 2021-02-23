
const JSCCommon = {
	modalCall() {

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
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
			beforeLoad: function () {
				document.querySelector("html").classList.add("fixed")
			},
			afterClose: function () {
				document.querySelector("html").classList.remove("fixed")
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
		const linkModal = document.querySelectorAll('.link-modal');
		function addData() {
			linkModal.forEach(element => {
				element.addEventListener('click', () => {
					let modal = document.querySelector(element.getAttribute("href"));
					const data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							const el = modal.querySelector(elem)
							el.tagName == "INPUT"
								? el.value = val
								: el.innerHTML = val;
							// console.log(modal.querySelector(elem).tagName)
						}
					}
					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				})
			})
		}
		if (linkModal) addData();
	},
	// /modalCall
	// /mobileMenu

	// tabs  .
	tabscostume(tab) {
		let tabs = {
			Btn: [].slice.call(document.querySelectorAll(`.${tab}__btn`)),
			BtnParent: [].slice.call(document.querySelectorAll(`.${tab}__caption`)),
			Content: [].slice.call(document.querySelectorAll(`.${tab}__content`)),
		}
		tabs.Btn.forEach((element, index) => {
			element.addEventListener('click', () => {
				if (!element.classList.contains('active')) {
					//turn off old
					let oldActiveEl = element.closest(`.${tab}`).querySelector(`.${tab}__btn.active`);
					let oldActiveContent = tabs.Content[index].closest(`.${tab}`).querySelector(`.${tab}__content.active`);

					oldActiveEl.classList.remove('active');
					oldActiveContent.classList.remove('active')

					//turn on new(cklicked el)
					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			})
		})
	},
	// /tabs

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}")
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm() {
		var gets = (function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");
			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}
			return b;
		})();
		// form
		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			const th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data,
			}).done(function (data) {

				$.fancybox.close();
				$.fancybox.open({
					src: '#modal-thanks',
					type: 'inline'
				});
				// window.location.replace("/thanks.html");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
					// $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () { });

		});
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	animateScroll() {

		$(document).on('click', " .top-nav li a, .scroll-link", function () {
			const elementClick = $(this).attr("href");
			const destination = $(elementClick).offset().top;

			$('html, body').animate({ scrollTop: destination }, 1100);

			return false;
		});
	},
	getCurrentYear(el) {
		let now = new Date();
		let currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	}
};
const $ = jQuery;

function eventHandler() {
	JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	//JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll();

	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = '02.png';
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}



	function whenResize() {
		const topH = document.querySelector("header ").offsetHeight;
		if (topH) {

			if ($(window).scrollTop() > topH) {
				document.querySelector('.top-nav  ').classList.add('fixed');
			} else {
				document.querySelector('.top-nav  ').classList.remove('fixed');
			}
		}
		
	}

	window.addEventListener('resize', () => {
		whenResize();

	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	const swiper4 = new Swiper('.sBanners__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,

	});
	// modal window


	//luckyone js
	let residentSlider = new Swiper('.resident-slider-js', {
		slidesPerView: "auto",

		breakpoints: {
			0:{
				spaceBetween: 20,
			},
			1200: {
				spaceBetween: 40,
			},
		},

		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 10,
		},
		loop: true,

		navigation: {
			nextEl: '.resident-next-js',
			prevEl: '.resident-prev-js',
		},

		// on: {
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

	$('.sProjects__slider--js').each(function (){
		let projectSlider = new Swiper($(this).find('.project-slider-js'), {
			slidesPerView: "auto",
			loop: true,

			breakpoints: {
				0:{
					spaceBetween: 20,
				},
				1200: {
					spaceBetween: 40,
				},
			},
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 10,
			},
		});
	});

	//
	let storySlider = new Swiper('.story-slider-js', {
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
			loadPrevNextAmount: 10,
		},
	});
	//
	let famousSlider = new Swiper('.famous-slider-js', {
		slidesPerView: "auto",

		breakpoints: {
			0:{
				spaceBetween: 20,
			},
			768: {
				spaceBetween: 40,
			},
			1200: {
				spaceBetween: 72,
			},
		},

		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},

		navigation: {
			nextEl: '.famous-next-js',
			prevEl: '.famous-prev-js',
		},
		pagination: {
			el: '.famous-pugin--js',
			type: 'bullets',
			clickable: true,
		},
	});

	//
	let partnerSlider = new Swiper('.partners-slider-js', {
		slidesPerColumnFill: 'row',
		initialSlide: 1,

		breakpoints: {
			0:{
				spaceBetween: 20,
				slidesPerView: 2,
				slidesPerColumn: 2,
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 3,
				slidesPerColumn: 2,
			},
			1200: {
				spaceBetween: 38,
				slidesPerView: 4,
				slidesPerColumn: 2,
			},
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 30,
		},
		navigation: {
			nextEl: '.partners-next-js',
			prevEl: '.partners-prev-js',
		},

	});

	let allPatnerSlides = document.querySelectorAll('.partners-slider-js .swiper-slide');
	let breakpoint;
	let l = allPatnerSlides.length;
	if (l % 2 === 0){
		breakpoint = l / 2;
	}
	else{
		breakpoint = (l / 2) + 1;
	}

	for (let slide of allPatnerSlides){
		if ($(slide).index() + 1 <= breakpoint){
			$(slide).addClass('pushed');
		}
	}
	//mob-menu
	$('.burger-js').click(function (){
		$('.burger-js, .mm--js').toggleClass('active');
		$('body').toggleClass('fixed2');
	});

	//
	let directionSlider = new Swiper('.direction-slider-js', {
		spaceBetween: 20,
		slidesPerView: 'auto',
		//loop: true,
		freeMode: true,

		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 30,
		},
	});
	let artistSlider = new Swiper('.artist-slider-js', {
		slidesPerView: "auto",

		breakpoints: {
			0:{
				spaceBetween: 20,
			},
			1200: {
				spaceBetween: 40,
			},
		},

		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5,
		},

		navigation: {
			nextEl: '.artist-next-js',
			prevEl: '.artist-prev-js',
		},
	});
	//
	let feedbackSlider = new Swiper('.feedback-slider-js', {
		slidesPerView: "auto",
		loop: true,

		breakpoints: {
			0:{
				spaceBetween: 30,
			},
			1200: {
				spaceBetween: 40,
			},
		},

		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5,
		},

		navigation: {
			nextEl: '.feedback-next-js',
			prevEl: '.feedback-prev-js',
		},
	});

	function makeDDGroup(qSelecorts){
		for (let parentSelect of qSelecorts){
			let parent = document.querySelector(parentSelect);

			if (parent){
				// childHeads, kind of funny))
				let ChildHeads = parent.querySelectorAll('.dd-head-js');

				$(ChildHeads).click(function (){
					let clickedHead = this;

					$(ChildHeads).each(function (){
						if (this === clickedHead){
							$(this.parentElement).toggleClass('active');
							$(this.parentElement).find('.dd-content-js').slideToggle(function (){
								$(this).toggleClass('active');
							});
						}
						else{
							$(this.parentElement).removeClass('active');
							$(this.parentElement).find('.dd-content-js').slideUp(function (){
								$(this).removeClass('active');
							});
						}
					});
				});

			}

		}
	}
	makeDDGroup(['.faq-items-js']);

	//
	let usefullSlider = new Swiper('.useful-slider-js', {
		slidesPerView: "auto",
		loop: true,

		breakpoints: {
			0:{
				spaceBetween: 20,
			},
			1200: {
				spaceBetween: 40,
			},
		},

		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5,
		},

	});

	//
	let actSlider = new Swiper('.act-slider-js', {
		slidesPerView: "auto",
		loop: true,

		breakpoints: {
			0:{
				spaceBetween: 30,
			},
			1200: {
				spaceBetween: 40,
			},
			1400: {
				spaceBetween: 48,
			},
		},

		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5,
		},

	});

	//end luckyone js
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }