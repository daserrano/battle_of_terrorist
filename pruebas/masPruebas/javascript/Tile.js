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
	context.fillRect(this.width*x, this.height*y, this.width, this.height);
	context.fillStyle = this.color;
	context.fillRect(this.width*x+1, this.height*y, this.width, this.height);

};