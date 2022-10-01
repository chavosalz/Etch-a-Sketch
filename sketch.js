var choiceColor = "black";
let click = false;

function makeGrid(size){
let board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
let lim = size * size;
for(let i = 0; i < lim; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', changeColor);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement('beforeend', square);
}
}

makeGrid(16);

function changeGrid(input){
    if(input < 101){
    makeGrid(input);
    } else {
        console.log("no");
    }
}

function clearGrid(){
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach((div) => div.style.backgroundColor = "white");
}

function changeColor(){
    if(click){
    this.style.backgroundColor = choiceColor;
    }
}

function getColor(color){
choiceColor = color;
}

document.querySelector("body").addEventListener("click", () => {
    click = !click;
    if(click){
        let coloring = document.querySelector("#coloring");
        coloring.textContent = "Mode: Coloring";
    }
    if(!click){
        let coloring = document.querySelector("#coloring");
        coloring.textContent = "Mode: Not Coloring";
    }
})