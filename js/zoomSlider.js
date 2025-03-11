const zoomSlider = new Object();



zoomSlider.setOrder = function() {
    this.node.find('.slideItem:last').prependTo(this.node);
    this.node.find('.slideItem:last').prependTo(this.node);
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

    this.node.css({
        marginLeft : -this.mvLeft+'%'
    });
}

zoomSlider.left2 = function(){
    let self = this;

    this.node.find('.slideItem>.image').css('transform','scale(1)');
    this.node.stop().animate({
        marginLeft : -this.mv+'%'
    },500,function(){
        self.node.find('.slideItem:last').prependTo(self.node);
        self.node.find('.slideItem:eq(2)>.image').css('transform','scale(1.35)');
        self.node.css({
            marginLeft : -self.mvLeft+'%'
        });
    });
}

zoomSlider.right2 = function(){
    let self = this;

    this.node.find('.slideItem>.image').css('transform','scale(1)');
    this.node.stop().animate({
        marginLeft : -this.mvRight+'%'
    },300,function(){
        self.node.find('.slideItem:first').appendTo(self.node);
        self.node.find('.slideItem:eq(2)>.image').css('transform','scale(1.35)');
        self.node.css({
            marginLeft : -self.mvLeft+'%'
        });
    });
}

const LIST = $('.slideWrap .slideList');
var wd = $(window).width();
zoomSlider.node = LIST;

zoomSlider.setOrder();
zoomSlider.setPos(wd);

$('.slideWrap .left').click(function(){   
    zoomSlider.left2();
});
$('.slideWrap .right').click(function(){
    zoomSlider.right2();
});
LIST.swipeleft(function(){
    zoomSlider.right2();
});
LIST.swiperight(function(){
    zoomSlider.left2();
})
setInterval(() => zoomSlider.right2(), 4000);