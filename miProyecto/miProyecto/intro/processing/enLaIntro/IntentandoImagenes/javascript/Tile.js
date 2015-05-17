//function Tile(width, height, walk, color)
function Tile(width, height, walk, color)
{
	this.width  = width;
	this.height = height;
	this.walk   = walk;
	this.color  = color;

}

Tile.prototype.draw = function(context, x, y)
{
	context.fillStyle = "#444";
	if(this.walk == true)
		context.drawImage(Images.get("ground"), this.width*x, this.height*y, this.width, this.height);
	//context.fillRect(this.width*x, this.height*y, this.width, this.height);
	//context.fillRect(this.width*x+1, this.height*y+1, this.width-1, this.height-1);
	context.fillStyle = this.color;
	if(this.walk == false)
		context.drawImage(Images.get("ground2"), this.width*x+1, this.height*y+1, this.width-1, this.height-1);
};