import Ball from "/ball.js";
import Scene from "/scene.js";
import Bat from "/bat.js";
import Brick from "/brick.js";

class Game{
	//constructor(config){
		//this.x = config.x ||0;
	//}
	constructor(config={
			sceneConfig: sceneConfig,
			// bricksConfig: bricksConfig,
			// batConfig: batConfig,
			ballConfig: ballConfig
		}){
		this.sceneConfig=config.sceneConfig
		this.bricksConfig = config.bricksConfig
		this.batConfig = config.batConfig
		this.ballConfig =config.ballConfig
		// Object.assign(this,config); 
		// this.state={
		// 	gameState: "start"
		//}
		// this.scene =new Scene(this.screenConfig.backgroundC., )
		// scene.setBackground()
	}
	 renderToDom(){
	 	const ctx = this.sceneConfig.domElement.getContext("2d");
	 	ctx.clearRect(0, 0, domElement.width, domElement.height);
	 	let scene = new Scene(this.sceneConfig.backgroundColor, this.sceneConfig.width, this.sceneConfig.height)
	 	scene.setBackground()
	 	//let ball = new Ball(this.ballConfig.radius, this.ballConfig.weight, this.ballConfig.color, this.ballConfig.xPosition, this.ballConfig.yPosition)
		ball.draw();
		bat.rectangle()
		for(let i= brickArrangement[0].length-1; i>=0; i--){
			const brick = brickArrangement[0][i]
			//brick = new Brick(brickArrangement[0][i])
			brick.draw() 
			brick.collide(ball)
		}
		for(let i= brickArrangement[1].length-1; i>=0; i--){
			const brick = brickArrangement[1][i]
			brick.draw() 
			brick.collide(ball)
		}
		for(let i= brickArrangement[2].length-1; i>=0; i--){
			const brick = brickArrangement[2][i]
			brick.draw() 
			brick.collide(ball)
		}
		// brickArrangement[0].forEach(brick => {
		// 	brick.draw() 
		// 	brick.collide(ball)
		// })
		// brickArrangement[1].forEach(brick => {
		// 	brick.draw() 
		// 	brick.collide(ball)
		// })
		// brickArrangement[2].forEach(brick => {
		// 	brick.draw()
		// 	brick.collide(ball)
		// })
		//ball.moveBall();
		ball.collisionDetection(bat)
    	requestAnimationFrame(this.renderToDom.bind(this));
    }

	 
}

const domElement= document.getElementById("circle");
const ctx = domElement.getContext("2d");

// function renderBallsToScene(){
// 	scene.setBackground()
// 	ball.draw();
// 	bat.rectangle()
// 	brickArrangement[0].forEach(brick => brick.draw())
// 	brickArrangement[1].forEach(brick => brick.draw())
// 	brickArrangement[2].forEach(brick => brick.draw())
	// bricks.forEach(brick2 => brick2.draw())
	// bricks.forEach(brick3 => brick3.draw())
	
//}

const canvasWidth= 500;
const bricksPerRow = 7;
const brickWidth = (canvasWidth/bricksPerRow)-8;

const row2Bricks =[]
const bricks =[]

for(let i=0; i< 7; i++){
	let brick = new Brick("#66ff33", 25, brickWidth, 50, ((brickWidth+7) *i)+2, 50)
	row2Bricks.push(brick)
}
for(let i=0; i< 7; i++){
	let brick = new Brick("#ff6600", 25, brickWidth, 50, ((brickWidth+7) *i)+2, 90)
	bricks.push(brick)
}

let brick1 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *0)+2, 10);
let brick2 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *1)+2, 10);
let brick3 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *2)+2, 10);
let brick4 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *3)+2, 10);
let brick5 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *4)+2, 10);
let brick6 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *5)+2, 10);
let brick7 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *6)+2, 10);


let brickArrangement = [[brick1, brick2, brick3, brick4, brick5, brick6, brick7], [...row2Bricks],[...bricks]];
//let scene = new Scene("#000000", 500, 500);
let bat = new Bat(50, 70, "#ff1a1a", 50, 50, 96);
let ball = new Ball(10, 15, "#1a1aff", 50, 93.9);
// for(let i=0; i< bricksPerRow; i++){
// 	let brick1 = new Brick("#ff0066", 25, brickWidth, 50, ((brickWidth+7) *i)+2, 10)
// 	bricks.push(brick1)
// }
// for(let i=0; i< bricksPerRow; i++){
// 	let row2Brick = new Brick("#66ff33", 25, brickWidth, 50, ((brickWidth+7) *i)+2, 50)
// 	brickArrangement.push(brick2)
// }
// for(let i=0; i< bricksPerRow; i++){
// 	let bricks = new Brick("#ff6600", 25, brickWidth, 50, ((brickWidth+7) *i)+2, 90)
// 	brickArrangement.push(bricks)
// }

let sceneConfig = {
    height: 500,
    width: 500,
    backgroundColor: '#000000',
    domElement: document.getElementById("circle")
   // const ctx = domElement.getContext("2d");
}
let ballConfig = {
    radius: 10,
    weight: 15,
    color: '#1a1aff',
    xPosition: 50,
    yPosition: 93.9,
}
 
//renderBallsToScene();
let game= new Game();
//game.renderToDom(domElement);
//const animate = () => {
	game.renderToDom();
   //requestAnimationFrame(animate);
//}
//animate()