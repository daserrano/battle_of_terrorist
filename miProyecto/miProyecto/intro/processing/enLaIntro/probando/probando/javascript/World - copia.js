
		World.contadorPlayer1 = 0;
		World.contadorPlayer2 = 0;

	function World(idCanvas)
	{

		this.canvas  = document.getElementById(idCanvas);
		this.context = this.canvas.getContext('2d');

		this.cellWidth  = 50;
		this.cellHeight = 50;
//
		//this.allTiles = 
		//[];
//
		//for(var i=1; i<4; i++)
		//	if(i<4)
		//				this.allTiles.push = new Tile(this.cellWidth, this.cellHeight, true, Images.get(i)),
		//this.allTiles.push =new Tile(this.cellWidth, this.cellHeight, true, Images.get("3"))
		

this.allTiles = 
	[
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("2"))
	];

















		//;
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground3")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("barrel1")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("barrel2")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline1")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline2")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline3")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline4")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline5")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline6")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline7")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline8")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline9")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline10")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline11")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline12")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline13")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline14")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline15")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline16")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline17")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline18")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline19")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline20")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline21")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline22")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline23")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline24")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline25")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline26")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline27")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline28")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline29")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline30")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline31")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline32")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline33")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline34")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline35")),
		////39
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("square1")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("square2")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("square3")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("square4")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("square6")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("square7")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("square8")),
		//new Tile(this.cellWidth, this.cellHeight, false, Images.get("square9"))
		//];

		//this.map = 
		//[
		//[4, 9, 9, 9, 9, 9, 9, 9, 9, 13, 11, 14, 9, 9, 13, 9, 9, 9, 9, 14, 13, 13, 9, 9, 17],
		//[5, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18],
		//[7, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 19],
		//[7, 0, 0, 1, 0, 0, 0, 0, 0, 39, 42, 42, 0, 42, 42, 44, 0, 0, 0, 0, 1, 0, 0, 0, 20],
		//[7, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 1, 0, 1, 0, 20],
		//[7, 2, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 0, 45, 0, 0, 1, 0, 0, 0, 0, 0, 20],
		//[6, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 20],
		//[6, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 45, 0, 0, 1, 0, 0, 0, 0, 0, 19],
		//[7, 0, 1, 0, 1, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 19],
		//[7, 0, 0, 0, 1, 0, 0, 0, 0, 41, 43, 43, 0, 43, 43, 46, 0, 0, 0, 0, 0, 1, 0, 0, 20],
		//[26, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 20],
		//[27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 20],
		//[8, 12, 23, 22, 22, 22, 22, 22, 22, 22, 22, 22, 37, 16, 22, 22, 22, 12, 22, 22, 22, 22, 22, 12, 21]
		//];
		
		this.map = 
		[
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
		];
		//
		this.canvas.width  = this.cellWidth*this.map[0].length;
		this.canvas.height = this.cellHeight*this.map.length;

		this.player;
		this.player2;
		this.initPlayer();

		this.shoots;
		this.bullets = [];

		var self = this;
		this.timePassed = new Date().getTime();
		this.interval   = setInterval(function(){self.loop()},40); //Loop y cada cuanto tiempo debe actualizar.
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
		
		this.context.font = "bold 22px transformer"; //Estilo de letra y tamaño.

		this.context.fillStyle = "yellow"; //Para mostrar la vida.
		this.context.fillRect(50,15, vida*30, 25);
		this.context.fillRect(this.canvas.width-50,15, -vida*30, 25);

		this.context.fillStyle = "red";
		this.context.fillRect(50,15, this.player.life*30, 25);
		this.context.fillRect(this.canvas.width-50,15, -this.player2.life*30, 25);

		if(this.player.life*10 <= 20)
		{
			this.context.fillStyle = "black";
			this.context.fillText(this.player.life*10 + ".0", 55,36);
		}
		if(this.player2.life*10 <= 20)
		{
			this.context.fillStyle = "black";
			this.context.fillText(this.player2.life*10 + ".0", this.canvas.width-110,35);
		}
		if(this.player.life*10 > 20)
		{
			this.context.fillStyle = "black"; // Mostrar el numero de vida.
			this.context.fillText(this.player.life*10 + ".0", 60,33);
			this.context.fillStyle = "white"; 
			this.context.fillText(this.player.life*10 + ".0", 55,36);
		}
		if(this.player2.life*10 > 20)	
		{
			this.context.fillStyle = "black"; // Mostrar el numero de vida.
			this.context.fillText(this.player2.life*10 + ".0", this.canvas.width-110,33);
			this.context.fillStyle = "white"; // Mostrar el numero de vida.
			this.context.fillText(this.player2.life*10 + ".0", this.canvas.width-115,36);
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
		}

		World.prototype.gameOver = function()
		{
			if(this.player.life <= 0 || this.player2.life <= 0)
			{
				if(this.player.life <= 0)
					World.contadorPlayer2++;
				if(this.player2.life <= 0)
					World.contadorPlayer1++;

				return true;
			}
			return;
		}

		World.prototype.loop = function()
		{
			var that = this;
			var delta = (new Date().getTime()) - this.timePassed;
			this.timePassed = new Date().getTime();
			this.drawMap();
			this.drawScore(this.player.life, this.player2.life);
			this.drawCharacters();
			this.drawBullet();

			if(this.gameOver())
			{
				this.nextRound = function()
				{
					new World("canvas1");
				}

				clearInterval(this.interval);
				this.drawResults(World.contadorPlayer1, World.contadorPlayer2);
				setTimeout(this.nextRound, 3000);
			}
			else
			{
				this.moveCharacters(delta);
				this.moveShoots(delta);
			}
		};