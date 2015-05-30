
World.contadorPlayer1 = 0;
World.contadorPlayer2 = 0;

function World(idCanvas)
{

	this.canvas  = document.getElementById(idCanvas);
	this.context = this.canvas.getContext('2d');

	this.cellWidth  = 50;
	this.cellHeight = 50;

	this.allTiles = 
	[
	new Tile(this.cellWidth, this.cellHeight, true, Images.get("24")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("21")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("25")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("26")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("27")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("28")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("29")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("30")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("31")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("32")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("33")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("34")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("35")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("36")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("37")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("38")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("39")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("40")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("41")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("42")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("43")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("44")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("45")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("46")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("47")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("48")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("49")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("50")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("51")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("52")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("53")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("54")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("55")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("56")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("57")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("58")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("59")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("60")),
	new Tile(this.cellWidth, this.cellHeight, false, Images.get("61")),
		//39
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("62")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("63")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("64")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("65")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("66")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("67")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("68")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("69")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("70")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("71")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("72")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("73")),
		//51
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("74")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("75")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("76")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("77")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("78")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("79")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("80")),
		//58
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("81")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("82")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("83")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("84")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("85")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("86")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("87")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("88")),
		//66
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("89")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("90")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("91")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("92")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("93")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("94")),
		//72
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("95")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("96")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("97")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("98")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("99")),
		//77
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("100")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("101")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("102")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("103")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("104")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("105")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("106")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("107")),
		//85
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("108")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("109")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("110")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("111")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("112")),
		//90
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("113")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("114")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("115")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("116")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("117")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("118")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("119")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("120")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("121")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("122")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("123")),
		//101
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("124")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("125")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("126")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("127")),
		//105
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("128")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("129")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("130")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("131")),
		//109
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("132")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("133")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("134")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("135")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("136")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("137")),
		
		//115
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("138")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("139")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("140")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("141")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("142")),
		//120
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("143")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("144")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("145")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("146")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("147")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("148")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("149")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("150")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("151")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("152")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("153")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("154")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("155")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("156")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("157")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("158")),
		//136
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("159")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("160")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("161")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("162")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("163")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("164")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("165")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("166")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("167")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("168")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("169")),
		//147
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("170")),
		new Tile(this.cellWidth, this.cellHeight, false, Images.get("171")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("172")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("173")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("174")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("175")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("176")),
		new Tile(this.cellWidth, this.cellHeight, true, Images.get("177"))

		];



		this.map = [];
		if(World.contadorPlayer1 + World.contadorPlayer2 < 2){
			this.numMap = 1;
		}
		else
			this.numMap = 0;



		this.map[0] = 
		[
		[4, 9, 9, 9, 9, 9, 9, 9, 9, 13, 11, 14, 9, 9, 13, 9, 9, 9, 9, 14, 13, 13, 9, 9, 17],
		[5, 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18],
		[7, 0, 0, 54, 0, 0, 0, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 71, 69, 69, 0, 19],
		[7, 0, 0, 53, 0, 0, 0, 0, 0, 39, 40, 41, 0, 40, 41, 42, 0, 0, 0, 0, 70, 0, 0, 0, 20],
		[7, 3, 0, 0, 0, 0, 0, 0, 0, 43, 109, 110, 110, 110, 111, 44, 0, 0, 0, 0, 0, 0, 76, 0, 20],
		[7, 2, 0, 0, 0, 0, 62, 0, 0, 45, 112, 113, 114, 113, 115, 46, 0, 0, 74, 0, 0, 0, 0, 0, 20],
		[6, 0, 0, 0, 0, 0, 61, 0, 0, 114, 112, 114, 119, 114, 115, 114, 0, 0, 73, 0, 0, 0, 0, 0, 20],
		[6, 0, 0, 0, 0, 0, 61, 0, 0, 43, 112, 113, 114, 113, 115, 44, 0, 0, 72, 0, 0, 0, 0, 0, 19],
		[7, 0, 76, 0, 62, 0, 0, 0, 0, 45, 116, 117, 117, 117, 118, 46, 0, 0, 0, 0, 0, 0, 0, 0, 19],
		[7, 0, 0, 0, 61, 0, 0, 0, 0, 47, 48, 49, 0, 48, 49, 50, 0, 0, 0, 0, 0, 65, 0, 0, 20],
		[26, 0, 58, 59, 60, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 64, 0, 0, 20],
		[27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 20],
		[8, 12, 23, 22, 22, 22, 22, 22, 22, 22, 22, 22, 37, 16, 22, 22, 22, 12, 22, 22, 22, 22, 22, 12, 21]
		];


		this.map[1] =
		[     
		[ 4,  9,  9,  9,   9,   9,   9,  9,  9,   9,   9,   9,   9,  13,   11,  14,   9,   9,  13,    9,   9,   9,   9,  14, 13,  13,  9,  9, 17],
		[ 5,  0,  0, 80,   85,   64,  85, 64, 85,  64,  85,  64,  85,  64,   85,  64,  85,  64,  85,   87,  80,   136,   137,   137,  137,   137,  137,  138, 18],
		[ 7,  0,  0, 80,   149,   63,   149,  63,  149,  63,   149,  63,   149,  63,    149,  63,   149,  63,   149,   86,  80,   139,   140,   120,  121,   122,  140,  141, 19],
		[ 7,  0,  0,  0,   149,   149,   149,  149,  149,   149,   149,   149,   149,   149,    149,   149,   149,   149,   149,   149,  80,   139,   123,   124,  125,   126,  127,  141, 20],
		[ 7,  0,  0,  0,   149,   149,   149,  149,  149,   149,   149,   149,   149,   149,    149,   149,   149,   149,   149,   149,  150,   139,   128,   129,  130,   131,  132,  141, 20],
		[ 7,  0,  0,  80,   149,   149,   149,  149,  149,   149,   149,   149,   149,   149,    149,   149,   149,   149,   149,   149,  151,   139,   140,   133,  134,   135,  140,  141, 20],
		[ 7,  0,  0,  80,   149,   149,   149,  149,  149,   149,   149,   149,   149,   149,    149,   149,   149,   149,   149,   88,  80,   139,   140,   140,  140,   140,  140,  141, 20],
		[ 7,  0,  0,  80,   147,   148,   147,  149,  147,   148,   147,   149,   149,   149,    149,   149,   149,   149,   149,   88,  80,   142,   143,   143,  143,   143,  143,  144, 20],
		[ 7,  0,  0, 82,  83,  83,  83, 83, 83,  83,  83,  83,   0,   0,   83,  83,  83,  83,  83,   83,  83,  83,  83,  83, 83,  145, 146, 83, 20],
		[ 6,  0,  0,  0,   0,   0,   0,  0,  0,   0,   0,   0,   0,   0,    0,   0,   0,   0,   0,    0,   0,   0,   0,   0,  0,   0,  0,  0, 20],
		[ 6,  0,  0,  0,   0,   0,   0,  0,  0,   0,   0,   0,   0,   0,    0,   0,   0,   0,   0,    0,   0,   0,   0,   0,  0,   0,  0,  0, 20],
		[ 7,  0,  0, 77,  78,   78,   0,  0,  78,  78,  78,  0,   0,   78,   78,  79,  77,  78,  78,   78,  78,  78,  78,  78, 78,  78, 79,  0, 19],
		[ 7,  0,  0, 80,  97,   152,   152,  152,  90,  89,  92,  152,   152,   152,   94,  81,  80,  68,  66,   67,  66,  67,  66,  67, 66,  67, 81,  0, 20],
		[26,  0,  0, 80,  98,   152,   152,  152,  152,   100,  152,   152,   152,   152,   95,  81,  80, 100, 100,    152,   152, 100, 100,   152,  152,   100, 81,  0, 20],
		[27,  0,  0, 80,  99,   152,   152,  152,  152,   152,   152,   152,   152,   152,   96,  81,  80,   152,   152,    152,   152,   152,   152,   152,  152,   152, 81,  0, 20],
		[ 6,  105,  106, 80,   152,   152,  152,  152,   152,   152,   152,   152,   152,   152,    152,   152,   152,   152,   152,    152,   152,   152,   152,   152,  152,   152,  0,  0, 20],
		[ 6,  107,  108, 80,   152,   152,  152,  152,   152,   152,   152,   152,   152,   152,    152,   152,   152,   152,   152,    152,   152,   152,   152,   152,  152,   152,  0,  0, 19],
		[ 8, 12, 23, 22,  22,  22,  22, 22, 22,  22,  22,  22,  22,  22,   22,  22,  22,  16,  22,   22,  22,  12,  22,  22, 22,  22, 22, 12, 21]
		];



		this.canvas.width  = this.cellWidth*this.map[this.numMap][0].length;
		this.canvas.height = this.cellHeight*this.map[this.numMap].length;

		this.player;
		this.player2;
		this.initPlayer();

		this.shoots;
		this.bullets = [];

		var self = this;
		this.timePassed = new Date().getTime();
		this.interval   = setInterval(function(){self.loop()},10); //Loop y cada cuanto tiempo debe actualizar.
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

	return this.allTiles[this.map[this.numMap][y][x]].walk;
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
	var y = this.map[this.numMap].length;
	var x = this.map[this.numMap][0].length;

	for(var yi=0; yi<y; yi++)
		for(var xi=0; xi<x; xi++)
			this.allTiles[this.map[this.numMap][yi][xi]].draw(this.context, xi, yi);
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
			
			this.context.drawImage(Images.get("0"), this.canvas.width/2-250,this.canvas.height/2-150, 150, 150);
			this.context.drawImage(Images.get("1"), this.canvas.width/2+100,this.canvas.height/2-150, 150, 150);
			
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