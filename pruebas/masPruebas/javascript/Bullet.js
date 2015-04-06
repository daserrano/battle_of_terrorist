function Bullet(world, player, enemy)
{
	var t = Math.floor((Math.random()*2));

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
		if(!col.validPosition(this) || this.detectPlayer())
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
	/*	
	var touchEnemy   = 0.1; //Cuando penetra en el enemigo.
	var widthThis    = this.width/(2*world.cellWidth)*(1-touchEnemy);
	var heightThis   = this.height/(2*world.cellHeight)*(1-touchEnemy);
	var widthPlayer  = world.player.width/(2*world.cellWidth)*(1-touchEnemy);
	var heightPlayer = world.player.height/(2*world.cellHeight)*(1-touchEnemy);
	var widthPlayer2  = world.player2.width/(2*world.cellWidth)*(1-touchEnemy);
	var heightPlayer2 = world.player2.height/(2*world.cellHeight)*(1-touchEnemy);
	*/

	/*
		if (objects[x].collidableWith === obj[y].type &&
		(objects[x].x < obj[y].x + obj[y].width &&
			objects[x].x + objects[x].width > obj[y].x &&
			objects[x].y < obj[y].y + obj[y].height &&
			objects[x].y + objects[x].height > obj[y].y)) {
		objects[x].isColliding = true;
		obj[y].isColliding = true;
		*/

		/*if((this.px > world.player2.x-widthPlayer) && 
			(parseInt(this.py) == parseInt(world.player2.y) &&)
			return false;
			*/
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


