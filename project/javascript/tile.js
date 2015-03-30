function Tile(width, height, walk, colour)
{
	this.width = width;
	this.height = height;
	this.walk   = walk;
	this.colour = colour;
}

Tile.prototype.draw = function(context, x, y) 
{
	context.fillStyle = '#444';
	context.fillRect(this.width*x, this.height*y, this.width, this.height);
	context.fillStyle = this.colour;
	context.fillRect(this.width*x+1, this.height*y+1, this.width-1, this.height-1);
};
