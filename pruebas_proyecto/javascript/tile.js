function Tile(ancho, alto, caminable, color){
	this.ancho     = ancho;
	this.alto      = alto;
	this.caminable = caminable;
	this.color     = color;
}

Tile.prototype.dibujar=function(contexto,x,y){
	contexto.fillStyle = "#555";
	contexto.fillRect(this.ancho*x,this.alto*y,this.ancho,this.alto);
	contexto.fillStyle = this.color;
	contexto.fillRect(this.ancho*x+0.6,this.alto*y+0.6,this.ancho,this.alto);
	};