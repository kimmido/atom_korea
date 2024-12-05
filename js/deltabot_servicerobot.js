$(document).ready(function(){
    var li = $('.nav li');
    var index1 = 0;
    var index2 = 0;
    var loc1 = [];
    var loc2 = [];
    li.click(function(){
        for(var i = 0; i < $('.scroll').length; i++){
            loc1[i] = $('.scroll').eq(i).offset().top;
        }
        index1 = $(this).index();
        $('html').animate({scrollTop:loc1[index1] - 80+'px'},0)
    });

    // 컨텐츠1
    var swiper1 = new Swiper('.cnt01_swiper', {
        loop: true,
        effect: 'fade',
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // 사용자가 슬라이더를 조작한 후에도 자동 재생을 계속합니다.
        },
        speed: 500,
    });
    // 컨텐츠3
    var swiper3 = new Swiper('.cnt03_swiper', {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // 사용자가 슬라이더를 조작한 후에도 자동 재생을 계속합니다.
        },
        speed: 500,
        breakpoints: {
            1401: { spaceBetween: 30, slidesPerView: 3},
            1051: { spaceBetween: 15 },
            431: {slidesPerView: 3},
            0: { spaceBetween: 20, slidesPerView: 1.3 },
        },
        navigation: {
            prevEl: '.cnt03_swiper_prev',
            nextEl: '.cnt03_swiper_next',
          },
    });
    $('.cnt03_swiper .swiper-slide').click(function(){
        for(var i = 0; i <= 4; i++){
            loc2[i] = $('.cnt04_item').eq(i).offset().top;
        }
        index2 = $(this).attr('data-swiper-slide-index');
        $('html').animate({scrollTop:loc2[index2] - 80+'px'},500)
    });

    // 컨텐츠6
    var bullet = ['테이블 오더','호출벨','진동벨','알림벨'];
    var swiper6 = new Swiper('.cnt06_swiper',{
        loop: true,
        effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, 
        },
        speed: 500,
        pagination: {
            el: '.cnt06_swiper .slide_tit',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        }
    })
});