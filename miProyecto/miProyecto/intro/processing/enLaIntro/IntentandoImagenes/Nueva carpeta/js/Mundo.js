/**********************************/
/* Juan Gabriel Rodríguez Carrión */
/*    jlabstudio.com       2012   */
/**********************************/

function Mundo(idCanvas, idBoton){
	this.canvas=document.getElementById(idCanvas);
	this.contexto=this.canvas.getContext('2d');
	
	this.anchoCelda=60;
	this.altoCelda=60;
	
	this.conjuntoTiles=[new Tile(this.anchoCelda,this.altoCelda,true,"white"),new Tile(this.anchoCelda,this.altoCelda,false,"black")];
	
	this.mapa=
	[
		[1, 1, 1, 1, 1, 1, 1, 1], 
		[1, 0, 0, 0, 0, 0, 0, 1], 
		[1, 0, 1, 0, 0, 0, 0, 1], 
		[1, 0, 0, 0, 0, 1, 0, 1], 
		[1, 0, 0, 0, 0, 0, 0, 1], 
		[1, 1, 1, 1, 1, 1, 1, 1]
	];
	
	this.canvas.width=this.anchoCelda*this.mapa[0].length;
	this.canvas.height=this.altoCelda*this.mapa.length;
	
	this.jugador;
	this.iniciarJugador();
	
	var self=this;
	this.tiempoTranscurrido=new Date().getTime();
	this.intervalo=setInterval(function(){self.loop()},25);
	
	this.boton=document.getElementById(idBoton);
	this.boton.onclick=function(){
		self.detener();
	};
}
Mundo.prototype.detener=function(){
	clearInterval(this.intervalo);
};
Mundo.prototype.iniciarJugador=function(){
	this.jugador=new Jugador(this,30, 30, 2.5, 1.5);
	var self=this;
	
	document.body.onkeydown=function(e){
		switch(e.keyCode)
		{
			case 38: //Arriba
				e.preventDefault();
				self.jugador.arriba=true;
				break;
			case 40: //Abajo
				e.preventDefault();
				self.jugador.abajo=true;
				break;
			case 39: //Derecha
				e.preventDefault();
				self.jugador.derecha=true;
				break;
			case 37: //Izquierda
				e.preventDefault();
				self.jugador.izquierda=true;
				break;
			
		}
	};
	document.body.onkeyup=function(e){
		switch(e.keyCode)
		{
			case 38: //Arriba
				e.preventDefault();
				self.jugador.arriba=false;
				break;
			case 40: //Abajo
				e.preventDefault();
				self.jugador.abajo=false;
				break;
			case 39: //Derecha
				e.preventDefault();
				self.jugador.derecha=false;
				break;
			case 37: //Izquierda
				e.preventDefault();
				self.jugador.izquierda=false;
				break;
			
		}
	};
};
Mundo.prototype.casillaCaminable=function(px,py){
	var x=parseInt(px);
	var y=parseInt(py);
	return this.conjuntoTiles[this.mapa[y][x]].caminable;
};
Mundo.prototype.moverPersonajes=function(delta){
	this.jugador.mover(delta);
};
Mundo.prototype.dibujarMapa=function(){
	var y=this.mapa.length;
	var x=this.mapa[0].length;
	for (var yi=0;yi<y;yi++)
	{
		for (var xi=0;xi<x;xi++)
		{
			this.conjuntoTiles[this.mapa[yi][xi]].dibujar(this.contexto,xi,yi);
		}
	}
};
Mundo.prototype.dibujarPersonajes=function(){
	this.jugador.dibujar(this.contexto);
};

Mundo.prototype.loop=function(){
	var delta=(new Date().getTime()) - this.tiempoTranscurrido;
	this.tiempoTranscurrido=new Date().getTime();
	
	this.moverPersonajes(delta);
	this.dibujarMapa();
	this.dibujarPersonajes();
};