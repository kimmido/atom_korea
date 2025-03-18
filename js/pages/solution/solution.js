import { tabHover, tabSlider } from "./solutionTabMenu.js";

const tabList = document.querySelector('.slide-box ul.tab');

tabList.addEventListener("mouseover", (e) => {
    tabHover.overEvent(e, "over");
})
tabList.addEventListener("mouseout", (e) => {
    tabHover.overEvent(e, "leave");
})

tabSlider.prev.addEventListener("click", function() {
    tabSlider.left();
})
tabSlider.next.addEventListener("click", function() {
    tabSlider.right();
})
