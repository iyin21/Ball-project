import Ball from "/ball.js";
import Scene from "/scene.js";
import Bat from "/bat.js";
import Brick from "/brick.js";

 let bricks=[]

class Game{
	constructor(config){
		this.sceneConfig=config.sceneConfig
		this.bricksConfig = config.bricksConfig
		this.batConfig = config.batConfig
		this.ballConfig =config.ballConfig
	}
	start(){
		for(let i=this.bricksConfig.length-1; i>=0; i--) {
        	for(var j=this.bricksConfig[i].length-1; j>=0; j--) {
        		const brick = this.bricksConfig[i][j]
				let brick1 = new Brick(brick.color, brick.height, brick.width, 20, ((brick.width+7) *j)+2, i*(25+15)+10)
				bricks.push(brick1)
			}
		}		

	}
	 renderToDom(){
	 	let scene = new Scene(this.sceneConfig.backgroundColor, this.sceneConfig.width, this.sceneConfig.height)
	 	let ball = new Ball(this.ballConfig.radius, this.ballConfig.weight, this.ballConfig.color, this.ballConfig.xPosition, this.ballConfig.yPosition)
	 	let bat = new Bat(this.batConfig.height, this.batConfig.width, this.batConfig.color, this.batConfig.curvature, this.batConfig.xPosition, this.batConfig.yPosition)
		const animate = () => {
			const ctx = this.sceneConfig.domElement.getContext("2d");
	 		ctx.clearRect(0, 0, this.sceneConfig.width, this.sceneConfig.height);
	 		scene.setBackground()
			ball.draw();

		
			for(let i= bricks.length-1; i>=0; i--){
				const brick = bricks[i]
				brick.draw() 
				brick.collide(ball)
			}	
			
			bat.rectangle()
			ball.collisionDetection(bat)
			requestAnimationFrame(animate);
		}
		animate()
	 }

	 
}

let sceneConfig = {
    height: 500,
    width: 500,
    backgroundColor: '#000000',
    domElement: document.getElementById("circle")
}
const brickWidth = (500/7)-8;

let redBrickParams = { color: "#ff0066", height: 25, width: brickWidth}
let greenBrickParams = { color: "#66ff33", height: 25, width: brickWidth }
let orangeBrickParams = { color: "#ff6600", height: 25, width: brickWidth }

let bricksConfig = [
    Array(7).fill(redBrickParams),
    Array(7).fill(greenBrickParams),
    Array(7).fill(orangeBrickParams)
];

let batConfig = {
    height: 30,
    width: 70,
    color: '#ff1a1a',
    curvature: 0,
    xPosition: 50,
    yPosition: 96,
}
let ballConfig = {
    radius: 10,
    weight: 15,
    color: '#1a1aff',
    xPosition: 50,
    yPosition: 93.9,
}

let config = {sceneConfig, bricksConfig, batConfig, ballConfig}
let game= new Game(config);
game.renderToDom();
game.start();

//requestAnimationFrame(game.renderToDom());
// const animate = () => {
// 	game.renderToDom();
//    requestAnimationFrame(animate);
// }
// animate();