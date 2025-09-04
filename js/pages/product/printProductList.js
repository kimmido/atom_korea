export function printProductArtTop(dataArr) {
    const artTop = document.querySelector(".artTop");
    let artTopHtml = "";
    
    dataArr.forEach((data, index) => {
        artTopHtml += `
            <article>
                <div class="image i${index}">
                    <img src="./image/product/${data.code}.png" alt="${data.name}">
                </div>
                <div class="texts">
                    <h3>${data.name}</h3>
                </div>
            </article>
        `;
    })
    
    artTop.innerHTML = artTopHtml;
}

export function printProductArtBtm(dataArr) {
    const artBtm = document.querySelector(".artBtm");
    let artBtmHtml = "";
    
    dataArr.forEach((data, index) => {
        artBtmHtml += `
            <article class="prodInfo">
                <div class="image i${index + 1}">
                    <img src="./image/product/${data.code}.png" alt="${data.name}">
                </div>
                <div class="texts">
                    <h3>${data.name}</h3>
                    ${
                        data.desc.map(desc => (`
                            <div>
                                <h5>${desc.title}</h5>
                                ${
                                    desc.texts? desc.texts.map(text => (`
                                    <p class="text">${text}</p>
                                    `)).join("") : ''
                                } 
                                ${
                                    desc.bullets? desc.bullets?.map((bullet, idx) => (`
                                    <p class="bullet i${idx}">${bullet}</p>
                                    `)).join("") : ''
                                }
                            </div>
                            `
                        )).join("")
                    }
                </div>
            </article>
            <article class="detailInfo">
                <div class="texts">
                    <h3>specifications</h3>
                    <div class="btn" data-num=${index}><i class="xi-angle-down-thin"></i></div>
                </div>
                <div class="imgBox">
                    <span oncontextmenu="return false"></span>
                    <div class="inner">
                    ${
                        (function() {
                            let img = "";
    
                            for (let i = 0; i < data.specImgCount; i++) {
                                img += `
                               <img src="./image/product/${data.code}_info${i + 1}.jpg" alt="${data.name}_info${i + 1}">    
                                `;
                            }
    
                            return img;  
                        })()
                    }
                    </div>
                </div>
            </article>
        `;
    })
    
    artBtm.innerHTML = artBtmHtml;
}