function sprite(img)
{
	this.img        = img;
	this.directions = [];
}

sprite.prototype.createDirection = function(rows, cols, spaceUp, spaceDo, spaceLe, spaceRi, directions)
{
	var width  = this.img.width/cols;
	var height = this.img.height/rows;
	}
