const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
const eraserBtn = document.querySelector('#eraser');
const colorBtn = document.querySelector('#color');
const rainbowBtn = document.querySelector('#rainbow');
const changeSizeBtn = document.querySelector('#changeSize');

const defaultValue = 16;

//Initialize Grid
createSquares();

//Function that will create the grid.
function createSquares(number) {
    if (isNaN(number)) {
        number = defaultValue;
    }
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

colorBtn.addEventListener('click', colorItem);

rainbowBtn.addEventListener('click', rainbowItem);

resetBtn.addEventListener('click', eraseGrid);

eraserBtn.addEventListener('click', eraseItem);

changeSizeBtn.addEventListener('click', changeSize);



//Function that allows you to color a grid item.
function colorItem() {

    container.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
        
    }); 
}

//Function that allows you to add rainbow colors to grid.
function rainbowItem () {
    container.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = rainbowColor();
    }
 )}

 //Function creates rainbow colors randomly and returns values.
function rainbowColor() {
    let x, y, z, randomColor;
    x = Math.round(Math.random() * 256);
    y = Math.round(Math.random() * 256);
    z = Math.round(Math.random() * 256);
    randomColor = 'Rgb(' + x + ',' + y + ',' + z+')';
    return randomColor;
}

//Function resets the grid back to default color.
function eraseGrid() {
    let gridItems = document.querySelectorAll('.item');
    gridItems.forEach(element => {
        element.style.backgroundColor = 'white';
    });

}

//Function that erases the color of a particular grid item.
function eraseItem() {
    container.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'white';
    });
}

//Change the size of the Grid
function changeSize() {
    let size = prompt("Please enter a number between 1 and 100:");

    if (size < 1 || size > 100 || isNaN(size)) {
        size = prompt("Please enter a number between 1 and 100: ");
    }

    container.innerHTML = '';
    createSquares(size);
}


