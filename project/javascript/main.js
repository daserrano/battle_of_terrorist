function game(){

    var images = new saveImages();
    var Sprites = new SaveSprites();
    var world;
    var width  = this.canvas.width;
    var height = this.canvas.height;
    var my_gradient;

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    images.loading(  // Loading all the images that we need | Para cargar todas las imágenes que necesitamos.
        [
        ["Red1", "images/game/playerRed2.png"], // Red player. | Jugador rojo.
        ["Green1", "images/game/playerGreen1.png"] // Green player. | Jugador verde.
        ]);

    images.completed = function()
    {
        var spritePlayer = new Sprite(images.get("Green1"));
        spritePlayer.createDireccion(4,4,0,5,0,0,{"up":3,"down":0,"right":2,"left":1});
        Sprites.add("player1", spritePlayer);

    }

    my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0, "#00ACED");
    my_gradient.addColorStop(1, "#001B9C");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    
    ctx.font = "50pt Arial";
    ctx.fillText("Play!", width/2-70, height/2+20);
    this.canvas.addEventListener("mousedown", doMouseDown, false);

}

function doMouseDown(event)
{
    world = new World(canvas, ctx);
}

