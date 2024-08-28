// FlexBox in Css

const container = document.querySelector('.container');

// Initial 16 * 16 Grid

function gridSquare(size) {
    container.innerHTML = '';
    const squares = size * size;
    for (let i = 0; i < squares; i++) {
        const square = document.createElement('div');
        square.style.width = `${750 / size}px`;
        square.style.height = `${750 / size}px`;
        square.classList.add('square');
        container.appendChild(square);
    }
    hover()

}
gridSquare(16);

// Hover For Grid 

function hover() {

    const square = document.querySelectorAll('.square');
    square.forEach(elem => {
        elem.addEventListener('mouseover', () => {
            //  console.log(opacity);

            elem.style.backgroundColor = "black";
        });
        if (!elem.style.opacity) {
            elem.style.opacity = .1;
        }
        elem.addEventListener("mouseover", () => {
            let opacity = parseFloat(elem.style.opacity) || 0;
            opacity = Math.min(opacity + 0.1, 1);
            elem.style.opacity = opacity;
        });
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
        alert("Enter The Size Between 4 And 100.")
    }
});


const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(item => {
        item.style.backgroundColor = null;
    })
})

