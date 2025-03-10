(function () {
    const ID = document.querySelector("body").getAttribute("id");
    const paths = window.location.pathname.split("/");
    let tabs = [];

    if(paths.includes("product")) {
        for(const key in produtPages) {
            if(ID.includes(key)) {
                tabs = produtPages[key];
            }
        }
        printArtTop(product[ID]);
        printArtBtm(product[ID]);
    }

    if(paths.includes("solution")) {
        tabs = solutionPages;
        printSolutionShort(solutionData[ID]);
    }

    printTabMenu(tabs, ID);
})();