function Character(world, width, height, x, y, sprite)
{
	this.world = world;

	this.width  = width;
	this.height = height;
	
	this.x = x;
	this.y = y;

	this.dx = 0;
	this.dy = 0;

	this.velocity  = 0.003;

	this.sprite           = sprite;
	this.direction        = "down";
	this.spriteIndex      =  0; // Indice del sprite.
	this.transitionSprite = 70; // Tiempo que transcurre entre sprite y sprite.
	this.transition       =  0; // Tiempo que transcurre.
}

Character.prototype.move = function(delta, other)
{
	var newDirection = "";
	if(this.dx == 0 && this.dy == 0)
		return;

	var px = this.x+this.dx*this.velocity*delta;
	var py = this.y+this.dy*this.velocity*delta;

    //Colisiones.
    var colX = new Collision(px, this.y);
    var colY = new Collision(this.x, py);

    if(!colX.validPosition(this, px, this.y))
    	px = this.x;
    if(!colY.validPosition(this, this.x, py))
    	py = this.y;

	if(this.x==px && this.y==py) //Si no hay movimiento.
		return;

	if(this.collisionPlayer(delta, other)) // Colisiones entre los jugadores.
	{
		if(this.x < other.x)
			px = this.x-0.01;
		if(this.y < other.y)
			py = this.y-0.01;
		if(other.x < this.x)
			px = this.x+0.01;
		if(other.y < this.y)
			py = this.y+0.01;
	}

	this.x = px; //Se cambian las nuevas coordenadas.
	this.y = py;

	if(this.dy < 0)
		newDirection = "up";
	if(this.dy > 0)
		newDirection = "down";
	if(this.dx > 0)
		newDirection = "right";
	if(this.dx < 0)
		newDirection = "left";

	if(this.direction != newDirection)
	{
		this.transition  = 0; 
		this.spriteIndex = 0; //Por que imagen empieza.
		this.direction   = newDirection;
	}
	this.transition += delta;

	if(this.transition>this.transitionSprite)
	{
		this.transition = 0;
		this.spriteIndex = (this.spriteIndex + 1) % this.sprite.getNumSprites(newDirection); // Numero de sprites por direccion.
	}
};

Character.prototype.collisionPlayer = function(delta, other)
{
	var touchEnemy  = 0.1;//Cuando penetra en el enemigo.
	var widthThis   = this.width/(2*this.world.cellWidth)*(1-touchEnemy);
	var heightThis  = this.height/(2*this.world.cellHeight)*(1-touchEnemy);
	var widthOther  = other.width/(2*this.world.cellWidth)*(1-touchEnemy);
	var heightOther = other.height/(2*this.world.cellHeight)*(1-touchEnemy);

	if(this.x + widthThis < other.x )
		return false;
	if(this.y + heightThis < other.y - heightOther)
		return false;
	if(this.x - widthThis > other.x + widthOther)
		return false;
	if(this.y - heightThis > other.y + heightOther)
		return false;

	return true;

	//this.collisionatedPlayer(other);
	//other.collisionatedPlayer(this);
};

/*Character.prototype.collisionatedPlayer = function(other)
{
	//alert("this.x: " + this.x + " this.y: " + this.y);
	this.x = 3.5;
	this.y = 4.5;
	other.x = 12.5;
	other.y = 2.5;
//alert("this.x: " + this.x + " this.y: " + this.y + "\nother.x: " + other.x + " other.y: " + other.y);
}*/

Character.prototype.draw = function(context)
{
	context.save();
	context.translate(this.x*world.cellWidth, this.y*world.cellHeight);
	this.sprite.draw(context, this.width, this.height, this.direction, this.spriteIndex);

	context.restore();
};