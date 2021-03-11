import Ball from "/ball.js";
import Scene from "/scene.js";
import Bat from "/bat.js";
import Brick from "/brick.js";

const bricks = []

function renderBallsToScene(){
	scene.setBackground()
	ball.draw();
	bat.rectangle()
	bricks.forEach(brick1 => brick1.draw())
	bricks.forEach(brick2 => brick2.draw())
	bricks.forEach(brick3 => brick3.draw())
	
}
const canvasWidth= 500;
const bricksPerRow = 7;
const brickWidth = (canvasWidth/bricksPerRow)-8

let scene = new Scene("#000000", 500, 500);
let bat = new Bat(10, 70, "#ff1a1a", 50, 30, 96);

for(let i=0; i< bricksPerRow; i++){
	let brick1 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *i)+2, 10)
	bricks.push(brick1)
}
for(let i=0; i< bricksPerRow; i++){
	let brick2 = new Brick("#66ff33", 25, brickWidth, 50, ((brickWidth+7) *i)+2, 50)
	bricks.push(brick2)
}
for(let i=0; i< bricksPerRow; i++){
	let brick3 = new Brick("#ff6600", 25, brickWidth, 50, ((brickWidth+7) *i)+2, 90)
	bricks.push(brick3)
}

let ball = new Ball(10, 15, "#1a1aff", 80, 50);
 
renderBallsToScene();