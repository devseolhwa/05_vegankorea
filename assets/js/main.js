$(function(){
    
    // 비주얼 스와이프
    let visualArray = ["01", "02", "03"];
    let visualSwiper = new Swiper(".visualSwiper", {
        effect : "fade",
        centeredSlides: true,
        speed: 1000,
        loop: false,
        autoplay: {
            disableOnInteraction: false,
        },
        navigation: false,
        pagination: {
            el: ".pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '">' + visualArray[index] + '<span class="bar"></span></button>';
            },		
        },
        on: {
            slideChangeTransitionStart: function(){
                let num = this.activeIndex + 1;
                $(".visualControl button").removeClass("on");
                $(".visualControl button:nth-child(" + num + ")").addClass("on");
            },
        },
    });
    let firstSet = function(){
        $(".visualControl button").eq(0).addClass("on");
    };
    setTimeout(firstSet, 100);

    // section02 배경 active
    let section02 = document.querySelector(".section02"),
        height100 = 100;

    window.addEventListener("scroll", () => {
        if (window.scrollY > height100) {
            section02.classList.add("active");
        } else {
            section02.classList.remove("active");
        }
    });

    // 협회소개 스와이프
    new Swiper(".introductionSlide", {
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 협회주요활동 tab
    $(".thumbBtnGroup li").click(function(){
		const index = $(this).index();
		if($(this).hasClass("on") == false){
			$(this).addClass("on").siblings().removeClass("on");
			$(".thumbListGroup > li").stop().hide();
			$(".thumbListGroup > li").eq(index).stop().fadeIn();
			$(".thumbListGroup > li .aos-init").removeClass("aos-animate");
			$(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","0s");
			setTimeout(() => {
				$(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","1s");
				$(".thumbListGroup > li .aos-init").addClass("aos-animate");
			} , 100);
		}		
	});

    // 회원사 스와이프
    new Swiper(".partnerSwiper", {
        slidesPerView: 3,
        //spaceBetween: 63,
        autoplay: true,
        loop: true,
        breakpoints: {
            1700: {
                slidesPerView: 5,
            },
            1100: {
                slidesPerView: 4,
            },
            320: {
                slidesPerView: 3,
                centeredSlides: true,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
    
});