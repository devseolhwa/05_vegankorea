$(function(){

    // fullpage
    $("#fullpage").fullpage({
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        // fullpage 해제할 브라우저 너비와 높이
        responsiveWidth : 1199,
        responsiveHeight : 700,
        anchors : ["visual", "motion", "status", "products"],
        sectionsColor : ["#FFF", "#FFF", "#FFF", "#FFF"],
        css3: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        scrollingSpeed: 1000,
        //normalScrollElements: '#section2 .imgMotion',
        scrollOverflow: true,
        navigation : false,
        //navigationPosition : "left",
        //navigationTooltips : ["visual", "motion", "status", "products"],
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
        },
        
        onLeave: function (anchorLink, index, direction) {
            if (index == 3) {
                $({ val : 0 }).animate({ val : 9833 }, {
                    duration: 1500,
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
                    duration: 1500,
                    step: function() {
                        var num = numberWithCommas(Math.floor(this.val));
                        $(".countNum2").text(num);
                    },
                    complete: function() {
                        var num = numberWithCommas(Math.floor(this.val));
                        $(".countNum2").text(num);
                    }
                });
                function numberWithCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            }
        },
    });

    $(".swiper-slide video").each(function () {
        const videoElement = this;
        
        // 동영상 메타데이터 로드 후 실행
        videoElement.addEventListener("loadedmetadata", function () {
            const videoDuration = Math.ceil(videoElement.duration * 1000); // ms 단위로 변환
            const swiperSlide = $(videoElement).closest(".swiper-slide");
            
            // 동영상 길이를 data-swiper-autoplay 속성에 설정
            swiperSlide.attr("data-swiper-autoplay", videoDuration);
        });
    });
    let videoBulArray = ["01", "02", "03"];
    let videovisual = new Swiper(".visualSwiper", {
        effect : "fade",
        centeredSlides: true,
        speed: 1000,
        loop: false,
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
                $(".progress button").removeClass("on");
                $(".progress button:nth-child(" + num + ")").addClass("on");

                // 동영상 hold로 주석처리
                let thisActiveIndex = this.activeIndex;
                let currentVideo = $(".visualSwiper .swiper-slide").eq(thisActiveIndex).find("video");
                currentVideo.get(0).currentTime = 0;
                currentVideo.get(0).play();

                //updateProgressBar(currentVideo.get(0));
            },
        },
    });
    let firstSet = function () {
        $(".visualSwiper .swiper-slide").find("video").get(0).play();
        $(".progress button").eq(0).addClass("on");
        /* if (firstVideo.length) {
            firstVideo.get(0).currentTime = 0;
            firstVideo.get(0).play();
            updateProgressBar(firstVideo.get(0)); // 첫 슬라이드에 대해 바로 진행 상태 업데이트
        } */
    };
    setTimeout(firstSet, 100);

function updateProgressBar(video) {
        const progressBar = $(".progressBar"); // 프로그레스 바 요소
        if (!progressBar.length) return;
    
        // 프로그레스 바를 초기화
        progressBar.css("width", "0%");
    
        // timeupdate 이벤트로 진행 상황 업데이트
        video.addEventListener("timeupdate", function () {
            const percent = (video.currentTime / video.duration) * 100;
            progressBar.css("width", percent + "%");
        });
    
        // 재생이 끝나면 프로그레스 바를 초기화
        video.addEventListener("ended", function () {
            progressBar.css("width", "0%");
        });
    }

});