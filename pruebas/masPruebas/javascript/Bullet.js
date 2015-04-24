function Bullet(world, player)
{
	this.width  = 10; // Tamaño de la bala.
	this.height = 10;
	this.velocity  = 0.025; // Velocidad de la bala.
	this.direction = player.direction; // Direccion.
	this.px = world.player.x; // Posición de la bala.
	this.py = world.player.y;

	//alert(world.player.x + " " + world.player.y + " " + this.px + " " + this.py);

/*	if(this.direction == "right" || this.direction == "left")
		this.py -= 5;
	if(this.direction == "left")
		this.px -= 5;
	if(this.direction == "down")
		this.px -= 15;
	if(this.direction == "up")
		this.py -= 20;*/

}

Bullet.prototype.move = function(delta)
{
	var colX = new Collision(this.px, world.player.y);
	var colY = new Collision(world.player.x, this.py);

	if(!colX.validPosition(this, this.px, world.player.y))
		//px = this.x;
	if(!colY.validPosition(this, world.player.x, this.py))
		//py = this.y;
alert(this.py + " " + this.px);	
	if(this.direction == "up")
		this.py -= this.velocity*delta;
	else if(this.direction == "down")
		this.py += this.velocity*delta;
	else if(this.direction == "right")
		this.px += this.velocity*delta;
	else if(this.direction == "left")
		this.px -= this.velocity*delta;

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
		context.fillRect(this.px, this.py, this.width, this.height);
		
	context.restore();
}


