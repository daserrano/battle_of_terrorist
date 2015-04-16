function Player(world, width, height, x, y, id)
{
	Character.call(this, world, width, height, x, y, Sprites.get(id)); //Llama al método personaje para que tenga los mismos atributos.
	this.up    = false;
	this.down  = false;
	this.right = false;
	this.left  = false;
	this.shoot = false;
} 

Player.prototype = new Character;

Player.prototype.move = function(delta)
{
	this.dx = 0;
	this.dy = 0;

	if(this.up)
		this.dy -= 1;
	if(this.down)
		this.dy += 1;
	if(this.right)
		this.dx += 1;
	if(this.left)
		this.dx -= 1;

	Character.prototype.move.call(this, delta);
};

Player.prototype.shooting = function(delta)
{
	this.bx = 0;
	this.by = 0;

	if(this.shoot)
	{
		if(this.up)
			this.bx -= 1;
		if(this.down)
			this.by += 1;
		if(this.right)
			this.bx += 1;
		if(this.left)
			this.bx -= 1;
	}

	Character.prototype.shooting.call(this, delta);
};