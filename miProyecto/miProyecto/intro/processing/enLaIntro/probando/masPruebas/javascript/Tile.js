function Tile(width, height, walk, image)
{
	this.width  = width;
	this.height = height;
	this.walk   = walk;
	this.image = image;
}

Tile.prototype.draw = function(context, x, y)
{
		context.drawImage(this.image, this.width*x, this.height*y, this.width, this.height);
};