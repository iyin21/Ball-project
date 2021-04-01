import Ball from "/ball.js";
import Scene from "/scene.js";
import Bat from "/bat.js";
import Brick from "/brick.js";

let bricks=[]
const startBtn = document.getElementById("btn1");
const pauseBtn = document.getElementById("btn2");
const playBtn = document.getElementById("btn3");

class Game{
	constructor(config){
		this.sceneConfig=config.sceneConfig
		this.bricksConfig = config.bricksConfig
		this.batConfig = config.batConfig
		this.ballConfig =config.ballConfig
		this.gameState = { playing:false, paused:false, gameOver:false };
		this.scene = new Scene(this.sceneConfig.backgroundColor, this.sceneConfig.width, this.sceneConfig.height)
		this.ball = new Ball(this.ballConfig.radius, this.ballConfig.weight, this.ballConfig.color, this.ballConfig.xPosition, this.ballConfig.yPosition)
		this.bat = new Bat(this.batConfig.height, this.batConfig.width, this.batConfig.color, this.batConfig.curvature, (this.batConfig.xPosition/100)*this.sceneConfig.width-35, this.batConfig.yPosition)
		for(let i=this.bricksConfig.length-1; i>=0; i--) {
        	for(var j=this.bricksConfig[i].length-1; j>=0; j--) {
        		const brick = this.bricksConfig[i][j]
				this.brick1 = new Brick(brick.color, brick.height, brick.width, 20, ((brick.width+7) *j)+2, i*(25+15)+10)
				bricks.push(this.brick1)
			}
		}
		startBtn.addEventListener('click', ()=>{
			startBtn.style.display = "none";
			this.gameState.playing =true
		})
		pauseBtn.addEventListener('click', ()=>{
			this.gameState.playing =false
			this.gameState.paused = true
			pauseBtn.style.display = "none";
			playBtn.style.display = "block";
		})
		playBtn.addEventListener('click', ()=>{
			this.gameState.playing=true
			this.gameState.paused =false
			playBtn.style.display = "none";
			pauseBtn.style.display = "block";
			
		})
		this.sceneConfig.domElement.addEventListener("mousemove", this.mouseMoved.bind(this));
	}
	mouseMoved(e) {
	 	if(this.gameState.playing===true){
		 	let relativeX = e.clientX-this.sceneConfig.domElement.offsetLeft+70;
		 	if(relativeX>0 && relativeX < this.sceneConfig.domElement.width){
				this.bat.x= relativeX-this.bat.width
					//return true
				console.log("left")
			}
		}	
	}	
	renderToDom(){
		const ctx = this.sceneConfig.domElement.getContext("2d");
 		this.scene.setBackground()
		this.ball.draw();
		
		for(let i= bricks.length-1; i>=0; i--){
			const brick = bricks[i]
			brick.draw() 
			//brick.collide(this.ball)
		}	
		
		this.bat.rectangle()
		if(this.gameState.paused===true && this.gameState.gameOver===false){
			console.log("pause");
			ctx.fillStyle="blue";
			ctx.fillText("Game Paused",this.sceneConfig.domElement.width/2, this.sceneConfig.domElement.width/2 )
		}
		if(this.gameState.gameOver=== true){
			ctx.fillText("GameOver", this.sceneConfig.domElement.width/2, this.sceneConfig.domElement.width/2)
		}
	 
	}
	update(){
		const ctx = this.sceneConfig.domElement.getContext("2d");
		ctx.clearRect(0, 0, this.sceneConfig.width, this.sceneConfig.height);
		ctx.fillStyle="blue";
		this.ball.draw();
		for(let i= bricks.length-1; i>=0; i--){
				const brick = bricks[i]
				brick.draw() 
				brick.collide(this.ball)
			}	
		this.bat.rectangle();
		this.ball.collisionDetection(this.bat)
		if((this.ball.y/100) *this.sceneConfig.domElement.height + this.ball.dy > this.sceneConfig.domElement.width+this.ball.r ){
	    	this.gameState.playing=false
	    	this.gameState.pause=true
	    	this.gameState.gameOver= true
	    	console.log("game over")
	    	//alert("gameover")
		}
	}
	 start(){
	 	
		this.renderToDom()
		if(this.gameState.playing=== true){
			this.update()
		}	
		if(pauseBtn.onclick === true && this.gameState.gameOver=== false){
			this.gameState.paused = true
			console.log("paused")

		}
		//if(document.getElementById('btn').onclick == true && gameState.paused){
			//this.gameState.playing= true
		requestAnimationFrame(this.start.bind(this));
		//started.addEventListener('click', this.renderToDom.bind(this))	
		if(startBtn.clicked === true && this.gameState.playing===true){
			this.start.bind(this)
		}
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
game.renderToDom()
game.start();
