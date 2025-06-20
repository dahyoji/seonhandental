$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

});
$(function () {

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })
})