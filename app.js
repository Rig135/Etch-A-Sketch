const container = document.querySelector('.container');


function createGrid(num) {
    const size = 500 / num;
    container.innerHTML = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const div = document.createElement('div');
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.style.backgroundColor = 'white';
            div.style.border = '1px solid black';
            div.style.boxSizing = 'border-box';

            container.appendChild(div);

            div.addEventListener('mouseover', () => {
                div.style.background = 'lightgrey';
            })
        }
    }
}

let num = 20;




container.classList.add('grid');

createGrid(num);