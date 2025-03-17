const tabSlider = {
    index: 1,
    setMoveValue(vw, {wd_m}) {
        if(vw > wd_m){
            this.mv = 148;
        }else{
            this.mv = 98;
        }
        this.node.style.marginLeft = -(this.mv * (this.index - 1)) + 'px'
    },
    left(){
        if(this.index == 1) return;
    
        this.node.animate([
            {marginLeft: -(this.mv * (this.index - 1)) + 'px'},
            {marginLeft: -(this.mv * (this.index - 2)) + 'px'}
        ], {
            duration: 500,
            fill: 'forwards'
        })
    
        this.index--;
    },
    right(){
        if(this.index == 8) return;

        this.node.animate([
            {marginLeft: -(this.mv * (this.index - 1)) + 'px'},
            {marginLeft: -(this.mv * this.index) + 'px'}
        ], {
            duration: 500,
            fill: 'forwards'
        })
    
        this.index++;
    }
}


const LIST = document.querySelector('.slide-box ul.tab');
const LEFT = document.querySelector('.cnt01 header .arrow--prev');
const RIGHT = document.querySelector('.cnt01 header .arrow--next');
tabSlider.node = LIST;

const a = {wd_m:480}
tabSlider.setMoveValue(1000, a);

LEFT.addEventListener("click", function() {
    tabSlider.left();
})
RIGHT.addEventListener("click", function() {
    tabSlider.right();
})