$(function(){

    $(window).on("load", function () {
        AOS.refresh();
    });
    AOS.init({
        once : true,
        throttleDelay : 99,
        duration: 1000
    });

    $(window).on("scroll", function(){
        const wh = $(window).scrollTop();
        if(wh <= 0){
            $("#header").removeClass("show");
        } else {
            $("#header").addClass("show");
        }
    });

    // gnb
    $(document).on("mouseenter focus", "#gnb > ul > li", function (e) {
        if ($(".btnGnbOpen").hasClass("on")) {
            return false; // 이벤트 중지
        }
        const $target = $(e.currentTarget);
        const index = $target.index();
        const movePercentage = 100;
    
        //console.log(index);
        $(".move_box").css("transform", `translateX(${movePercentage * index}%)`);
        $("#gnb").addClass("on");

        $(this).addClass("active").siblings("li").removeClass("active");
        $(this).children("ul").stop().slideDown();
        return false;
    }).on("mouseleave", "#gnb > ul > li", function () {
        if ($(".btnGnbOpen").hasClass("on")) {
            return false; // 이벤트 중지
        }

        $("#gnb").removeClass("on");
        $(this).removeClass("active");
        $(this).children("ul").stop().slideUp();
        return false;
    });
    $(document).off("click", ".btnGnbOpen").on("click", ".btnGnbOpen", function(e) {
        e.preventDefault();
        $(this).addClass("on");
        $("#header").addClass("show");
        $("#gnb").addClass("all");
    });
    $(document).off("click", ".btnGnbOpen.on").on("click", ".btnGnbOpen.on", function(e) {
        e.preventDefault();
        $(this).removeClass("on");
        $("#gnb").removeClass("all");
    });

    // mobile menu
    $(document).off("click", ".btnSitemapOpen").on("click", ".btnSitemapOpen", function(e) {
        e.preventDefault();
        $(".sitemapWrap").fadeIn();
        $("body").addClass("scrollLock");
        $("body").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        $(".sitemapBody > ul > li .aos-init").removeClass("aos-animate");
        $(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","0s");
        setTimeout(() => {
            $(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","1s");
            $(".sitemapBody > ul > li .aos-init").addClass("aos-animate");
        } , 100);
    });
    $(document).off("click", ".btnSitemapClose").on("click", ".btnSitemapClose", function(e) {
        e.preventDefault();
        $(".sitemapWrap").fadeOut();
        $("body").removeClass("scrollLock");
        $("body").off("scroll touchmove mousewheel");
    });

    $(document).off("click", ".sitemapBody > ul > li > a").on("click", ".sitemapBody > ul > li > a", function(e) {
        e.preventDefault();
        $(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
        $(".sitemapBody > ul > li").each(function () {
            let onCheck = $(this).is(".on");
            if (onCheck) {
                $(this).children("ul").slideDown();
            } else {
                $(this).children("ul").slideUp();
            }
        });
    });
});