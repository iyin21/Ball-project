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
		var c = document.getElementById("circle");
		var ctx = c.getContext("2d");
		// ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

export default Brick;