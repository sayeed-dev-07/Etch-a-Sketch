const container = document.querySelector('.container');
function createDiv() {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.className = 'innerDiv';
        container.appendChild(div)
        for (let j = 0; i < 16; j++) {
            const div2 = document.createElement('div');
            div2.className = 'childDiv'
            const innerDiv2 = document.querySelector('.innerDiv');
            innerDiv2.appendChild(div2)
        }
    }
}
createDiv()