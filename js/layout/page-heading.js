export function pageHeading(ID) {
    const imgEl = document.querySelector('.mainWrap .image');
    let fileName = '';

    if(ID.includes('deltaRobot')) fileName='delta-robot';
    if(ID.includes('scara')) fileName='scara';
    if(ID.includes('cobot')) fileName='cobot';
    if(ID.includes('control')) fileName='control-system';
    if(ID.includes('casePacker')) fileName='case-packer';
    if(ID.includes('vision')) fileName='vision-system';

    imgEl.style.backgroundImage = `url('../../../image/heading/${fileName}.jpg')`;
}