$(function(){
    var artGroup = $('main .artGroup');
    var artGroup2 = $('.cnt02 .artGroup');
    var li = $('.mainWrap>ul>li');
    var wheel = $('.wheel');
    var wd = $(window).width();
    var mvLeft = 0;
    var mvRight = 0;
    var mv = 0;

    if(wd > 420){
        mvLeft = 37.7;
        mvRight = 75.4;
        mv = 0;
    }else{
        mvLeft = 200;
        mvRight = 300;
        mv = 100;
    }

    // 메인 슬라이드

    artGroup.find('article:last').prependTo(artGroup);
    artGroup.css({
        marginLeft : '-100%'
    });

    $(document).ready(function(){
        $('main article:eq(1)').find('.texts>h2').addClass('active');
        $('main article:eq(1)').find('.texts>p').addClass('active');
    });

    function slide (){
        artGroup.stop().animate({
            marginLeft : '-200%'
        },500,function(){
            $('article>.texts>h2').removeClass('active');
            $('article>.texts>p').removeClass('active');
            $('main article:eq(2)').find('.texts>h2').addClass('active');
            $('main article:eq(2)').find('.texts>p').addClass('active');
            artGroup.find('article:first').appendTo(artGroup);
            artGroup.css({
                marginLeft : '-100%'
            });
        });
       ind = artGroup.find('article:eq(2)').attr('data-num');
        li.removeClass('show');
        li.eq(ind).addClass('show');
    }
    function left(){
        artGroup.animate({
            marginLeft : '0%'
        },100,function(){
            $('article>.texts>h2').removeClass('active');
            $('article>.texts>p').removeClass('active');
            artGroup.find('article:last').prependTo(artGroup);
            artGroup.css({
                marginLeft : '-100%'
            });
            $('main article:eq(1)').find('.texts>h2').addClass('active');
            $('main article:eq(1)').find('.texts>p').addClass('active');
            ind = artGroup.find('article:eq(1)').attr('data-num');
            li.removeClass('show');
            li.eq(ind).addClass('show');
        });
    }
    function right(){
        artGroup.animate({
            marginLeft : '-200%'
        },100,function(){
            $('article>.texts>h2').removeClass('active');
            $('article>.texts>p').removeClass('active');
            artGroup.find('article:first').appendTo(artGroup);
            artGroup.css({
                marginLeft : '-100%'
            });
            $('main article:eq(1)').find('.texts>h2').addClass('active');
            $('main article:eq(1)').find('.texts>p').addClass('active');
            ind = artGroup.find('article:eq(1)').attr('data-num');
            li.removeClass('show');
            li.eq(ind).addClass('show');
        });
    }
    artGroup.swipeleft(function(){
        right();
    });
    artGroup.swiperight(function(){
        left();
    })
    li.click(function(){
        var now = $(this).index();
        clearInterval(slide);
        artGroup.stop(true);
        if(ind < now){
            for(var i = ind; i < now; i++){
                right();
            }
        }else{
            for(var i = now; i < ind; i++){
                left();
            }
        }
    });
    setInterval(slide,7000);

    // 마우스 
    
    function mouse (){
        wheel.animate({
            top : '25px',
            opacity: '20%' 
        },800,function(){
            wheel.css({
                top : '5px',
                opacity: '100%'
            })
        });
        
    }
    var auto = setInterval(mouse,1500);
    $('.mouse').click(function(){
        var tp = 0;
        tp = $('.cnt01').offset().top;
        $('html').animate({scrollTop: tp - 80+'px'},500)
        console.log(tp)
    });

    // 컨텐츠1
    var aco = $('.cnt01 ul>li');
    aco.click(function(){
        var pic = $(this).attr('data-pic');
        aco.removeClass('on');
        $(this).addClass('on');
        aco.find('.tit>i').removeClass('xi-plus');
        aco.find('.tit>i').addClass('xi-minus');
        $(this).find('.tit>i').removeClass('xi-minus');
        $(this).find('.tit>i').addClass('xi-plus');
        $('.cnt01 article>.image').css("background-image",pic);
    });

    // 컨텐츠2
    artGroup2.find('article:last').prependTo(artGroup2);
    artGroup2.css({
        marginLeft : -mvLeft+'%'
    });

    function slide2 (){
        artGroup2.find('article>.image').css('transform','scale(1)');
        artGroup2.stop().animate({
            marginLeft : -mvRight+'%'
        },500,function(){
            artGroup2.find('article:first').appendTo(artGroup2);
            artGroup2.find('article:eq(2)>.image').css('transform','scale(1.35)');
            artGroup2.css({
                marginLeft : -mvLeft+'%'
            });
        });
    }
    function left2(){
        artGroup2.find('article>.image').css('transform','scale(1)');
        artGroup2.stop().animate({
            marginLeft : -mv+'%'
        },300,function(){
            artGroup2.find('article:last').prependTo(artGroup2);
            artGroup2.find('article:eq(2)>.image').css('transform','scale(1.35)');
            artGroup2.css({
                marginLeft : -mvLeft+'%'
            });
        });
    }
    function right2(){
        artGroup2.find('article>.image').css('transform','scale(1)');
        artGroup2.stop().animate({
            marginLeft : -mvRight+'%'
        },300,function(){
            artGroup2.find('article:first').appendTo(artGroup2);
            artGroup2.find('article:eq(2)>.image').css('transform','scale(1.35)');
            artGroup2.css({
                marginLeft : -mvLeft+'%'
            });
        });
    }
    $('.cnt02 .left').click(function(){   
        left2();
    });
    $('.cnt02 .right').click(function(){
        right2();
    });
    artGroup2.swipeleft(function(){
        right2();
    });
    artGroup2.swiperight(function(){
        left2();
    })
    setInterval(slide2,10000);

    // 컨텐츠3
    var tab = $('.cnt03 .tab>li');
    tab.click(function(){
        tab.removeClass('show');
        $(this).addClass('show');
        var mov = $(this).attr('data-mov');
        var video = document.getElementById('video');
        $("#video_src").attr("src",mov);
        video.load();
    });
});