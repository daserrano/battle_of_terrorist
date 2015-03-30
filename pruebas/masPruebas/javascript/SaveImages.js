function SaveImages()
{
	this.list    = []; 
	this.waiting = 0;
	this.loaded  = 0;
}

SaveImages.prototype.load = function(list)
{
	var self = this;
	this.waiting = list.length;
	for (var i=0; i<this.waiting; i++)
	{
		var img = new Image();
		img.src = list[i][1];
		img.onload = function()
		{
			self.imageLoaded();
		};
		this.list[list[i][0]] = img; // Se guardan los dos campos en lista.
	}
};

SaveImages.prototype.imageLoaded = function()
{
	this.loaded++;
	if(this.loaded == this.waiting)
		this.completed();
};

SaveImages.prototype.get = function(id)
{
	return this.list[id];
};

SaveImages.prototype.completed = function(){};
