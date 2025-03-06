function printTabMenu(tabs, ID) {
    if(!tabs[0]) return;

    const tabBox = document.querySelector('.tab');
    let tabItem = ``;
    
    if(tabs.length > 0) {
        tabBox.classList.add('tab--link')
    }

    tabs.forEach(tab => {
        tabItem += `
            <li class="${tab.id == ID? "on": ""} ${tab.icon? tab.icon : ""}" >
                <a href=${tab.path}>${tab.label}</a>
            </li>
        `;
    })
    tabBox.innerHTML = tabItem;
}