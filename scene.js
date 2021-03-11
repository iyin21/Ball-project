class Scene{
	constructor(backgroundColor, width, height){
		this.backgroundColor= backgroundColor
		this.width = width
		this.height = height
	}
	setBackground(){
		const canvas = document.getElementById("circle");
		canvas.width = this.width;
		canvas.height = this.height;
		canvas.style.background = this.backgroundColor; 
	} 
}

export default Scene;