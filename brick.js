class Brick{
	constructor(color, height, width, hardness, x_location, y_location){
		this.color = color
		this.height = height
		this.width = width
		this.hardness = hardness
		this.x = x_location
		this.y = y_location	
	}
	draw(){
		const c = document.getElementById("circle");
		const ctx = c.getContext("2d");
		// ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	collide(ball){
		const c = document.getElementById("circle");
		// if((ball.y/100) *c.height < this.y +this.height && (ball.y/100) *c.height > this.y && (ball.x/100) *c.width > this.x && (ball.x/100) *c.width < this.x  + this.width){
		if((ball.x/100) *c.width >this.x  && (ball.x/100) *c.width < this.x +this.width && (ball.y/100) *c.height > this.y && (ball.y/100) *c.height < this.y + this.height){
			ball.dy  = - ball.dy;

		}
	}
}

export default Brick;