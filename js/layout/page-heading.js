export function pageHeading(fileName) {
    const imgEl = document.querySelector('.mainWrap .image');
    // let fileName = key;

    // for (const key in produtPages) {
    //     if (ID.includes(key)) {
    //         fileName = key;
    //         break;
    //     }
    // }

    imgEl.style.backgroundImage = `url('../../image/heading/${fileName}.jpg')`;
}