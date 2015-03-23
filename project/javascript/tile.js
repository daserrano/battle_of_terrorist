function Tile(width, heigth, walk, colour)
{
	console.log("ok3");
	this.width = width;
	this.heigth = heigth;
	this.walk   = walk;
	this.colour = colour;
}

Tile.prototype.draw = function(context, x, y) 
{
	console.log("oktio");
	context.fillStyle = '#444';
	context.fillRect  = (this.width*x, this.heigth*y, this.width, this.heigth);
	context.fillStyle = this.colour;
	context.fillRect  = (this.width*x+1, this.heigth*y+1, this.width-2, this.heigth-2);
};
