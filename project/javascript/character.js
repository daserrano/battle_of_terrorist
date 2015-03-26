function Character(world, width, heigth, x, y, sprite)
{
	this.world = world;

	this.width = width;
	this.heigth = heigth;
	this.x = x;
	this.y = y;

	this.dx = 0;
	this.dy = 0;

	this.velocity = 0.0020;

	this.sprite = sprite;
	this.direction = "down";
	this.spriteindex = 0;
	this.intervalSprite = 50;
	this.interval = 0;
}

Character.prototype.move = function(delta)
{
	var newDirection = "";

	if(this.dx == 0 && this.dy==0)
		return;

	var px = this.x + this.dx * this.velocity * delta;
	var py = this.y + this.dy * this.velocity * delta;

	if(!this.validPosition(px, this.y))
		px = this.x;
	if(!this.validPosition(this.x, py))
		py = this.y;
}

Character.prototype.validPosition = function(px, py)
{
	var width = this.width / (2 * world.cellWidth);
	var heigth = this.heigth / (2 * world.cellHeigth);

	if(!world.walkedTile(px - width, py - heigth))
		return false;
	if(!world.walkedTile(px + width, py - heigth))
		return false;
	if(!world.walkedTile(px - width, py + heigth))
		return false;
	if(!world.walkedTile(px + width, py + heigth))
		return false;

	return true;
}; //Last did it.