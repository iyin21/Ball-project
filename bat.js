class Bat{
	constructor(height, width, color, curvature, xPosition, yPosition){
		this.height = height
		this.width = width
		this.color = color
		this.curvature = curvature
		this.x = xPosition
		this.y = yPosition 
	}
	rectangle(){
		const c = document.getElementById("circle");
		const ctx = c.getContext("2d");
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x/100 *(c.width-70), (this.y/100) *c.width, this.width, this.height);

	}
}
export default Bat;