export const tabHover = {
    setOnTab(on) {
        const img = on.querySelector('img');
        const src = img.getAttribute('src');
        img.setAttribute('src', src.replace('red', 'white'));
    },
    overEvent(e, action) {
        const anchor = e.target.closest('a');
        const li = e.target.closest('li');
        if (!anchor) return;
        if (li.matches('.on')) return;
        if (anchor.contains(e.relatedTarget)) return;

        const img = e.target.querySelector('img');
        const src = img.getAttribute('src');
        
        if(action == 'over') {
            img.setAttribute('src', src.replace('red', 'white'));
        }
        if(action == 'leave') {
            img.setAttribute('src', src.replace('white', 'red'));
        }
    },
}

 export const tabSlider = {
    index: 1,
    node: document.querySelector('.slide-box ul.tab'),
    prev: document.querySelector('.cnt01 header .arrow--prev'),
    next: document.querySelector('.cnt01 header .arrow--next'),
    setPos(vw, {wd_m}) {
        if(vw > wd_m){
            this.mv = 148;
        }else{
            this.mv = 98;
        }
        this.currentPos =  -(this.mv * (this.index - 1)) + 'px';
        this.node.style.marginLeft = this.currentPos;
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