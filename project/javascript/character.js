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

Character.prototype.move = function(delta)
{
	var newDirection = "";
	if(this.dx == 0 && this.dy == 0)
		return;

	var px = this.x+this.dx*this.velocity*delta;
	var py = this.y+this.dy*this.velocity*delta;

	var colX = new Collision(px, this.y);
	var colY = new Collision(this.x, py);

	if(!colX.validPosition(this, px, this.y))
		px = this.x;
	if(!colY.validPosition(this, this.x, py))
		py = this.y;

	if(this.x==px && this.y==py) //Si no hay movimiento.
		return;

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

Character.prototype.draw = function(context)
{
	context.save();
	context.translate(this.x*world.cellWidth, this.y*world.cellHeight);
	this.sprite.draw(context, this.width, this.height, this.direction, this.spriteIndex);

	context.restore();
};