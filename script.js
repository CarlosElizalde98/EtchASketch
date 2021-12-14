const container = document.querySelector('#container');

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
