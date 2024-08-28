// FlexBox in Css

const container = document.querySelector('.container');

// Initial 16 * 16 Grid

function gridSquare(size) {



    container.innerHTML = '';
    const squares = size * size;
    for (let i = 0; i < squares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    hover()

}
gridSquare(16);

// Hover For Grid 

function hover() {
    const square = document.querySelectorAll('.square');
    square.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black";
        })
    });
}

// Grid Button 

const gridSize = document.querySelector('.grid-size');
gridSize.addEventListener('click', function () {
    const userInput = prompt('Enter The Size Of Grid:')
    const gridSize = parseInt(userInput);

    if (gridSize > 4 && gridSize < 100) {
        gridSquare(gridSize)
    } else {
        alert("Enter The Size Between 4 And 100!")
    }
});

// function reset(event) {
//     document.querySelector('.reset').reset()
// }

// const reset = document.querySelector('.reset')
// reset.addEventListener('click', function () {
//     square.forEach(item => {
//         item.style.backgroundColor = null;
//     })
// })