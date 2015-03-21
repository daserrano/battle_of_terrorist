function world(idCanvas, button)
{
    this.canvas = document.getElementById(idCanvas);
    this.context = this.canvas.getContext('2d');

    this.cellWidth = 60;
    this.cellHeight = 60;

    this.tiles = [
	new tile(this.cellWidth, this.cellHeight, true, "white"),
	new tile(this.cellWith, this.cellHeight, false, "blue") 
		];

    this.map = 
    [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
	];

    this.canvas.width = this.cellWidth*this.mapa[0].length;
    this.canvas.height = this.cellHeight*this.mapa.length;

    
    Mundo.prototype.casillaCaminable = function(px, py)
    {
	var x = parseInt(px);
	var y = parseInt(py);

	return this.tiles[this.map[x][y]].caminable;
    }


    Mundo.prototype.dibujarMapa = function()
    {
	var y = this.mapa.length;
	var x = this.mapa[0].length;

	for (var yi=0; yi < y; yi++)
	    for(var xi=0, xi < x; xi++)
		this.tiles[this.map[yi][xi]].dibujar(this.context, xi, yi);
    }
}
