/**********************************/
/* Juan Gabriel Rodríguez Carrión */
/*    jlabstudio.com       2012   */
/**********************************/
function Tile(ancho, alto, caminable, color){
	this.ancho=ancho;
	this.alto=alto;
	this.caminable=caminable;
	this.color=color;
}
Tile.prototype.dibujar=function(contexto,x,y){
	contexto.fillStyle = "#444";
	contexto.fillRect(this.ancho*x,this.alto*y,this.ancho,this.alto);
	contexto.fillStyle = this.color;
	contexto.fillRect(this.ancho*x+1,this.alto*y+1,this.ancho-3,this.alto-3);
};
	