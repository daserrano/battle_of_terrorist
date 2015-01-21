
var mapa1 = [
    [0, 0, 0, 0,               0, 0, 0, 0,                0, 0, 0, 0,            0, 0, 0, 0, 0],
    [0, 1, 1, 1,               1, 1, 1, 1,                1, 1, 1, 1,            1, 1, 1, 1, 0],
    [0, 1, 1, 0,               0, 0, 0, 0,                0, 0, 0, 0,            1, 1, 1, 1, 0],
    [0, 1, 1, 0,               1, 1, 1, 1,                1, 1, 1, 0,            1, 1, 1, 1, 0],

    [0, 1, 1, 0,               1, 0, 0, 0,                0, 0, 1, 0,            1, 0, 1, 1, 0],
    [0, 1, 1, 1,               1, 1, 1, 1,                1, 0, 1, 0,            1, 1, 1, 1, 0],
    [0, 1, 1, 0,               1, 0, 1, 1,                1, 1, 1, 0,            1, 0, 1, 1, 0],
    [0, 1, 1, 0,               1, 0, 0, 0,                0, 0, 0, 0,            1, 0, 1, 1, 0],
           
    [0, 1, 1, 0,               1, 1, 1, 1,                1, 1, 1, 1,            1, 0, 1, 1, 0],
    [0, 1, 1, 0,               0, 0, 0, 0,                0, 0, 0, 0,            0, 0, 1, 1, 0],
    [0, 1, 1, 1,               1, 1, 1, 1,                1, 1, 1, 1,            1, 1, 1, 1, 0],
    [0, 0, 0, 0,               0, 0, 0, 0,                0, 0, 0, 0,            0, 0, 0, 0, 0],
];


function cargar(){
	var canvas = document.getElementById("miCanvas");
	var contexto = canvas.getContext("2d");

    var hierba = new Image();
	hierba.src = "images/hierba.jpg";

	var arena = new Image();
    arena.src = "images/arena.jpg";

    var acero = new Image();
    acero.src = "images/acero.jpg";

    var acero_suelo = new Image();
    acero_suelo.src = "images/acero_suelo.jpg";

    // mapa1[x] ¿¿porque??
    for (var x = 0; x < mapa1.length; x++)
        for(var y = 0; y < mapa1[x].length; y++){
            if(!mapa1[x][y])
                contexto.drawImage(hierba, 40*y, 40*x, 40, 40)
            else
                contexto.drawImage(acero, 40*y, 40*x, 40, 40)

        }

}