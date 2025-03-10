$(function(){
    var artGroup = $('main .artGroup');
    var li = $('.mainWrap>ul>li');
    var wheel = $('.wheel');


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
    // ${'.cnt01 .grid'}


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

  

    // 컨텐츠3
    var tab = $('.cnt03 .tab>li');
    tab.click(function(){
        tab.removeClass('show');
        $(this).addClass('show');
        var mov = $(this).attr('data-mov');
        var video = document.getElementById('video');
        $("#video_src").attr("src",mov);
        video.load();
        video.play();
    });
});