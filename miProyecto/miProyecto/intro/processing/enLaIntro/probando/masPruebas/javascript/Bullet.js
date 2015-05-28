function Bullet(world, player, enemy)
{
	var t = Math.floor((Math.random()*2)+1);

	this.width     = 10; // Tamaño de la bala.
	this.height    = 10;
	this.velocity  = 0.015; // Velocidad de la bala.
	this.direction = player.direction; // Direccion.
	this.px        = player.x; // Posición de la bala.
	this.py        = player.y;
	this.used      = false; // Si colisiona con algo.
	this.who       = player; // Who shoots.
	this.enemy     = enemy; // Who is the enemy.
	this.damage    = Math.floor((Math.random()*3)+t);
}

Bullet.prototype.move = function(delta, world)
{
	var col = new Collision(this.px, this.py);
	
	if(this.used == false )
	{
		if(!col.validPosition(this) || this.detectPlayer()) // Si colisiona con objetos o enemigo.
		{
			this.used     = true;
			this.velocity = 0;
		}

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
};

Bullet.prototype.detectPlayer = function()
{

	if(parseInt(this.px) == parseInt(this.enemy.x) && parseInt(this.py) == parseInt(this.enemy.y))
	{
		this.enemy.life -= this.damage;
		if(this.enemy.life <=0)
			this.enemy.life = 0;
		//alert("Player1: " + world.player.life + "\nPlayer2: " + world.player2.life);
		return true;
	}
	
	return false;

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


