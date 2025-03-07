const zoomSlider = new Object();

let artGroup2 = $('.cnt02 .artGroup');
zoomSlider.node = artGroup2;


zoomSlider.setOrder = function() {
    artGroup2.find('article:last').prependTo(artGroup2);
    artGroup2.find('article:last').prependTo(artGroup2);
}

zoomSlider.setPos = function (wd) {
    if(wd > 420){
        this.mvLeft = 38;
        this.mvRight = 76;
        this.mv = 0;
    }else{
        this.mvLeft = 140;
        this.mvRight = 220;
        this.mv = 60;
    }

    artGroup2.css({
        marginLeft : -this.mvLeft+'%'
    });
}

zoomSlider.slide2 = function(){
    let self = this;

    artGroup2.find('article>.image').css('transform','scale(1)');
    artGroup2.stop().animate({
        marginLeft : -this.mvRight+'%'
    },500,function(){
        artGroup2.find('article:first').appendTo(artGroup2);
        artGroup2.find('article:eq(2)>.image').css('transform','scale(1.35)');
        artGroup2.css({
            marginLeft : -self.mvLeft+'%'
        });
    });
}

zoomSlider.left2 = function(){
    let self = this;

    artGroup2.find('article>.image').css('transform','scale(1)');
    artGroup2.stop().animate({
        marginLeft : -this.mv+'%'
    },500,function(){
        artGroup2.find('article:last').prependTo(artGroup2);
        artGroup2.find('article:eq(2)>.image').css('transform','scale(1.35)');
        artGroup2.css({
            marginLeft : -self.mvLeft+'%'
        });
    });
}

zoomSlider.right2 = function(){
    let self = this;
    console.log(this);

    artGroup2.find('article>.image').css('transform','scale(1)');
    artGroup2.stop().animate({
        marginLeft : -this.mvRight+'%'
    },300,function(){
        artGroup2.find('article:first').appendTo(artGroup2);
        artGroup2.find('article:eq(2)>.image').css('transform','scale(1.35)');
        artGroup2.css({
            marginLeft : -self.mvLeft+'%'
        });
    });
}

var wd = $(window).width();
zoomSlider.setOrder(artGroup2);
zoomSlider.setPos(wd, artGroup2);

$('.cnt02 .left').click(function(){   
    zoomSlider.left2();
});
$('.cnt02 .right').click(function(){
    zoomSlider.right2();
});
artGroup2.swipeleft(function(){
    zoomSlider.right2();
});
artGroup2.swiperight(function(){
    zoomSlider.left2();
})
setInterval(() => zoomSlider.right2(),6000);