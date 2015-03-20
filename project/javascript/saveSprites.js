function SaveSprites()
{
	this.list=[];
}

SaveSprites.prototype.add = function(id, sprite)
{
	this.list[id] = sprite;
}

SaveSprites.prototype.get = function(id)
{
	return this.list[id];
};