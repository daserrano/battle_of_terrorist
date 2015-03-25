function sprite(img)
{
	this.img        = img;
	this.directions = [];
}

sprite.prototype.createDirection = function(rows, cols, spaceUp, spaceDo, spaceLe, spaceRi, directions)
{
	var width  = this.img.width/cols;
	var height = this.img.height/rows;

	for(direction in directions)
	{
		this.directions[direction] = [];
		for(var i=0; i<cols;i++)
			this.directions[direction].push([i*width+spaceLe, directions[direction]*height+spaceUp, (i+1)*width-spaceRi,(directions[direction]+1)*alto-spaceDo]);
	}
}
