function Bullet(world)
{
	this.world = world;

	this.width  = 10; // Tamaño de la bala.
	this.height = 5;

	this.px = 100/*world.player.x*/; // Posición de la bala.
	this.py = 150/*world.player.y*/;

	this.velocity  = 1; // Velocidad de la bala.
	this.direction = world.player.direction; // Direccion.
}

Bullet.prototype.move = function(delta)
{
	if(this.direction == "up")
		this.py -= 1*this.velocity*delta;
	else if(this.direction == "down")
		this.py += 1*this.velocity*delta;
	else if(this.direction == "right")
		this.px += 1*this.velocity*delta;
	else if(this.direction == "left")
		this.px -= 1*this.velocity*delta	;


};

Bullet.prototype.draw = function(context)
{
	context.save();
	//this.sprite.drawBullet(context, this.width, this.height, this.direction);
	//context.drawImage(Sprites.get("bulletRight"), this.px, this.py);
	//context.fillRect(x,y,anchura,altura)
	context.fillRect(this.px, this.py, this.width, this.height);
}


