World.countPlayer1 = 0;
World.countPlayer2 = 0;
World.countRound = 0;
//World.timeCount = 3;

function World(idCanvas, numMap)
{

	this.canvas  = document.getElementById(idCanvas);
	this.context = this.canvas.getContext('2d');

	this.cellWidth  = 50;
	this.cellHeight = 50;

	this.allTiles = 
	[
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("ground6")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("ground3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("barrel1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("barrel2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline4")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline5")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline6")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline7")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline8")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline9")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline10")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline11")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline12")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline13")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline14")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline15")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline16")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline17")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline18")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline19")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline20")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline21")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline22")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline23")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline24")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline25")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline26")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline27")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline28")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline29")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline30")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline31")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline32")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline33")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline34")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("pipeline35")),
	//39
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square4")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square5")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square6")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square7")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square8")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square9")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square10")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square11")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("square12")),
	//51
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("box1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("box2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("stairs1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("stairs2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("stairs3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("weapon1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("weapon2")),
	//58
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table1")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("table2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table4")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table5")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("bed1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("bed2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("bed3")),
	//66
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("maquina1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("maquina2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("maquina3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("maquina4")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("maquina5")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("maquina6")),
	//72
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("screen1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("screen2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("screen3")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("ground7")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("box3")),
	//77
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground8")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground9")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground10")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground11")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground12")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground13")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground14")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("ground15")),
	//85
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table6")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table7")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table8")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table9")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table10")),
	//90
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table11")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table12")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table13")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table14")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table15")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table16")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table17")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table18")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table19")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table20")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("table21")),
	//101
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("baño1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("baño2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("baño3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("baño4")),
	//105
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("barriles1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("barriles2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("barriles3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("barriles4")),
	//109
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport1")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport2")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport3")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport4")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport5")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport6")),

	//115
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport7")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport8")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport9")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport10")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHeliport11")),
	//120
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion2")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion3")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion4")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion5")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion6")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion7")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion8")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion9")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion10")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion11")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion12")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion13")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion14")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion15")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("mesaReunion16")),
	//136
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra1")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra2")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra3")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra4")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra5")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra6")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra7")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra8")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra9")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("escaleras1")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("escaleras2")),
	//147
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("comedor1")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("comedor2")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("sueloHabitacion")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("escaleras3")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("escaleras4")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra10")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra11")),
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("alfombra12"))
	];


