function Sprite(img)
{
	this.img = img;
	this.directions = [];
}

Sprite.prototype.setDirection = function(direction, coord)
{
	this.directions[direction] = coord;
};

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

Sprite.prototype.getNumSprites = function(direction)
{
	return this.directions[direction].length;
};

Sprite.prototype.draw = function(context, width, height, direction, index)
{
	context.drawImage(this.img, this.directions[direction][index][0],
								this.directions[direction][index][1],
								this.directions[direction][index][2]-this.directions[direction][index][0],
								this.directions[direction][index][3]-this.directions[direction][index][1],
								-width/2, -height/2, width, height);
};

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