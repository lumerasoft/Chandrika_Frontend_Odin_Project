let color="black"
let click=true
function drawGrid(size) {
    let gridBoard = document.querySelector('.grid-board');
    let removeSquares = gridBoard.querySelectorAll('div');
    removeSquares.forEach((div) => div.remove())
    gridBoard.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${size},1fr)` ;

    let totalSize = size*size
    for (let i=0;i<totalSize;i++) {
        let square=document.createElement('div')
        square.addEventListener("mouseover",colrSquare);
        square.style.backgroundColor = 'blue';
        gridBoard.insertAdjacentElement("beforeend",square)
    }
}

drawGrid(16);
function changeSize(input) {
    if(input >=2 || input<=100) {
        drawGrid(input)
    } else {
        // document.write("enter range in between 2 and 100")
        // alert("enter range in between 2 and 100")
        console.log("enter range in between 2 and 100")
    }
}
function colrSquare() {
   if(click) {
        if(color === 'rgb') {
            this.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 50% )`;
        } 
        else {
            this.style.backgroundColor = color;
        }
    }
}
function changeColor(choice) {
    color=choice;
}

let resetButton = document.querySelector('#reset-sketchboard');
resetButton.addEventListener("click",resetSketchBoard)


function resetSketchBoard() {
    let gridBoard = document.querySelector('.grid-board');
    let removeSquares = gridBoard.querySelectorAll('div');
    removeSquares.forEach((div) => div.style.backgroundColor = 'blue')

}
document.querySelector("body").addEventListener('click',()=> {
    click=!click
})


