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

    var self = this;
    this.timeGame = new Date().getTime();
    this.timeInterval = setInterval(function(){self.loop()}, 25);

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
            case 39: //Right | Derecha
            e.preventDefault();
            self.player1.right = true;
            break;
            case 37: //Left | Izquierda
            e.preventDefault();
            self.player1.left = true;
            break;
        }
    };

    document.body.onkeyup = function(e){
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
            case 39: //Right | Derecha
            e.preventDefault();
            self.player1.right = false;
            break;
            case 37: //Left | Izquierda
            e.preventDefault();
            self.player1.left = false;
            break;
        }
    };
};

   World.prototype.drawMap = function()
   {
    var y = this.map.length;
    var x = this.map[0].length;

    for (var yi=0; yi < y; yi++)
       for(var xi=0; xi < x; xi++)
        this.tiles[this.map[yi][xi]].draw(this.context, xi, yi);
};

World.prototype.loop = function()
{
    var delta     = (new Date().getTime()) - this.timeGame;
    this.timeGame = new Date().getTime();

    this.movePlayer(delta);
};

World.prototype.movePlayer = function(delta)
{
    this.player1.move(delta);
};

World.walkedTile = function(px, py)
{
    var x = parseInt(px);
    var y = parseInt(py);
    return this.tiles[this.map[y][x]].walk;
}