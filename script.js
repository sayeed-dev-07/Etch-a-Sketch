const userInputBtn = document.querySelector('.create-div');
const divContainer = document.querySelector('.div-container');
const resetBtn = document.querySelector('.reset')


userInputBtn.addEventListener('click', () => {
    let number = window.prompt('Enter the Numbers of Blocks You want in the Board : ')
    validateInput(number)
    
})


function validateInput(input) {
    if (isNaN(input) || input > 100 || input < 0) {
        window.alert('ERROR! , ENTER A VALID NUMBER AND ALSO LESS THAN 100')
        return;
    }
    createDiv(input)
    
}

function createDiv(num) {
    divContainer.innerHTML = '';
    divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    divContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`

    for (let i = 0; i < num * num; i++) {
        const element = document.createElement('div');
        element.classList.add('innerDiv')
        divContainer.appendChild(element)
    }

    const innerDivs = document.querySelectorAll('.innerDiv');


    innerDivs.forEach(element => {
        element.addEventListener('mouseover', () => {
           
            element.style.background = `${colorChange()}`
            
        });
    });

    resetBtn.addEventListener('click', () => {
        innerDivs.forEach((div) => {
            div.style.backgroundColor = 'whitesmoke'; 
        })
    })

}







function colorChange() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "#";
    for (let i = 0; i < 6; i++) {
        let randNum = Math.floor(Math.random() * 16)
        code += hexArray[randNum]
    }
    return code;
}


const innerDivs = document.querySelectorAll('.innerDiv');
    
    innerDivs.forEach(element => {

        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `${colorChange()}`
        });
    });


    resetBtn.addEventListener('click', () => {
        innerDivs.forEach((div) => {
            div.style.backgroundColor = 'whitesmoke';
        })
    })
