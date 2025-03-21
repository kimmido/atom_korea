export function printTabMenu(tabs, ID) {
    if(!tabs[0]) return;

    const tabBox = document.querySelector('.tab');
    let tabItem = ``;
    
    if(tabs.length > 0) {
        tabBox.classList.add('tab--link')
    }

    tabs.forEach(tab => {
        tabItem += `
            <li class="${tab.id == ID? "on": ""}" >
                <a href=${tab.path}>
                    ${tab.icon? 
                        `<img src="/image/icon/${tab.id == ID? tab.icon[1] : tab.icon[0]}">` : 
                        ""
                    }
                    <span>${tab.label}</span>
                </a>
            </li>
        `;
    })
    tabBox.innerHTML = tabItem;
}