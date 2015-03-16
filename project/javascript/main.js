function game(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");


    ctx.anchoCelda = 40;
    ctx.altoCelda = 40;

    ctx.arrayImagenes = new Array();

    arrayImagenes[0] = new Image();
    arrayImagenes[0].src = "../images/";

    ctx.conjuntoTiles = [
	new Tile(true, 1, ),
	    new Tile(false, 2)
		];

    ctx.mapa = 
	[
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1]
	    ];

    ctx.canvas.width = ctx.anchoCelda*ctx.mapa[0]length;
    ctx.canvas.height = ctx.altoCelda*ctx.mapa.length;

    ctx.jugador;

    ctx.iniciarJugador();


}


