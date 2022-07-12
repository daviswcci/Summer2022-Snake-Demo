// Variables
let snakeBody = [ {x:0,y:0} ];
let snakeDir = 1; // 0,1,2,3 ... N,S,E,W
let snakeLen = 1;
// NOTE: add a display text for our snake's direction
let score = 0;

let fruitPosn = {x: 5, y: 3} // fruitposn is an object with properties x and y

// one idea: we'll put the snake in each of the grid spots
// NOTE: revisit + refactor this
const gridHeight = 10;
const gridWidth = 10;
// DOM Manipulation
let gridHTML = document.getElementById("grid");
gridHTML.style.gridTemplateColumns = "repeat(" + gridWidth + ", 20px)";
gridHTML.style.gridTemplateRows = "repeat(" + gridHeight + ", 20px)";
for(let i = 0; i < gridHeight; i++){
    for(let j = 0; j < gridWidth; j++){
        // grid.push({x:j, y:i } )
        let gridSpaceHTML = document.createElement("div"); // this HTML item represents a space on our grid
        gridSpaceHTML.id = j + "," + i; // gives the space an id of 'j,i'
        gridSpaceHTML.classList.add("grid-item");
        gridHTML.append(gridSpaceHTML); 
    }
}

// Functions
function DrawFruit(){
    // grab the html element where our fruit is located
    let fruitSpaceHTML = document.getElementById(fruitPosn.x + "," + fruitPosn.y);
    // update its visuals
    fruitSpaceHTML.innerText = "🍎";
    // done.
}
RandomizeFruitPosn();
DrawFruit();

function DrawSnake(){
    snakeBody.forEach((segment) => {
        let snakeSpaceHTML = document.getElementById(segment.x + "," + segment.y);
        // update its visuals
        snakeSpaceHTML.innerText = "🟢";
    });
}
DrawSnake();

// creates a random position from 0,0 to 9,9
function RandomizeFruitPosn(){
    fruitPosn.x = Math.floor(Math.random() * gridWidth);
    fruitPosn.y = Math.floor(Math.random() * gridHeight);
}