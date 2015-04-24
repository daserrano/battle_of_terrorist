function Collision(px, py)
{
	this.px = px;
	this.py = py;

}

Collision.prototype.validPosition = function(obj, px, py)
	{
	var width  = obj.width/(3*world.cellWidth); //0.4
	var height = obj.height/(3*world.cellHeight);

//alert("width: " + width + "height: " + height + "this.px: " + this.px + "this.py: " + this.py);

	if(!world.cellWalked(this.px-width, this.py-height))
		return false;
	if(!world.cellWalked(this.px+width, this.py-height))
		return false;
	if(!world.cellWalked(this.px-width, this.py+height))
		return false;
	if(!world.cellWalked(this.px+width, this.py+height))
		return false;

	return true;
	};