function Bullet(world, player)
{
	this.width  = 10; // Tamaño de la bala.
	this.height = 10;
	this.velocity  = 0.5; // Velocidad de la bala.
	this.direction = player.direction; // Direccion.

	this.px = player.x*world.cellWidth; // Posición de la bala.
	this.py = player.y*world.cellHeight;

	if(this.direction == "right" || this.direction == "left")
		this.py -=5;
	if(this.direction == "left")
		this.px -=5;
	if(this.direction == "down")
		this.px -=15;
	if(this.direction == "up")
		this.py -=5;

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
		this.px -= 1*this.velocity*delta;

};

Bullet.prototype.draw = function(context)
{

	context.save();
	//this.sprite.drawBullet(context, this.width, this.height, this.direction);
	//context.drawImage(Sprites.get("bulletRight"), this.px, this.py);
	//context.fillRect(x,y,anchura,altura)
	//t.translate(this.x*world.cellWidth, this.y*world.cellHeight);

	//world.sprite.drawBullet(context, this.width, this.height, this.direction);
		context.fillRect(this.px, this.py, this.width, this.height);
		

	context.restore();
}


