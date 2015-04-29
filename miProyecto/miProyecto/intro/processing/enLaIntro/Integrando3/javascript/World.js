function World(idCanvas)
{
	this.canvas  = document.getElementById(idCanvas);
	this.context = this.canvas.getContext('2d');

	this.cellWidth  = 50;
	this.cellHeight = 50;

	this.allTiles = 
	[
	new Tile(this.cellWidth, this.cellHeight, true, "white"),
	new Tile(this.cellWidth, this.cellHeight, false, "black")
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
	this.canvas.height = this.cellHeight*this.map.length;

	this.player;
	this.player2;
	this.initPlayer();

	this.shoots;
	this.bullets = [];

	var self = this;
	this.timePassed = new Date().getTime();
	this.interval   = setInterval(function(){self.loop()},20); //Loop y cada cuanto tiempo debe actualizar.
}

World.prototype.initPlayer = function()
{
	var x = Math.floor((Math.random()*2)+1);
	var y = Math.floor((Math.random()*3)+1);

	var z = Math.floor((Math.random()*2)+22);
	var t = Math.floor((Math.random()*3)+9);

	this.player  = new Player(this, 40, 40, x+0.5, y+0.5, "player1");
	this.player2 = new Player(this, 40, 40, z+0.5, t+0.5, "player2");
	var self    = this;

	document.body.onkeydown = function(e)
	{
		switch(e.keyCode)
		{
			case 38: // Up
			e.preventDefault();
			self.player2.up = true;
			break;

			case 40: // Down
			e.preventDefault();
			self.player2.down = true;
			break;

			case 39: // Right
			e.preventDefault();
			self.player2.right = true;
			break;

			case 37: //Left
			e.preventDefault();
			self.player2.left = true;
			break;

			case 87: // Up
			e.preventDefault();
			self.player.up = true;
			break;

			case 83: // Down
			e.preventDefault();
			self.player.down = true;
			break;

			case 68: //Right
			e.preventDefault();
			self.player.right = true;
			break;

			case 65: //Left
			e.preventDefault();
			self.player.left = true;
			break;

			case 32: //Space
			e.preventDefault();
			break;
		}
	};
	document.body.onkeyup = function(e)
	{
		switch(e.keyCode)
		{
			case 38: // Up
			e.preventDefault();
			self.player2.up = false;
			break;

			case 40: // Down
			e.preventDefault();
			self.player2.down = false;
			break;

			case 39: // Right
			e.preventDefault();
			self.player2.right = false;
			break;

			case 37: //Left
			e.preventDefault();
			self.player2.left = false;
			break;

			case 87: // Up
			e.preventDefault();
			self.player.up = false;
			break;

			case 83: // Down
			e.preventDefault();
			self.player.down = false;
			break;

			case 68: // Right
			e.preventDefault();
			self.player.right = false;
			break;

			case 65: //Left
			e.preventDefault();
			self.player.left = false;
			break;

			case 32: //Space
			e.preventDefault();
			self.shoots = new Bullet(self, self.player);
			self.bullets.push(self.shoots);
			break;

			case 13: // Intro
			e.preventDefault();
			self.shoots = new Bullet(self, self.player2);
			self.bullets.push(self.shoots);
			break;
		}
	};
};

World.prototype.cellWalked = function(px, py)
{
	var x = parseInt(px);
	var y = parseInt(py);

	return this.allTiles[this.map[y][x]].walk;
}

World.prototype.moveCharacters = function(delta)
{
	this.player.move(delta);
	this.player2.move(delta);
};

World.prototype.moveShoots = function(delta)
{	for(var i=0; i<this.bullets.length; i++)
	{
		this.bullets[i].move(delta);
	}
};

World.prototype.drawMap = function()
{
	var y = this.map.length;
	var x = this.map[0].length;

	for(var yi=0; yi<y; yi++)
		for(var xi=0; xi<x; xi++)
			this.allTiles[this.map[yi][xi]].draw(this.context, xi, yi);
	};

	World.prototype.drawCharacters = function()
	{
		this.player.draw(this.context);
		this.player2.draw(this.context);
	};

	World.prototype.drawScore = function()
	{
		this.context.fillStyle="blue";
		this.context.font = "bold 30px arial";
		this.context.fillText("0",this.canvas.width/2-30,35);
		this.context.fillText("100%",45,35);
		this.context.fillStyle = "red";
		this.context.fillText("0",this.canvas.width/2+14,35);
		this.context.fillText("100%",this.canvas.width-125,35);
	};

	World.prototype.drawBullet = function()
	{
		if(!this.shoots)
			return;
		else 
			for(var i=0; i<this.bullets.length; i++)
				this.bullets[i].draw(this.context);
		};

		World.prototype.loop = function()
		{
			var delta = (new Date().getTime()) - this.timePassed;
			this.timePassed = new Date().getTime();

			this.moveCharacters(delta);
			if(this.shoots)
				this.moveShoots(delta);
			this.drawMap();
			this.drawScore();
			this.drawCharacters();
			this.drawBullet();
		};