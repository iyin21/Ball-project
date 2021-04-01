class Bat{
	constructor(height, width, color, curvature, xPosition, yPosition){
		this.height = height
		this.width = width
		this.color = color
		this.curvature = curvature
		this.x = xPosition
		this.y = yPosition 
		this.dx =1
		this.dy =-1

	}
	rectangle(){
		const c = document.getElementById("circle");
		const ctx = c.getContext("2d");
		ctx.fillStyle = this.color;
		//this.a= this.x/100 *(c.width-70)
		ctx.fillRect(this.x, (this.y/100) *c.width, this.width, this.height);
	}
	
}
export default Bat;