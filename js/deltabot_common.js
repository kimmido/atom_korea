$(function(){
    $('.hdr').load('/atom_korea/inc/deltabot_header.html',function(){
        var mnWrap = $('.pcWrap');
        var open = false;
        $('.hdrWrap .nav>li').mouseenter(function(){
            mnWrap.addClass('on');
        });
        $('.hdrWrap .nav>li').mouseleave(function(){
            mnWrap.removeClass('on');
        });
        mnWrap.mouseenter(function(){
            mnWrap.addClass('on');
        });
        mnWrap.mouseleave(function(){
            mnWrap.removeClass('on');
        });
        
        var i = $('header>h4>i');
        $('header>h4').click(function(){
            var wd = $(window).width();
            if(wd > 1024){
                if(open == false){
                    mnWrap.css({
                        height: 'min(9rem,360px)'
                    });
                    open = true;
                    i.removeClass('xi-bars');
                    i.addClass('xi-close');
                }else if(open == true){
                    mnWrap.css({
                        height: '0px'
                    });
                    open = false;
                    i.removeClass('xi-close');
                    i.addClass('xi-bars');
                }
            }else if(wd <= 1024){
                $('.mobileWrap>.mnbg').css({
                    height: '100vh'
                });
                $('.mobileWrap>.menu').css({
                    marginLeft: '0px'
                });
            }  
        });
        var li = $('.mobileWrap .mnBtm>ul>li');
        $('.mobileWrap h4').click(function(){
            $('.fixed').css({
                zIndex: '0'
            });
            $('.mobileWrap>.mnbg').css({
                height: '0vh'
            });
            $('.mobileWrap>.menu').css({
                marginLeft: '-500px'
            });
            li.removeClass('aco');
            li.removeClass('show');
        });
        $('.mobileWrap .mnBtm>ul>li:even').click(function(){
            var a = $(this);
            li.not(a).removeClass('aco');
            a.toggleClass('aco');
            li.not(a).next().removeClass('show');
            a.next().toggleClass('show');
        });
    })
    $('.ftr').load('/atom_korea/inc/deltabot_footer.html',function(){
        $('.top').click(function(){
            $('html,body').stop().animate({
                scrollTop: 0
            },500);
        });
    });
});