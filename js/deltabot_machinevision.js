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

    $('.detailInfo .texts').click(function(){
        var ind = $(this).find('.btn').attr('data-num');
        var a = $('.detailInfo .imgBox').eq(ind);
        $('.detailInfo .imgBox').eq(ind).toggleClass('on');
        $('.detailInfo .imgBox').not(a).removeClass('on');
    });

    $('.content .artTop>article').click(function(){
        for(var i = 0; i < $('.artBtm>.prodInfo').length; i++){
            loc2[i] = $('.artBtm>.prodInfo').eq(i).offset().top;
        }
        index2 = $(this).index();
        $('html').animate({scrollTop:loc2[index2] - 80+'px'},500)
    });

});