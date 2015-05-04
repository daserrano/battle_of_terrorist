function Bullet(world, player)
{
	this.width     = 10; // Tamaño de la bala.
	this.height    = 10;
	this.velocity  = 0.025; // Velocidad de la bala.
	this.direction = player.direction; // Direccion.
	this.px        = player.x; // Posición de la bala.
	this.py        = player.y;
	this.used      = false; // Si colisiona con algo.
	//this.pxi = player.x;
	//this.pyi = player.y;
	//this.player    = player;

//alert(this.px + " " + this.py);
	//alert(world.player.x + " " + world.player.y + " " + this.px + " " + this.py);

//Esto da error.
/*	if(this.direction == "right" || this.direction == "left")
	{
		this.py -= 0.20;
		this.px -= 0.20;
	}
	if(this.direction == "down")
		this.px -= 0.35;
	if(this.direction == "up")
		this.py -= 0.20;*/
}

Bullet.prototype.move = function(delta)
{
	var colX = new Collision(this.px, this.py);
	var colY = new Collision(this.px, this.py);
	if(this.used == false )
	{
		if(!colX.validPosition(this, this.px, this.py))
		{
			this.used = true;
			this.px = 0; //Mirar esto de otra forma de hacer.
			this.py = 0;
			//canvas.width = canvas.width;
			//world.context.clearRect(0, 0, canvas.width, canvas.height);
		}
		if(!colY.validPosition(this, this.px, this.py))
			this.used = true;

//alert(this.py + " " + this.px);	
if(this.direction == "up")
	this.py -= this.velocity*delta;
if(this.direction == "down")
	this.py += this.velocity*delta;
if(this.direction == "right")
	this.px += this.velocity*delta;
if(this.direction == "left")
	this.px -= this.velocity*delta;
}
	//alert("px: " + px + " py: " + py);

};

Bullet.prototype.draw = function(context)
{

	context.save();
	//context.drawImage(Images.get("bulletMain"), this.pxi*world.cellWidth, this.pyi*world.cellHeight, this.width, this.height);
	if(this.direction == "right")
	{
		context.drawImage(Images.get("bulletRight"), this.px*world.cellWidth, this.py*world.cellHeight, this.width, this.height);
	}
	if(this.direction == "down")
		context.drawImage(Images.get("bulletDown"), this.px*world.cellWidth, this.py*world.cellHeight, this.width, this.height);
	if(this.direction == "left")
		context.drawImage(Images.get("bulletLeft"), this.px*world.cellWidth, this.py*world.cellHeight, this.width, this.height);
	if(this.direction == "up")
		context.drawImage(Images.get("bulletUp"), this.px*world.cellWidth, this.py*world.cellHeight, this.width, this.height);

	context.restore();
}


