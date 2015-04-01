function Character(world, width, height, x, y, sprite)
{
	this.world = world;

	this.width  = width;
	this.height = height;
	this.x = x;
	this.y = y;

	this.dx = 0;
	this.dy = 0;

	this.velocity = 0.0020;

	this.sprite         = sprite;
	this.direction      = "down";
	this.spriteindex    = 0;
	this.intervalSprite = 50;
	this.interval       = 0;
}

Character.prototype.validPosition = function(px, py)
{
	var width = this.width / (2 * world.cellWidth);
	var height = this.height / (2 * world.cellHeight);

	if(!world.walkedTile(px-width, py-height))
		return false;
	if(!world.walkedTile(px+width, py-height))
		return false;
	if(!world.walkedTile(px-width, py+height))
		return false;
	if(!world.walkedTile(px+width, py+height))
		return false;

	return true;
};

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

	if(this.x == px && this.y == py)
		return;

	this.x = px;
	this.y = py;

	if(this.dx > 0)
		newDirection = "right";
	if(this.dx < 0)
		newDirection = "left";
	if(this.dy > 0)
		newDirection = "down";
	if(this.dy < 0) 
		newDirection = "up";

	if(this.direction != newDirection)
	{
		this.transition = 0;
		this.spriteindex = 0;
		this.direction = newDirection;
	}
	this.transition += delta;

	if(this.transition > this.transitionSprite)
	{
		this.transition = 0;
		this.spriteindex = (this.spriteindex+1)%this.sprite.getNumSprites(newDirection);
	}
};

Character.prototype.draw = function(context)
{
	context.save();
	context.translate(this.x*world.cellWidth, this.y*world.cellHeight);

	//this.sprite.draw(context, this.width, this.height, this.direction, this.SpriteIndex);

context.restore();
}

 