const produtPages = {
    deltaRobot : [
        {
            id: "deltaRobotD2",
            label: "D2 series",
            path: "./delta-robot-d2.html"
        },
        {
            id: "deltaRobotDD2",
            label: "DD2 series",
            path: "./delta-robot-dd2.html"
        },
        {
            id: "deltaRobotD3W",
            label: "D3W series",
            path: "./delta-robot-d3w.html"
        },
        {
            id: "deltaRobotD3WB",
            label: "D3WB series",
            path: "./delta-robot-d3wb.html"
        },
        {
            id: "deltaRobotD3WZ",
            label: "D3WZ series",
            path: "./delta-robot-d3wz.html"
        },
        {
            id: "deltaRobotD3WC",
            label: "D3WC series",
            path: "./delta-robot-d3wc.html"
        },
        {
            id: "deltaRobotD3P",
            label: "D3P series",
            path: "./delta-robot-d3p.html"
        },
        {
            id: "deltaRobotD3PB",
            label: "D3PB series",
            path: "./delta-robot-d3pb.html"
        },
    ]
};

const solutionPages = [
    {
        id: "foods",
        label: "solution",
        path: "./foods.html",
        icon: "foods"
    },
    {
        id: "personalCare",
        label: "solution",
        path: "./foods.html",
        icon: "personal-care"
    },
    {
        id: "pharmaceuticals",
        label: "solution",
        path: "./foods.html",
        icon: "pharmaceuticals"
    },
    {
        id: "dairy",
        label: "solution",
        path: "./foods.html",
        icon: "dairy"
    },
    {
        id: "automotive",
        label: "solution",
        path: "./foods.html",
        icon: "automotive"
    },
    {
        id: "newEnergy",
        label: "solution",
        path: "./foods.html",
        icon: "new-energy"
    },
    {
        id: "pcb",
        label: "solution",
        path: "./foods.html",
        icon: "pcb"
    },
    {
        id: "3c",
        label: "solution",
        path: "./foods.html",
        icon: "ccc"
    },
];

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