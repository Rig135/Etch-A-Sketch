const container = document.querySelector('.container');
const resize = document.querySelector('#resize');
const Random = document.querySelector('#randomize');
const colorPicker = document.querySelector('#chooseColor');
const clear = document.querySelector('#clear');

let selectedColor = colorPicker.value;

let isRandom = false;

Random.addEventListener('click', () => {
    isRandom = true;
})

colorPicker.addEventListener('input', () => {
    selectedColor = colorPicker.value;
    isRandom = false;
})


function createGrid(num) {
    const size = 600 / num;
    container.innerHTML = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const div = document.createElement('div');
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.style.backgroundColor = 'white';
            div.style.border = '0.1px solid black';
            div.style.boxSizing = 'border-box';

            container.appendChild(div);

            div.addEventListener('mouseover', () => {


                let opacity = parseFloat(div.style.opacity) || 0;
                opacity += 0.1;
                if (opacity > 1) {
                    opacity = 1;

                }
                div.style.opacity = opacity;
                if (isRandom) {
                    div.style.background = `rgb(${Math.floor(Math.random() * 256) + 1},${Math.floor(Math.random() * 256) + 1},${Math.floor(Math.random() * 256) + 1})`;
                }
                else {
                    div.style.backgroundColor = selectedColor;
                }
            })
        }
    }
}

let noOfSquares = 16;

resize.addEventListener('click', () => {
    noOfSquares = parseInt(prompt('Enter the number of squares each side: '));
    if (noOfSquares > 100) {
        noOfSquares = 100;
    }
    createGrid(noOfSquares);
})

clear.addEventListener('click', () => {
    createGrid(noOfSquares);
})


container.classList.add('grid');

createGrid(noOfSquares);