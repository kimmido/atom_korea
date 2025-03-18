import { imageSwap } from "../pages/main/imageSwap.js";
import { tabSlider } from "../pages/solution/solutionTabMenu.js";

const resizeHandlers = [imageSwap].filter(fn => typeof fn === "function");
const resonsive = {
    wd_tab: 1024,
    wd_m: 480
}

document.addEventListener("DOMContentLoaded", function() {
    let vw = window.innerWidth;

    tabSlider?.setPos?.(vw, resonsive)
    if (typeof zoomSlider !== 'undefined') {
        zoomSlider?.setPos?.(vw, resonsive);
    }
    resizeHandlers.forEach(fn => fn(vw, resonsive));
    
});

window.addEventListener("resize", debounce(() => {
    let vw = window.innerWidth;
    if (typeof zoomSlider !== 'undefined') {
        zoomSlider?.setPos?.(vw, responsive);
    }
    tabSlider?.setPos?.(vw, resonsive)
    resizeHandlers.forEach(fn => fn(vw, resonsive));
}, 300)); // 300ms 동안 변화가 없으면 실행

function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}
