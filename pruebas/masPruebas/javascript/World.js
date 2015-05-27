World.contadorPlayer1 = 0;
World.contadorPlayer2 = 0;
World.timeCount = 3;

function World(idCanvas)
{

	this.canvas  = document.getElementById(idCanvas);
	this.context = this.canvas.getContext('2d');

	this.cellWidth  = 50;
	this.cellHeight = 50;

	this.allTiles = 
	[
	new Tile(this.cellWidth, this.cellHeight, true,  Images.get("ground6")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("barrel1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("barrel2"))
	];

	this.map = 
	[
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
	[1, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
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
	this.init = true;
	this.timePassed = new Date().getTime();
	emp=new Date();

	World.prototype.countdown = function()
	{
		this.context.font = "140px transformer";	

		if(World.timeCount == 0)
		{
			this.context.fillStyle = "black";
			this.context.fillText("GO!", this.canvas.width/2-80, this.canvas.height/2+20);
			this.context.fillStyle = "yellow";
			this.context.fillText("GO!", this.canvas.width/2-100, this.canvas.height/2);
			this.init = false;
			return true;
		}
		else
		{
			this.context.fillStyle = "green";
     			this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
     			this.context.fillStyle = "black";
     			this.context.fillText(World.timeCount, this.canvas.width/2-20, this.canvas.height/2+20);
     			this.context.fillStyle = "yellow";
     			this.context.fillText(World.timeCount, this.canvas.width/2-40, this.canvas.height/2);
     			World.timeCount--;

     			return true;
     		}
     	}

     	if(this.init == true)
     		this.interval = setInterval(function(){self.countdown()}, 1000);

     	else
		this.interval   = setInterval(function(){self.loop()},30); //Loop y cada cuanto tiempo debe actualizar.
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
		
		this.context.font = "bold 40px transformer"; //Estilo de letra y tamaño.

		this.context.drawImage(Images.get("team1"), 400, 0, 50, 50);
		this.context.drawImage(Images.get("team2"), 550, 5, 45, 45);

		//Puntuacion de ambos jugadores.
		this.context.fillStyle = "black";
		this.context.fillText(World.contadorPlayer1, 469, 40);
		this.context.fillStyle = "white";
		this.context.fillText(World.contadorPlayer1, 465, 40);

		this.context.fillStyle = "black";
		this.context.fillText(World.contadorPlayer2, 519, 40);
		this.context.fillStyle = "white";
		this.context.fillText("-", 495, 35);
		this.context.fillText(World.contadorPlayer2, 515, 40);

		this.context.font = "bold 22px transformer"; //Estilo de letra y tamaño.

		//Vida de los jugadores.
		this.context.fillStyle = "yellow"; 
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

			if(this.player.life <= 0)
			{
				this.player.life = 0;
				World.contadorPlayer2++;
				return true;
			}
			if(this.player2.life <= 0)
			{
				this.player2.life = 0;
				World.contadorPlayer1++;
				return true;
			}

			return;
		}

		World.prototype.drawTime = function()
		{

			now = new Date();
        //tiempo del crono (cro) = fecha instante (actual) - fecha inicial (emp)	
        cro=now-emp;
    	 cr=new Date(); //paso el num. de milisegundos a objeto fecha.	
    	 cr.setTime(cro);
    	 cs=cr.getMilliseconds();
    	cs=cs/10; //paso a centésimas de segundo.	
     	cs=Math.round(cs); //redondear las centésimas	
     	sg=cr.getSeconds();  	
     	mn=cr.getMinutes(); 

     	   //poner siempre 2 cifras en los números			 
     	   if (cs<10)
     	   	cs="0"+cs;
     	   if (sg<10) 
     	   	sg="0"+sg;
     	   if (mn<10) 
     	   	mn="0"+mn; 

     	   this.context.font = "40px transformer";	

     	   this.context.fillStyle = "black";
     	   this.context.fillText(mn + "." + sg + "." + cs, 685, 40);

     	   if(mn == 1 && sg >= 25)
     	   	this.context.fillStyle = "red";
     	   else if(mn == 1 && sg>= 15)
     	   	this.context.fillStyle = "yellow";
     	   else
     	   	this.context.fillStyle = "white";

     	   this.context.fillText(mn + "." + sg + "." + cs, 680, 40);
     	}

     	/*World.prototype.countdown = function()
     	{
     		this.context.font = "140px transformer";	

     		if(World.timeCount == 0)
     		{
     			this.context.fillStyle = "black";
     			this.context.fillText("GO!", this.canvas.width/2-80, this.canvas.height/2+20);
     			this.context.fillStyle = "yellow";
     			this.context.fillText("GO!", this.canvas.width/2-100, this.canvas.height/2);
     			this.init = false;
     			return false;
     		}
     		else
     		{
     			this.context.fillStyle = "black";
     			this.context.fillText(World.timeCount, this.canvas.width/2-20, this.canvas.height/2+20);
     			this.context.fillStyle = "yellow";
     			this.context.fillText(World.timeCount, this.canvas.width/2-40, this.canvas.height/2);
     			World.timeCount--;

     			return true;
     		}
     	}*/

     	World.prototype.loop = function()
     	{
     		var that = this;
     		var delta = (new Date().getTime()) - this.timePassed;
     		this.timePassed = new Date().getTime();

     		/*var time = function()
     		{
     			that.drawTime();
     		}*/

     		/*this.drawCount = function()
     		{
     			that.drawMap();
     			that.drawScore(that.player.life, that.player2.life);
     			that.drawCharacters();
     			that.drawBullet();
     			that.countdown();
     		}*/

     		/*if(this.countdown())
     		{
     			clearInterval(this.interval);
     			setInterval(this.drawCount, 1000);
     		}*/

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
     			this.drawTime();
     		}
     	};