import { solutionData } from "/js/data/solutionData.js";
import { printSolutionShort } from "/js/pages/solution/printSolutionShort.js";
import { printTabMenu } from "../layout/printTabMenu.js";

(function () {
    const ID = document.querySelector("body").getAttribute("id");
    const paths = window.location.pathname.split("/");

    if(paths.includes("product")) {
        for(const key in produtPages) {
            if(ID.includes(key)) {
                printTabMenu(produtPages[key], ID);
            }
        }
        printArtTop(product[ID]);
        printArtBtm(product[ID]);
    }

    if(paths.includes("solution")) {
        printTabMenu(solutionPages, ID);
        printSolutionShort(solutionData[ID]);
    }  
})();