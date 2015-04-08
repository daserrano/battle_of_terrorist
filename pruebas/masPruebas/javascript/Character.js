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

Character.prototype.validPosition = function(px, py)
{
	var width  = this.width/(2*world.cellWidth);
	var height = this.height/(2*world.cellHeight);

	if(!world.cellWalked(px-width, py-height))
		return false;
	if(!world.cellWalked(px+width, py-height))
		return false;
	if(!world.cellWalked(px-width, py-height))
		return false;
	if(!world.cellWalked(px+width, py+height))
		return false;

	return true;

}; //Here 08/04.

Character.prototype.move = function(delta)
{
	var newDirection = "";
	if(this.dx == 0 && this.dy == 0)
		return;

	var px = this.x+this.dx*this.velocity*delta;
	var py = this.y+this.dy*this.velocity*delta;

	if(!this.validPosition(px, this.y))
		px = this.x;
};