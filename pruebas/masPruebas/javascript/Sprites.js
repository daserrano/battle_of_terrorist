function Sprite(img)
{
	this.img = img;
	this.directions = [];
}

//

Sprite.prototype.createDirection = function(rows, cols, spaceUp, spaceDo, spaceLe, spaceRi, directions)
{
	var width  = this.img.width/cols;
	var height = this.img.height/rows;

	for (direction in directions)
	{
		this.directions[direction] = [];
		for (var i=0; i< cols; i++)
			this.directions[direction].push([i*width+spaceLe, 
				directions[direction]*height+spaceUp, 
				(i+1)*width-spaceRi,
				(directions[direction]+1)*height-spaceUp]);
	}
};

//

//

function SaveSprites()
{
	this.list = []; //Lista de sprites.
}

SaveSprites.prototype.add = function(id, sprite)
{
	this.list[id] = sprite;
};

SaveSprites.prototype.get = function(id)
{
	return this.list[id];
};