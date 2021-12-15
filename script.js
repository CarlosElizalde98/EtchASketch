const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
const eraserBtn = document.querySelector('#eraser');
const colorBtn = document.querySelector('#color');

//Function that will create the grid.
function createSquares(number) {
    for (let j = 0; j < number; j++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
            for (let i = 0; i < number;i++) {
                const item = document.createElement('div');
                item.classList.add('item');
                row.appendChild(item);
            }
        }
}

createSquares(16);

colorBtn.addEventListener('click', colorItem);

resetBtn.addEventListener('click', eraseGrid);

eraserBtn.addEventListener('click', eraseItem);

const gridItems = document.querySelectorAll('.item');

//Event listener that will allow user to interact with grid.
function colorItem() {

    container.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
        
    }); 
}

//Function resets the grid back to default color.
function eraseGrid() {
    gridItems.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}

function eraseItem() {
    container.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'white';
    });
}
