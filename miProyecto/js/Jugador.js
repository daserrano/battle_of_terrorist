/**********************************/
/* Juan Gabriel Rodríguez Carrión */
/*    jlabstudio.com       2012   */
/**********************************/
function Jugador(mundo, ancho, alto, x, y){
	Personaje.call(this, mundo, ancho, alto, x, y, Sprites.get("jugador"));
	this.arriba=false;
	this.abajo=false;
	this.derecha=false;
	this.izquierda=false;
}

Jugador.prototype=new Personaje;

Jugador.prototype.mover=function(delta){
	this.dx=0;
	this.dy=0;
	if (this.arriba)
	{
		this.dy-=1;
	}
	if (this.abajo)
	{
		this.dy+=1;
	}
	if (this.izquierda)
	{
		this.dx-=1;
	}
	if (this.derecha)
	{
		this.dx+=1;
	}
	Personaje.prototype.mover.call(this,delta);
};
	