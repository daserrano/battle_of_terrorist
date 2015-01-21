function Mundo(idCanvas, ancho, alto)
{
	this.canvas     = document.getElementById(idCanvas);
	this.contexto   = this.canvas.getContext("2d");
	
	this.anchoCelda = ancho;
	this.altoCelda  = alto;
	
	this.conjuntoTiles =
	[
	new Tile(this.anchoCelda, this.altoCelda, false, "blue"),
	new Tile(this.anchoCelda, this.altoCelda, true, "brown"),
	new Tile(this.anchoCelda, this.altoCelda, false, "green")
	];

	this.mapa =
	[
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];

	this.canvas.width  = ancho * this.mapa[0].length;
	this.canvas.height = alto * this.mapa.length;

	this.dibujarMapa();

}

Mundo.prototype.dibujarMapa = function()
{
	var x = this.mapa.length;
	var y = this.mapa[0].length;
	

}