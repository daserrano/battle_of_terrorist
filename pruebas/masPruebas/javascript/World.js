	function World(idCanvas)
	{

		this.canvas  = document.getElementById(idCanvas);
		this.context = this.canvas.getContext('2d');

		this.cellWidth  = 50;
		this.cellHeight = 50;

		this.allTiles = 
		[
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("ground6")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground3"))
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

		this.contadorPlayer1 = 0;
		this.contadorPlayer2 = 0;

		this.shoots;
		this.bullets = [];

		var self = this;
		this.timePassed = new Date().getTime();
		this.interval   = setInterval(function(){self.loop()},20); //Loop y cada cuanto tiempo debe actualizar.
	}

	World.prototype.initPlayer = function()
	{
		var x = Math.floor((Math.random()*2)+1);
	var y = Math.floor((Math.random()*3)+1); //Posicion aleatoria en el mapa.

	var z = Math.floor((Math.random()*2)+22);
	var t = Math.floor((Math.random()*3)+9);

	this.player  = new Player(this, 40, 40, x+0.5, y+0.5, "player1");
	this.player2 = new Player(this, 40, 40, /*z+0.5, t+0.5*/ 2.5, 5.5, "player2");
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
			self.shoots = new Bullet(self, self.player, self.player2);
			self.bullets.push(self.shoots);
			break;

			case 13: // Zero.
			e.preventDefault();
			self.shoots = new Bullet(self, self.player2, self.player);
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
	this.player.move(delta, this.player2);
	this.player2.move(delta, this.player);
};

World.prototype.moveShoots = function(delta)
{	
	for(var i=0; i<this.bullets.length; i++)
	{
		this.bullets[i].move(delta, world);
		
		if(this.bullets[i].used == true)
			this.bullets.splice(i, 1);
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
		var vida = 10;
		
		this.context.font = "bold 20px arial"; //Estilo de letra y tamaño.

		this.context.fillStyle = "yellow"; //Para mostrar la vida.
		this.context.fillRect(50,15, vida*30, 25);
		this.context.fillRect(this.canvas.width-50,15, -vida*30, 25);

		this.context.fillStyle = "red";
		this.context.fillRect(50,15, this.player.life*30, 25);
		this.context.fillRect(this.canvas.width-50,15, -this.player2.life*30, 25);

		if(this.player.life*10 <= 20)
		{
			this.context.fillStyle = "black";
			this.context.fillText(this.player.life*10 + ".0", 60,35);
		}
		if(this.player2.life*10 <= 20)
		{
			this.context.fillStyle = "black";
			this.context.fillText(this.player2.life*10 + ".0", this.canvas.width-110,35);
		}
		if(this.player.life*10 > 20)
		{
			this.context.fillStyle = "white"; // Mostrar el numero de vida.
			this.context.fillText(this.player.life*10 + ".0", 60,35);
		}
		if(this.player2.life*10 > 20)	
		{
			this.context.fillStyle = "white"; // Mostrar el numero de vida.
			this.context.fillText(this.player2.life*10 + ".0", this.canvas.width-110,35);
		}

		this.context.fillStyle = "black";
	};

	World.prototype.drawBullet = function()
	{
		if(!this.shoots)
			return;
		else 
			for(var i=0; i<this.bullets.length; i++)
				this.bullets[i].draw(this.context);
		};

		World.prototype.drawResults = function(player1, player2)
		{
			var that = this;
			this.context.font = "100px transformer";	

			this.context.drawImage(Images.get("team1"), this.canvas.width/2-250,this.canvas.height/2-150, 150, 150);
			this.context.drawImage(Images.get("team2"), this.canvas.width/2+100,this.canvas.height/2-150, 150, 150);
			
			this.context.fillStyle = "black";
			this.context.fillText(player1, this.canvas.width/2-193, this.canvas.height/2+125);
			this.context.fillStyle = "orange";
			this.context.fillText(player1, this.canvas.width/2-200, this.canvas.height/2+125);

			this.context.fillStyle = "black";
			this.context.fillText(player2, this.canvas.width/2+150, this.canvas.height/2+125);
			this.context.fillStyle = "orange";
			this.context.fillText(player2, this.canvas.width/2+143, this.canvas.height/2+125);

			setTimeout(this.nextRound, 3000);

			this.nextRound = function()
			{
				that.initPlayer();
			}
		}

		World.prototype.gameOver = function()
		{
			if(this.player.life <= 0 || this.player2.life <=0)
			{
				if(this.player.life <= 0)
					this.contadorPlayer2++;
				if(this.player2.life <= 0)
					this.contadorPlayer1++;

				this.drawResults(this.contadorPlayer1, this.contadorPlayer2);
				return true;
			}

			return;
		}

		World.prototype.loop = function()
		{
			var delta = (new Date().getTime()) - this.timePassed;
			this.timePassed = new Date().getTime();

			if(!this.gameOver())
			{
				this.moveCharacters(delta);
				//if(this.shoots)
				this.moveShoots(delta);
				this.drawMap();
				this.drawScore(this.player.life, this.player2.life);
				this.drawCharacters();
				this.drawBullet();
			}
		};