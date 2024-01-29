function setup() {
  createCanvas(400, 400);
 
  rectMode(CENTER)
}

function draw() {
   background(220);
  
  // Squares Moving Right
  rect(originLeft + moveRight,75,50,50)
  
  rect(originLeft - 150 + 2 * moveRight, 175, 50, 50)
  
  rect(originLeft - 300 + 3 * moveRight, 275, 50, 50)
  
  // Squares Moving Left
  rect(originRight + 300 + 3 * moveLeft, 125, 50, 50)
  
  rect(originRight + 150 + 2 * moveLeft, 225, 50, 50)
  
  rect(originRight + moveLeft, 325, 50, 50)
  
  
  moveRight = moveRight + 1;
  moveLeft = moveLeft - 1;
  
}

var moveRight = 0;
var moveLeft = 0;
var originLeft = 0;
var originRight = 400;