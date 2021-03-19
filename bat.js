class Bat{
	constructor(height, width, color, curvature, xposition, yposition){
		this.height = height
		this.width = width
		this.color = color
		this.curvature = curvature
		this.x = xposition
		this.y = yposition 
	}
	rectangle(){
		const c = document.getElementById("circle");
		const ctx = c.getContext("2d");
		// ctx.beginPath();
		
		// //ctx.rect(30, 450, 70, 20);
		// ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x/100 *(c.width-70), (this.y/100) *c.width, this.width, this.height);

	}
}
export default Bat;