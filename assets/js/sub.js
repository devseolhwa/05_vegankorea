$(function(){

    // snb
	$(".snbList li button").on("click", function(){
		$(this).parent("li").toggleClass("active").siblings("li").removeClass("active");
		$(this).next(".depth02").stop().slideToggle();
		$(this).parents().siblings("li").find(".depth02").slideUp();
	});

	// 상단으로
	let btnTop = document.querySelector("#btnTop"),
        headerH = 70;

    window.addEventListener("scroll", () => {
        if (window.scrollY > headerH) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });
    $("#btnTop").on("click", function(){
		$("html, body").stop().animate({ scrollTop: 0 });
	});

    // FAQ
    $(".question a").on("click", function(){
        $(this).parent().toggleClass("open").siblings("li").removeClass("open");
        return false;
    });

    // 인증이미지
    let thumbSliderCheck = $(".thumbSlider");
    if (thumbSliderCheck.length) {
        var swiper = new Swiper(".thumbSlider", {
            loop: false,
            speed: 1000,
            slidesPerView: "auto", // 보여줄 개수
            spaceBetween: 28, // 슬라이드 사이 여백
            freeMode: false,
            centeredSlides: true,
            allowTouchMove: true,
            navigation: { // 버튼          
                nextEl: ".thumbSliderArrow .next",
                prevEl: ".thumbSliderArrow .prev",
            },
            initialSlide: 0, // 시작 위치 (0부터 시작)
        });
    }

    // tooltip
    $(".btnTooltip").on("click", function(){
        $(this).toggleClass("open");
        return false;
    });

    $(".tabList a").on("click", function(e) {
        e.preventDefault();

        // 탭 활성화 처리
        $(".tabList a").removeClass("active");
        $(this).addClass("active");

        // 콘텐츠 표시 처리
        var targetId = $(this).data("tab");
        $(".tabContents").hide();
        $("#" + targetId).show();

        $(".tabContents .aos-init").removeClass("aos-animate");
        $(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","0s");
        setTimeout(() => {
            $(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","1s");
            $(".tabContents .aos-init").addClass("aos-animate");
        } , 100);
    });

    // 인증현황 카운트
    $({ val : 0 }).animate({ val : 6 }, {
        duration: 2000,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".countNum1").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".countNum1").text(num);
        }
    });
    $({ val : 0 }).animate({ val : 1879 }, {
        duration: 2000,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".countNum2").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".countNum2").text(num);
        }
    });
    $({ val : 0 }).animate({ val : 11508 }, {
        duration: 2000,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".countNum3").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".countNum3").text(num);
        }
    });
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
 
});