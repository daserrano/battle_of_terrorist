function world(idCanvas, button)
{
    this.canvas = document.getElementById(idCanvas);
    this.context = this.canvas.getContext('2d');

    this.cellWidth = 60;
    this.cellHeigth = 60;

    this.tiles = [
	new tile(this.cellWidth, this.cellHeigth, true, "white"),
	new tile(this.cellWith, this.cellHeigth, false, "blue") 
		];

    this.map = 
    [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
	];
}
