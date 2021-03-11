class Ball{
	constructor(radius, weight, color, x_position, y_position){
		this.r = radius
		this.w = weight
		this.c = color
		this.x = x_position
		this.y = y_position
	}
	draw(){
		
		const canvas = document.getElementById("circle");
		const ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.arc((this.x/100) *500, (this.y/100) *500, this.r, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.c;
		ctx.fill();
	}
}	

// function renderBallsToScene(){
// 	scene.setBackground()
// 	ball1.draw();
// 	// ball2.draw();
// 	// ball3.draw();
// 	// ball4.draw();
// 	// ball5.draw();
// 	// ball6.draw();
// 	// ball7.draw();
	
// }
// let scene = new Scene("#000000", 500, 500);
// let ball1 = new Ball(10, 15, "#4a8b33");
// let ball2 = new Ball(20, 22, "#000000");
// let ball3 = new Ball(18, 16, "#ffab70");
// let ball4 = new Ball(25, 10, "#000000");
// let ball5 = new Ball(30, 15, "#a48b33");
// let ball6 = new Ball(15, 25, "#bff0000");
// let ball7 = new Ball(8, 20, "#2a00bg");

//  let balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7];
//  renderBallsToScene(balls);

 export default Ball;