if(World.countRound == 20)
	location.reload(true);

	if(World.numMap == 0 && World.countRound == 5)
	{
		World.countPlayer1 = 0;
		World.countPlayer2 = 0;
		World.countRound = 0;
		World.numMap = 1;
	}
	else if(World.numMap == 1 && World.countRound == 5)
	{
		World.countPlayer1 = 0;
		World.countPlayer2 = 0;
		World.countRound = 0;
		World.numMap = 0;
	}
	else
		World.numMap = numMap;


	this.map = [];

	this.map[0] = 
	[
	[ 4,   9,   9,   9,  9,  9,  9,  9,  9,  13,  11,  14,   9,   9,  13,   9,  9,  9,  9, 14,  13, 13,  9,  9, 17],
	[ 5,  75,   0,  55,  0, 75,  0, 75,  0,  75,   0,  75,  35,  75,  75,  75,  0, 75,  0, 75,   0, 75,  0, 75, 18],
	[ 7,  75,   0,  54,  0, 75,  0, 15,  0,  75,   0,  75,   0,  75,  75,  75,  0, 76,  0, 75,  71, 69, 69, 75, 19],
	[ 7,  75,   0,  53,  0, 75,  0, 75,  0,  39,  40,  41, 114,  40,  41,  42,  0, 75,  0, 75,  70, 75,  0, 75, 20],
	[ 7,  75,   0,  75,  0, 75,  0, 75,  0,  43, 109, 110, 110, 110, 111,  44,  0, 75,  0, 75,   0, 75, 56, 75, 20],
	[ 7,  75,   0,  75,  0, 75,  3, 75,  0,  45, 112, 113, 114, 113, 115,  46,  0, 75, 74, 75,   0, 75,  0, 65, 20],
	[ 6,  75,   0,  75,  0, 75,  3, 75,  0, 114, 112, 114, 119, 114, 115, 114,  0, 75, 73, 75,   0, 75,  0, 75, 20],
	[ 6,  85,   0,  75,  0, 75,  2, 75,  0,  43, 112, 113, 114, 113, 115,  44,  0, 75, 72, 75,   0, 75,  0, 75, 19],
	[ 7, 152, 100, 152, 62, 75,  0, 75,  0,  45, 116, 117, 117, 117, 118,  46,  0, 75,  0, 75,   0, 75,  0, 75, 19],
	[ 7, 152, 152, 152, 61, 75,  0, 75,  0,  47,  48,  49, 114,  48,  49,  50,  0, 75,  0, 75,   0, 38,  0, 75, 20],
	[26, 152,  58,  59, 92, 75,  0, 52,  0,  75,   0,  75,   0,  75,   0,  75,  0, 51,  0, 75,   0, 65,  0, 75, 20],
	[27,  75,   0,  75,  0, 75,  0, 75,  0,  75,   0,  75,  38,  75,   0,  75,  0, 75,  0, 75,   0, 57,  0, 75, 20],
	[ 8,  12,  23,  22, 22, 22, 22, 22, 22,  22,  22,  22,  37,  16,  22,  22, 22, 12, 22, 22,  22, 22, 22, 12, 21]
	];


	this.map[1] =
	[     
	[ 4,   9,   9,   9,   9,   9,   9,   9,   9,   9,   9,   9,   9,  13,  11,  14,   9,   9,  13,   9,   9,   9,   9,  14,  13,  13,   9,   9, 17],
	[ 5, 153, 153,  80,  85,  64,  85,  64,  85,  64,  85,  64,  85,  64,  85,  64,  85,  87,  80, 136, 137, 137, 137, 137, 137, 137, 137, 138, 18],
	[ 7, 153, 153,  80, 149,  63, 149,  63, 149,  63, 149,  63, 149,  63, 149,  63, 149,  86,  80, 139, 140, 140, 120, 121, 122, 140, 140, 141, 19],
	[ 7, 153, 153, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149,  80, 139, 140, 123, 124, 125, 126, 127, 140, 141, 20],
	[ 7, 153, 153, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 150, 139, 140, 128, 129, 130, 131, 132, 140, 141, 20],
	[ 7, 153, 153,  80, 149, 147, 149, 149, 147, 147, 147, 149, 149, 149, 149, 149, 149, 149, 151, 139, 140, 140, 133, 134, 135, 140, 140, 141, 20],
	[ 7, 153, 153,  80, 147, 148, 147, 149, 148, 148, 148, 149, 149, 149, 103,   1,   1,  88,  80, 139, 140, 140, 140, 140, 140, 140, 140, 141, 20],
	[ 7, 153, 153,  80, 149, 147, 149, 149, 147, 147, 147, 149, 149, 149, 102,   1,   1,  88,  80, 142, 143, 143, 143, 143, 143, 143, 143, 144, 20],
	[ 7, 153, 153,  82,  83,  83,  83,  83,  83,  83,  83,  83, 149, 149,  83,  83,  83,  83,  83,  83,  83,  83,  83,  83,  83, 145, 146,  83, 20],
	[ 6, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 20],
	[ 6, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 20],
	[ 7, 153,  77,  78,  78, 152, 152,  78,  78,  78, 152, 152,  78,  78,  79,  77,  78,  78,  78,  78,  78,  78,  78,  78,  78,  79, 153, 153, 19],
	[ 7, 153,  80,  97, 152, 152, 152,  90,  89,  92, 152, 152, 152,  94,  81,  80,  68,  66,  67,  66,  67,  66,  67,  66,  67,  81, 153, 153, 20],
	[26, 153,  80,  98, 152, 152, 152, 152, 100, 152, 152, 152, 152,  95,  81,  80, 100, 100, 152, 152, 100, 100, 152, 152, 100,  81, 153, 153, 20],
	[27, 153,  80,  99, 152, 152, 152, 152, 152, 152, 152, 152, 152,  96,  81,  80, 152, 152, 152, 152, 152, 152, 152, 152, 152,  81, 153, 153, 20],
	[ 6, 153, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 153, 153, 20],
	[ 6, 153, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 153, 153, 19],
	[ 8,  12,  23,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  16,  22,  22,  22,  12,  22,  22, 22,   22,  22,  12, 21]
	];

	this.canvas.width  = this.cellWidth*this.map[World.numMap][0].length;
	this.canvas.height = this.cellHeight*this.map[World.numMap].length;

	this.player;
	this.player2;
	this.initPlayer();

	this.shoots;
	this.bullets = [];

	if(World.numMap == 0)
	{
		var positionSecrets = 
		[
		[3, 10],
		[12, 1],
		[23, 4]]
	}

	var self = this;
	this.init = true;
	this.timePassed = new Date().getTime();
	emp=new Date();

	/*World.prototype.countdown = function()
	{
		this.context.font = "140px transformer";	

		if(World.timeCount == 0)
		{
			this.context.fillStyle = "black";
			this.context.fillText("GO!", this.canvas.width/2-80, this.canvas.height/2+20);
			this.context.fillStyle = "yellow";
			this.context.fillText("GO!", this.canvas.width/2-100, this.canvas.height/2);
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
	}
	this.drawCount = function()
	{
		self.drawMap();
		self.countdown();
		self.drawScore(self.player.life, self.player2.life);
		self.drawCharacters();
		self.drawBullet();
	}

	if(this.countdown())
	{
		clearInterval(this.interval);
		setInterval(this.drawCount, 1000);
	}*/

			this.interval   = setInterval(function(){self.loop()},30); //Loop y cada cuanto tiempo debe actualizar.
		}

		World.prototype.initPlayer = function()
		{
			var x = Math.floor((Math.random()*2)+1);
		var y = Math.floor((Math.random()*3)+1); //Posicion aleatoria en el mapa.

		if(World.numMap == 0)
		{
			var z = Math.floor((Math.random()*2)+22);
			var t = Math.floor((Math.random()*3)+9);
		}
		else
		{
			var z = Math.floor((Math.random()*2)+26);
			var t = Math.floor((Math.random()*3)+14);
		}

		this.player  = new Player(this, 50, 50, x+0.5, y+0.5, "player1");
		this.player2 = new Player(this, 50, 50, /*z+0.5, t+0.5*/ 2.5, 5.5, "player2");
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

	return this.allTiles[this.map[World.numMap][y][x]].walk;
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
	var y = this.map[World.numMap].length;
	var x = this.map[World.numMap][0].length;

	for(var yi=0; yi<y; yi++)
		for(var xi=0; xi<x; xi++)
			this.allTiles[this.map[World.numMap][yi][xi]].draw(this.context, xi, yi);
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
		this.context.fillText(World.countPlayer1, 469, 40);
		this.context.fillStyle = "white";
		this.context.fillText(World.countPlayer1, 465, 40);

		this.context.fillStyle = "black";
		this.context.fillText(World.countPlayer2, 519, 40);
		this.context.fillStyle = "white";
		this.context.fillText("-", 495, 35);
		this.context.fillText(World.countPlayer2, 515, 40);

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
			this.context.fillText(player1, this.canvas.width/2-180, this.canvas.height/2+120);
			this.context.fillStyle = "orange";
			this.context.fillText(player1, this.canvas.width/2-200, this.canvas.height/2+125);

			this.context.fillStyle = "black";
			this.context.fillText(player2, this.canvas.width/2+163, this.canvas.height/2+120);
			this.context.fillStyle = "orange";
			this.context.fillText(player2, this.canvas.width/2+143, this.canvas.height/2+125);			
		}

		World.prototype.gameOver = function()
		{

			if(this.player.life <= 0)
			{
				this.player.life = 0;
				World.countPlayer2++;
				World.countRound++;
				return true;
			}
			if(this.player2.life <= 0)
			{
				World.countRound++;
				this.player2.life = 0;
				World.countPlayer1++;
				return true;
			}

			return;
		}

		World.prototype.drawTime = function()
		{

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

		World.prototype.finishTime = function()
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

     	   if (mn == 1 && sg >= 30)
     	   	if(this.player.life > this.player2.life)
     	   	{
     	   		World.countPlayer1++;
     	   		World.countRound++;
     	   		return true;
     	   	}
     	   	else if(this.player.life < this.player2.life)
     	   	{
     	   		World.countPlayer2++;
     	   		World.countRound++;
     	   		return true;
     	   	}
     	   	else
     	   	{
     	   		World.countRound++;
     	   		return true;
     	   	}
     	   	return;
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

     	World.prototype.cantSee = function()
     	{
     		if(World.numMap == 0)
     		{
     			//this.allTiles[this.map[World.numMap][yi][xi]].draw(this.context, xi, yi);
     				this.allTiles[this.map[World.numMap][10][3]].draw(this.context, 3, 10);
     				this.allTiles[this.map[World.numMap][4][23]].draw(this.context, 23, 4);

     		}
     	}

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
     		}

     		if(this.countdown())
     		{
     			clearInterval(this.interval);
     			setInterval(this.drawCount, 1000);
     		}
     		*/
     		this.drawMap();
     		this.drawScore(this.player.life, this.player2.life);
     		this.drawCharacters();
     		this.drawBullet();

     		if(this.gameOver() || this.finishTime())
     		{
     			this.nextRound = function()
     			{
     				new World("canvas1", World.numMap);
     			}

     			clearInterval(this.interval);
     			this.drawResults(World.countPlayer1, World.countPlayer2);
     			setTimeout(this.nextRound, 3000);
     		}
     		else
     		{
     			this.moveCharacters(delta);
     			this.moveShoots(delta);
     			this.drawTime();
     			this.cantSee();
     		}
     	};