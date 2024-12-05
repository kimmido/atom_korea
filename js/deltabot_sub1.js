$(function(){
    $('.detailInfo .texts').click(function(){
        var ind = $(this).find('.btn').attr('data-num');
        var a = $('.detailInfo .imgBox').eq(ind);
        $('.detailInfo .imgBox').eq(ind).toggleClass('on');
        $('.detailInfo .imgBox').not(a).removeClass('on');
    });

    var index = 0;
    var loc = [];
    $('.content .artTop>article').click(function(){
        for(var i = 0; i < $('.artBtm>.prodInfo').length; i++){
            loc[i] = $('.artBtm>.prodInfo').eq(i).offset().top;
        }
        index = $(this).index();
        $('html').animate({scrollTop:loc[index] - 80+'px'},500)
    });
});