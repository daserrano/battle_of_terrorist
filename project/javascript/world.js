function World(idCanvas, button)
{
    console.log("ok2");
    this.canvas  = document.getElementById(idCanvas);
    this.context = this.canvas.getContext('2d');

    this.cellWidth  = 60;
    this.cellHeight = 60;

    this.tiles = [
    new Tile(this.cellWidth, this.cellHeight, true, "white"),
    new Tile(this.cellWith, this.cellHeight, false, "blue") 
    ];

    this.map = 
    [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    this.canvas.width  = this.cellWidth*this.map[0].length;
    this.canvas.height = this.cellHeight*this.map.length;

    this.drawMap(); 
    
    /*
    Mundo.prototype.casillaCaminable = function(px, py)
    {
       var x = parseInt(px);
       var y = parseInt(py);

       return this.tiles[this.map[x][y]].caminable;
   }
   */
}
World.prototype.drawMap = function()
{
    console.log("ok4");
    var y = this.map.length;
    var x = this.map[0].length;

    for (var yi=0; yi < y; yi++)
       for(var xi=0; xi < x; xi++)
        this.tiles[this.map[yi][xi]].draw(this.context, xi, yi);
}

