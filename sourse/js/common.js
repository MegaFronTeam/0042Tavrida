
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
	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}")
		});
		Inputmask("+9(999)999-99-99",{showMaskOnHover: false,}).mask(InputTel);
	},
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
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

	checkEmptyVal() {
		(this.value !== ''  || this.type == "date")
				? $(this).addClass('not-empty') 
				: $(this).removeClass('not-empty') 
	}
};
const $ = jQuery;

function eventHandler() {
	JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.inputMask();
	JSCCommon.heightwindow();


	$('.has-ph-js').blur(JSCCommon.checkEmptyVal);
	$('.has-ph-js').each(JSCCommon.checkEmptyVal);

	//remove on prod
	var x = window.location.host;
	let screenName;
	screenName = '04.png';
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}
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
			navigation: {
				nextEl: '.projects-next-js',
				prevEl: '.projects-prev-js',
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
		navigation: {
			nextEl: '.story-next-js',
			prevEl: '.story-prev-js',
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
			loadPrevNextAmount: 10,
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

	// for (let slide of allPatnerSlides){
	// 	if ($(slide).index() + 1 <= breakpoint){
	// 		$(slide).addClass('pushed');
	// 	}
	// }
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
		navigation: {
			nextEl: '.direction-next-js',
			prevEl: '.direction-prev-js',
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
	makeDDGroup(['.faq-items-js', '.participants-items-js']);

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
		navigation: {
			nextEl: '.act-next-js',
			prevEl: '.act-prev-js',
		},

	});

	//custom ph

	//
	let festSlider = new Swiper('.fest-slider-js', {
		slidesPerView: "auto",
		//loop: true,
		spaceBetween: 30,

		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},
		//
		navigation: {
			nextEl: '.fest-next-js',
			prevEl: '.fest-prev-js',
		},

		//
		pagination: {
			el: '.fest-pugin--js',
			type: 'bullets',
			clickable: true,
		},
	});
	//end luckyone js


	var grid = document.querySelector('.grid');
	if (grid) { 
		var msnry = new Masonry(grid, { 
			itemSelector: '.grid-item',
			columnWidth: '.grid-item', 
			percentPosition: true, 
		});

		imagesLoaded(grid).on('progress', () => msnry.layout());

		
	}
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}