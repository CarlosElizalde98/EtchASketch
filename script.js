const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');

function createSquares() {
    for (let j = 0; j < 16; j++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
            for (let i = 0; i < 16;i++) {
                const item = document.createElement('div');
                item.classList.add('item');
                row.appendChild(item);
            }
        }
}

createSquares();
container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "black";
    
});

const gridItems = document.querySelectorAll('.item');
resetBtn.addEventListener('click', eraseGrid);


function eraseGrid() {
    gridItems.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}