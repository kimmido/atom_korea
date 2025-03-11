export function imageSwap(vw, {wd_tab}) {
    if(vw <= wd_tab ) return;

    let aco = $('.cnt01 ul>li');
    let acoImg = $('.cnt01 article>.image');

    aco.on('mouseenter', function() {
        chageImgAndClass($(this), aco, acoImg);
    })

    // let interval = setInterval(function() {
    //     let current = aco.filter('.on');
    //     let next = current.next('li'); 
    //     if (next.length === 0) {          
    //         next = aco.first(); 
    //     }
    //     chageImgAndClass(next, current, acoImg);
    // }, 4000);
    
    function chageImgAndClass (targetEl, removeEl, imgEl) {
        let pic = targetEl.attr('data-pic');
        imgEl.css("background-image",pic);
        removeEl.removeClass('on');
        targetEl.addClass('on');
    }
}