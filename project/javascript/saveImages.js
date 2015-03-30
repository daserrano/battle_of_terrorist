function saveImages()
{
	this.list=[]; // To create a list of images | Para crear una lista de imagenes.
	this.wait=0;  // To know the images are saving | Para saber cuantas imagenes hay que guardar.
	this.load=0;  // To cross all the images | Para saber cuantas imagenes se han cargado.
}

saveImages.prototype.loading = function(list)
{
	var self     = this; // References to this | Referencia para this
	this.waiting = list.length;
	for (var i=0; i<this.waiting; i++)
	{
		var img = new Image(); // Each image must be save in list | Cada imagen debe ser guardada en la lista
		img.src = list[i][1];
		img.onload = function()
		{
			self.imageLoad(); // Self to references saveImages | self para nombrar a saveImages.
		};
		this.list[list[i][0]] = img; // Each position in array is the image | Cada posición del array tiene su imagen.
	}
}

saveImages.prototype.imageLoad = function()
{
	this.loading++;
	if (this.loading == this.waiting) //If all the image are load, it is completed | Si todas las imagenes se han cargado, se ha completado.
	{
		this.completed();
	}
};

saveImages.prototype.get = function(id)
{
	return this.list[id];
};

saveImages.prototype.completed = function(){};
