function World(idCanvas)
{
	this.canvas  = document.getElementById(idCanvas);
	this.context = this.canvas.getContext('2d');

	this.cellWidth  = 40;
	this.cellheight = 40;

	this.allTiles = 
	[
	new Tile(this.cellWidth, this.cellheight, true, "white"),
	new Tile(this.cellWidth, this.cellheight, false, "black")
	];

	this.map = 
	[
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
	[1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];

	this.canvas.width  = this.cellWidth*this.map[0].length;
	this.canvas.height = this.cellheight*this.map.length;

	this.player;
	this.initPlayer();

	var self = this;
	this.timePassed = new Date().getTime();
	this.interval   = setInterval(function(){self.loop()},20); //Loop y cada cuanto tiempo debe actualizar.

}

World.prototype.initPlayer = function()
{
	this.player = new Player(this, 30, 30, 2.5, 1.5);
	var self    = this;

	document.body.onkeydown = function(e)
	{
		switch(e.keyCode)
		{
			case 38: // Up
			e.preventDefault();
			self.player.up = true;
			break;

			case 40: // Down
			e.preventDefault();
			self.player.down = true;
			break;

			case 39: // Right
			e.preventDefault();
			self.player.right = true;
			break;

			case 37: //Left
			e.preventDefault();
			self.player.left = true;
			break;
		}
	};
	document.body.onkeyup = function(e)
	{
		switch(e.keyCode)
		{
			case 38: // Up
			e.preventDefault();
			self.player.up = false;
			break;

			case 40: // Down
			e.preventDefault();
			self.player.down = false;
			break;

			case 39: // Right
			e.preventDefault();
			self.player.right = false;
			break;

			case 37: //Left
			e.preventDefault();
			self.player.left = false;
			break;
		}
	};
};

World.prototype.cellWalked = function(px, py)
{
	var x = parseInt(px);
	var y = parseInt(py);

	return this.allTiles[this.map[y][x]].walked;
}

World.prototype.moveCharacters = function(delta)
{
	this.player.move(delta);
};

World.prototype.loop = function()
{
	var delta = (new Date().getTime()) - this.timePassed;
	this.timePassed = new Date().getTime();

	this.moveCharacters(delta);
	//
	//
};