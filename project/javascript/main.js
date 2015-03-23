function game(){
    console.log("ok");
    
    var images = new saveImages();
    var sprits = new SaveSprites();
    var world;

    images.loading(  // Loading all the images that we need | Para cargar todas las imágenes que necesitamos.
        [
        ["Red1", "images/game/red1.png"]] // Red player. | Un jugador rojo.
        );

    images.completed = function()
    {
        //var spritePlayer = new Sprite(images.get("Red1"));
        //spritePlayer.createDireccion(4,4,0,5,0,0,{"up":3,"down":0,"right":2,"left":1});
        //Sprites.add("player1", spritePlayer);
        //world = new World("canvas", "stop");
    }
    world = new World("canvas", "stop");

}