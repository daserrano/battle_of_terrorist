function game(){
    
    var images = new saveImages();
    var sprits = new SaveSprites();
    var world;

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    images.loading(  // Loading all the images that we need | Para cargar todas las imágenes que necesitamos.
        [
        ["Red1", "images/game/playerRed1.png"], // Red player. | Jugador rojo.
        ["Green1", "images/game/playerGreen1.png"] // Green player. | Jugador verde.
        ]);

    images.completed = function()
    {
        var spritePlayer = new Sprite(images.get("Red1"));
        spritePlayer.createDireccion(4,4,0,5,0,0,{"up":3,"down":0,"right":2,"left":1});
        Sprites.add("player1", spritePlayer);
        world = new World("canvas");
    }
    world = new World(this.canvas, this.ctx);

}