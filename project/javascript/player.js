function Player(world, width, height, x, y, id)
{
	Character.call(this, world, width, height, x, y, Sprites.get(id)); //Llama al método personaje para que tenga los mismos atributos.
	this.up    = false;
	this.down  = false;
	this.right = false;
	this.left  = false;
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