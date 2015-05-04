function Bullet(world, player)
{
	this.width     = 10; // Tamaño de la bala.
	this.height    = 10;
	this.velocity  = 0.025; // Velocidad de la bala.
	this.direction = player.direction; // Direccion.
	this.px        = player.x; // Posición de la bala.
	this.py        = player.y;
	this.used      = false; // Si colisiona con algo.
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
	//this.sprite.drawBullet(context, this.width, this.height, this.direction);
	//context.drawImage(Sprites.get("bulletRight"), this.px, this.py);
	//context.fillRect(x,y,anchura,altura)
	//t.translate(this.x*world.cellWidth, this.y*world.cellHeight);

	//world.sprite.drawBullet(context, this.width, this.height, this.direction);
	context.translate(this.px*world.cellWidth, this.py*world.cellHeight);

	//context.drawImage(Sprites.get("bulletRight"), this.px, this.py, this.width, this.height);

	context.fillRect(this.px, this.py, this.width, this.height);

	context.restore();
}


