function Player(world, width, height, x, y)
{
	Character.call(this, world, width, height, x, y, Sprites.get("player"));
	this.up    = false;
	this.down  = false;
	this.right = false;
	this.left  = false;
} 