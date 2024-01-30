function setup() {
  createCanvas(800, 300);
 
  rectMode(CENTER)
}

function draw() {
   background(220);
  
  // Squares Moving Right
  rect(originLeft - 25 + moveRight,75,50,50)
  
  rect(originLeft - 150 + 2 * moveRight, 175, 50, 50)
  
  rect(originLeft - 300 + 3 * moveRight, 275, 50, 50)
  
  // Squares Moving Left
  rect(originRight + 300 + 3 * moveLeft, 25, 50, 50)
  
  rect(originRight + 150 + 2 * moveLeft, 125, 50, 50)
  
  rect(originRight + 25 + moveLeft, 225, 50, 50)
  
  if (frameCount === 850 || frameCount === 1700 || frameCount === 2550 || frameCount === 3400) {
    moveRight = 0;
    moveLeft = 0;
   
  } else {
          moveRight = moveRight + 1;
          moveLeft = moveLeft - 1;
  }
    
  
}

var moveRight = 0;
var moveLeft = 0;
var originLeft = 0;
var originRight = 800;
