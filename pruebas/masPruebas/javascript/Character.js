function Character(world, width, height, x, y, sprite)
{
	this.world = world;

	this.width  = width;
	this.height = height;
	
	this.x = x;
	this.y = y;

	this.dx = 0;
	this.dy = 0;

	this.velocity = 0.003;

	this.sprite           = sprite;
	this.direction        = "down";
	this.spriteIndex      =  0;
	this.transitionSprite = 50;
	this.transition       =  0;
}