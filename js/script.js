'use strict';

// swiper
$(function () {
    var swiper = new Swiper('.swiper-banner', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 3500, //延遲
            disableOnInteraction: false, //操作後停止
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距
        pagination: { //dot
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})
// to top
$(function () {
    $("aside .toTop").click(function () {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
            scrollTop: 0
        }, 500)
    })
})
// menu select
$(function () {
    $("header .mid .center .menu li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})
// footer select
$(function () {
    $("html body footer .upperHalf .upperHalfCenter ul li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})
// 下拉選單
$(function () {
    var num;
    var click;
    var max;
    // li hover trigger function
    $("header .mid .center .menu li").hover(function () {
        var n = $(this).index() - 1;
        if (n != -1 && n != 6 && n != 7) {
            $("header .bottom").toggleClass("display");
            $("header .bottom ul:eq(" + n + ")").addClass("display");
            $("header .bottom ul:eq(" + n + ")").siblings().removeClass("display");
        }
        // ol還原 click 還原
        click = 0;
        $("header .bottom .list ul ol ").css("transform", "translateX(" + 0 + "px)");
        // 因為我還原原點 所以prev不能點擊
        $("header .bottom .list .arrow_ic.prev").removeClass("active");
        num = $(" header .bottom .list ul.display ol li").length;

        max = num - 5;
        if (num > 6) {
            $("header .bottom .list .arrow_ic.next").addClass("active");
        }
        else {
            $("header .bottom .list .arrow_ic").removeClass("active");
        }

    })
    // next click後 
    $("header .bottom .list .arrow_ic.next").click(function () {
        // prev箭頭要可以active
        $("header .bottom .list .arrow_ic.prev").addClass("active");
        click++;
        // ol move x - 220px
        $("header .bottom .list ul.display ol").css("transform", "translateX(" + click * -220 + "px)");
        // if click 達到max
        if (click == max) {
            $("header .bottom .list .arrow_ic.next").removeClass("active");
        }
    })
    // prev click
    $("header .bottom .list .arrow_ic.prev").click(function () {
        $("header .bottom .list .arrow_ic.next").addClass("active");
        click--;

        $("header .bottom .list ul.display ol").css("transform", "translateX(" + click * -220 + "px)");
        if (click == 0) {
            $("header .bottom .list .arrow_ic.prev").removeClass("active");
        }
    })
    // keep on 
    $("header .bottom").hover(function () {
        $(this).toggleClass("display");
    })
})
// 關閉選單
$(function () {
    $(".filter .popup .title i").click(function () {
        $(".filter .popup.news").removeClass("display");
        $(".filter .popup.news").closest(".filter").removeClass("display");
    })
})
// 公告select
$(function () {
    $(".filter .popup.news .menu li").click(function () {
        var n = $(this).index();
        $(".filter .popup.news .content:eq(" + n + ")").addClass("display");
        $(".filter .popup.news .content:eq(" + n + ")").siblings().removeClass("display");
        $(".filter .popup.news .menu li:eq(" + n + ")").addClass("active");
        $(".filter .popup.news .menu li:eq(" + n + ")").siblings().removeClass("active");
    })
});


//lang
(() => {
    const langFace = document.querySelector("header .top .block .userList .lang");
    let click = 0;

    langFace.addEventListener("click", function () {
        click++;
        click % 2 == 1 ? langFace.classList.add("display") : langFace.classList.remove("display");
    });

    const lis = document.querySelectorAll("header .top .block .userList .lang ul li");
    let p = document.querySelector("header .top .block .userList .lang > p");


    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", (e) => {
            let el = e.target;
            p.innerHTML = el.innerHTML;
        });
    }
})();


