import { iconAlt } from "../../data/icon-alt.js";

export function printSolutionShort(dataArr) {
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
                                    <img src="../../image/icon/${info.iconName}.png" alt="${iconAlt[info.iconName]}">
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
                                    <img src="../../image/icon/${solution.iconName}.png" alt="${iconAlt[solution.iconName]}">
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