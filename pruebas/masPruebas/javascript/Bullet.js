function Bullet(world, player)
{
	var t = Math.floor((Math.random()*2));

	this.width     = 10; // Tamaño de la bala.
	this.height    = 10;
	this.velocity  = 0.015; // Velocidad de la bala.
	this.direction = player.direction; // Direccion.
	this.px        = player.x; // Posición de la bala.
	this.py        = player.y;
	this.used      = false; // Si colisiona con algo.
	this.pxi = player.x;
	this.pyi = player.y;
	this.damage = Math.floor((Math.random()*3)+t);	

}

Bullet.prototype.move = function(delta)
{
	var colX = new Collision(this.px, this.py);
	//var colY = new Collision(this.px, this.py);
	
	if(this.used == false )
	{
		if(!colX.validPosition(this, this.px, this.py))
		{
			this.used     = true;
			this.velocity = 0;
			this.width    = 0;
			this.height   = 0;
		}

		/*if(!colY.validPosition(this, this.px, this.py))
		this.used = true;*/

//Dependiendo de la direccion la bala va en una dirección o va en otra.	
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
		//context.drawImage(Images.get("bulletMain"), ((this.pxi+0.3)*world.cellWidth), (this.pyi-0.1)*world.cellHeight, this.width, this.height);
		context.drawImage(Images.get("bulletRight"), (this.px+0.3)*world.cellWidth, (this.py-0.1)*world.cellHeight, this.width, this.height);
	}
	if(this.direction == "down")
	{
		//context.drawImage(Images.get("bulletMain"), ((this.pxi-0.35)*world.cellWidth), (this.pyi+0.15)*world.cellHeight, this.width, this.height);
		context.drawImage(Images.get("bulletDown"), (this.px-0.15)*world.cellWidth, (this.py+0.15)*world.cellHeight, this.width, this.height);
	}
	if(this.direction == "left")
	{
		//context.drawImage(Images.get("bulletMain"), ((this.pxi+0.3)*world.cellWidth), (this.pyi-0.1)*world.cellHeight, this.width, this.height);
		context.drawImage(Images.get("bulletLeft"), (this.px-0.3)*world.cellWidth, (this.py-0.1)*world.cellHeight, this.width, this.height);
	}
	if(this.direction == "up")
	{
		//context.drawImage(Images.get("bulletMain"), ((this.pxi+0.3)*world.cellWidth), (this.pyi-0.1)*world.cellHeight, this.width, this.height);
		context.drawImage(Images.get("bulletUp"), this.px*world.cellWidth, (this.py-0.4)*world.cellHeight, this.width, this.height);
	}
	context.restore();
}


