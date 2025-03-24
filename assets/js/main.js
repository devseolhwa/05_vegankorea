$(function(){

    /* $(".visualSwiper video").each(function () {
        const videoElement = this;
        
        // 동영상 메타데이터 로드 후 실행
        videoElement.addEventListener("loadedmetadata", function () {
            const videoDuration = Math.ceil(videoElement.duration * 1000); // ms 단위로 변환
            const swiperSlide = $(videoElement).closest(".swiper-slide");
            
            // 동영상 길이를 data-swiper-autoplay 속성에 설정
            swiperSlide.attr("data-swiper-autoplay", videoDuration);
            console.log(videoDuration);

            videovisual.update();
        });
    }); */
    let videovisual = new Swiper(".visualSwiper", {
        effect : "fade",
        centeredSlides: true,
        speed: 1000,
        loop: false,
        touchRatio: 0, //드래그 금지
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '">' + '<span class="bar"></span></button>';
            },		
        },
        on: {
            slideChangeTransitionStart: function(){
                let num = this.activeIndex + 1;
                $(".pagination button").removeClass("on");
                $(".pagination button:nth-child(" + num + ")").addClass("on");

                // 동영상 hold로 주석처리
                let thisActiveIndex = this.activeIndex;
                let currentVideo = $(".visualSwiper .swiper-slide").eq(thisActiveIndex).find("video");
                currentVideo.get(0).currentTime = 0;
                currentVideo.get(0).play();
            },
        },
    });
    let firstSet = function () {
        $(".visualSwiper .swiper-slide").find("video").get(0).play();
        $(".pagination button").eq(0).addClass("on");
    };
    setTimeout(firstSet, 100);

    // fullpage
    $("#fullpage").fullpage({
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        // fullpage 해제할 브라우저 너비와 높이
        responsiveWidth : 1199,
        responsiveHeight : 800,
        anchors : ["visual", "slogan", "information", "with"],
        sectionsColor : ["#FFF", "#FFF", "#FFF", "#FFF"],
        css3: true,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        scrollingSpeed: 1000,
        //normalScrollElements: "#section2",
        scrollOverflow: true,
        navigation : false,
        //navigationPosition : "left",
        //navigationTooltips : ["visual", "slogan", "information", "with"],
        loopBottom : false,
        afterLoad : function (anchorLink, index) {
            if($(".section").hasClass("on")){
                $(".section.active .aos-init").addClass("aos-animate");
            } else {
                $(".section .aos-init").removeClass("aos-animate");
            }
            $(".section.active .aos-init").addClass("aos-animate");
            if (index == 2 || index == 3 || index == 4 || index == 5) {
                $("#header").addClass("show");
                $("#btnTop").addClass("show");
            } else {
                $("#header").removeClass("show");
                $("#btnTop").removeClass("show");
            }
            if (index == 4 || index == 5) {
                $("#section4").addClass("ani");
            } else {
                $("#section4").removeClass("ani");
            }
        },   
        onLeave: function (anchorLink, index, direction) {
            if (direction === "down") {
                $("#header").addClass("hdn");
                $(".btnGnbOpen.on").trigger("click");
            } else if (direction === "up") {
                $("#header").removeClass("hdn");
            }
            if (index == 3) {
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
                $({ val : 0 }).animate({ val : 983 }, {
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
                $({ val : 0 }).animate({ val : 9833 }, {
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
            }
        },
    });

    $("#btnTop").click(function() {
        $.fn.fullpage.moveTo("visual");
    });
});