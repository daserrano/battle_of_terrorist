function Player(world, width, height, x, y)
{
	Character.call(this, world, width, height, x, y, Sprites.get("player")); //Llama al método personaje para que tenga los mismos atributos.
	this.up    = false;
	this.down  = false;
	this.right = false;
	this.left  = false;
} 