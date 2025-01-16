$(function(){

    // fullpage
    /* var fullPageCreated = false;
	var resizeControl = false;

	createFullpage();
	fullResize();
    
	function createFullpage() {
		if (fullPageCreated === false) {
			fullPageCreated = true; */
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
            });/* 
		}
	}

	var control02 = true;

    function fullResize(){
        if($(window).height() <= 700 || $(window).width() <= 1199){
            fullPageCreated = false;
            control02 = true;
                if(!resizeControl){
                    $.fn.fullpage.destroy('all');
                    resizeControl = true;
                }

                //스크롤 시 헤더
				$(window).on("load scroll", function(){
                    const wh = $(window).scrollTop();
                    if(wh <= 0){
						$("#header").removeClass("show");
					}else{
						$("#header").addClass("show");
					}

					function checkVisibility() {
                        var $section3 = $("#section3");
                        var windowHeight = $(window).height();
                        var scrollTop = $(window).scrollTop();
                        var sectionTop = $section3.offset().top;
                        var sectionBottom = sectionTop + $section3.outerHeight();
    
                        // #section3이 화면에 보이는지 확인
                        if (sectionBottom > scrollTop && sectionTop < scrollTop + windowHeight) {
                            $section3.addClass("active"); // 보이면 .active 추가
                            if ($section3.hasClass("active")) {
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
                        } else {
                            $section3.removeClass("active"); // 보이지 않으면 .active 제거
                        }
                    }
                    checkVisibility();

				});
        } else {
            createFullpage();
            resizeControl = false;
            if ($(window).width() >= 1199 && control02 || $(window).height() >= 700 && control02){
                control02 = false;
                $.fn.fullpage.moveTo('section01', 0);
            }
        }
    }

	var timer = null;
	$(window).on("load resize", function(e){
		  clearTimeout(timer);
		  timer = setTimeout(resizeM , 150)
	})
	function resizeM(){
		fullResize();
	}
     */
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
    let videovisual = new Swiper(".visualSwiper", {
        effect : "fade",
        centeredSlides: true,
        speed: 1000,
        loop: false,
        autoplay: {
            elay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            /* el: ".visualControl .count",
            type : 'fraction', // 버튼 모양 결정 "bullets", "fraction" 
            renderFraction: function (currentClass, totalClass) { // type이 fraction일 때 사용
                return '<span class="' + currentClass + '"></span>' +
                       '<span class="bar"> / </span>' +
                       '<span class="' + totalClass + '"></span>';
              } */
        },
        on: {
            slideChangeTransitionStart: function(){
                let num = this.activeIndex + 1;
                $(".visualControl button").removeClass("on");
                $(".visualControl button:nth-child(" + num + ")").addClass("on");

                // 동영상 hold로 주석처리
                let thisActiveIndex = this.activeIndex;
                let currentVideo = $(".visualSwiper .swiper-slide").eq(thisActiveIndex).find("video");
               /*  currentVideo.get(0).currentTime = 0;
                currentVideo.get(0).play(); */

                updateProgressBar(currentVideo.get(0));
            },
        },
    });
    let firstSet = function(){
        $(".visualControl button").eq(0).addClass("on");
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