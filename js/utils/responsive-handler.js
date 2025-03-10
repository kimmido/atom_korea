function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}

window.addEventListener("resize", debounce(() => {
    let vw = window.innerWidth;
    zoomSlider.setPos(vw);
}, 300)); // 300ms 동안 변화가 없으면 실행
