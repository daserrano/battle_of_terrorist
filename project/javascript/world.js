function World(idCanvas, ctx)
{
    this.canvas  = idCanvas;
    this.context = ctx;

    this.cellWidth  = 100;
    this.cellHeight = 100;

    this.tiles = [
    new Tile(this.cellWidth, this.cellHeight, true, "white"),
    new Tile(this.cellWidth, this.cellHeight, false, "black") 
    ];

    this.map = 
    [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    //this.canvas.width  = this.cellWidth*this.map[0].length;
    //this.canvas.height = this.cellHeight*this.map.length;
    canvas.width  = this.cellWidth*this.map[0].length;
    canvas.height = this.cellHeight*this.map.length;

    this.player1;
    this.playerOn();
    this.drawMap(); 
}

World.prototype.playerOn = function()
{
    this.player1 = new Player(this, 30, 30, 2.5, 1.5);
    var self = this;

    document.body.onkeydown = function(e)
    {
        switch(e.keyCode)
        {
            case 38: //Up | Arriba
            e.preventDefault();
            self.player1.up = true;
            break;
            case 40: //Down | Abajo
            e.preventDefault();
            self.player1.down = true;
            break;
            case 39:
            e.preventDefault();
            self.player1.right = true;
            break;
            case 37:
            e.preventDefault();
            self.player1.left = true;
            break;
        }
    };

    document.body.onkeyup=function(e){
        switch(e.keyCode)
        {
            case 38: //Up | Arriba
            e.preventDefault();
            self.player1.up = false;
            break;
            case 40: //Down | Abajo
            e.preventDefault();
            self.player1.down = false;
            break;
            case 39:
            e.preventDefault();
            self.player1.right = false;
            break;
            case 37:
            e.preventDefault();
            self.player1.left = false;
            break;
        }
    };
};

    /*
    Mundo.prototype.casillaCaminable = function(px, py)
    {
       var x = parseInt(px);
       var y = parseInt(py);

       return this.tiles[this.map[x][y]].caminable;
   }
   */
   World.prototype.drawMap = function()
   {
    var y = this.map.length;
    var x = this.map[0].length;

    for (var yi=0; yi < y; yi++)
       for(var xi=0; xi < x; xi++)
        this.tiles[this.map[yi][xi]].draw(this.context, xi, yi);
}

