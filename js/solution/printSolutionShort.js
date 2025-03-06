const iconAlt = {
    timer: "타이머 아이콘",
    labors: "노동자 아이콘",
    chart: "상승차트 아이콘",
    hourglass: "모래시계 아이콘",
    machine: "기계부품  아이콘",
    position: "위치 아이콘",
    robot_picking: "선별로봇 아이콘",
    packing: "포장 아이콘",
    packaging: "2차 포장 아이콘",
    conveyor_belt: "컨베이어 벨트 아이콘",
}


function printSolutionShort(dataArr) {
    const artBtm = document.querySelector(".artBtm");
    let shortHtml = "";
    
    dataArr.forEach((data, index) => {
        shortHtml += `
            <article class="short">
                <div class="short_l i${index + 1}">
                    <iframe 
                        class="video"
                        src=${data.videoSrc} 
                        title="YouTube video player"  
                        allow="fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin">
                    </iframe>
                </div>
                <div class="short_r">
                    <div class="texts">
                        <h3>${data.title}</h3>
                        <p>${data.text}</p>
                    </div>
                    <ul class="info-list1">
                    ${
                        data.infos.map((info) => (`
                            <li>
                                <div class="icon">
                                    <img src="/image/icon/${info.iconName}.png" alt="${iconAlt[info.iconName]}">
                                </div>
                                <h5>${info.title}</h5>
                            </li>`
                        )).join("")
                    }
                    </ul>
                    <ul class="solution-list-new1">
                    ${
                        data.solutions.map((solution, idx) => (`
                            <li>
                                <div class="solution-top">
                                    <img src="/image/icon/${solution.iconName}.png" alt="${iconAlt[solution.iconName]}">
                                    <p>0${idx + 1}</p>
                                </div>
                                <p class="solution-title">${solution.title}</p>
                            </li>`
                        )).join("")
                    }
                    </ul>
                </div>
            </article>
        `;
    })
    
    artBtm.innerHTML = shortHtml;
}