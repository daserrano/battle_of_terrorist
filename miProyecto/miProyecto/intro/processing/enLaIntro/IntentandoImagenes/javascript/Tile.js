function Tile(width, height, walk)
{
	this.width  = width;
	this.height = height;
	this.walk   = walk;
}

Tile.prototype.draw = function(context, x, y)
{
	if(this.walk == true)
		context.drawImage(Images.get("ground5"), this.width*x, this.height*y, this.width, this.height);
	if(this.walk == false)
		context.drawImage(Images.get("ground6"), this.width*x+1, this.height*y+1, this.width-1, this.height-1);

};