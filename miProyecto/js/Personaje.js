function Personaje(mundo, ancho, alto, x, y, sprite)
{
	this.mundo=mundo;
	
	this.ancho=ancho;
	this.alto=alto;
	this.x=x;
	this.y=y;
	
	this.dx=0;
	this.dy=0;
	
	this.velocidad=0.003;
	
	this.sprite=sprite;
	this.direccion="abajo";
	this.spriteindice=0;
	this.transicionSprite=50;
	this.transicion=0;
}

Personaje.prototype.posicionValida=function(px,py)
{
	var ancho=this.ancho/(2*mundo.anchoCelda);
	var alto=this.alto/(2*mundo.altoCelda);
	
	if (!mundo.casillaCaminable(px-ancho,py-alto))
		return false;
	if (!mundo.casillaCaminable(px+ancho,py-alto))
		return false;
	if (!mundo.casillaCaminable(px-ancho,py+alto))
		return false;
	if (!mundo.casillaCaminable(px+ancho,py+alto))
		return false;

	return true;
};

Personaje.prototype.mover=function(delta)
{
	var nuevaDireccion="";

	if (this.dx==0 && this.dy==0) 
		return;

	var px=this.x+this.dx*this.velocidad*delta;
	var py=this.y+this.dy*this.velocidad*delta;
	
	if (!this.posicionValida(px,this.y))
		px=this.x;
	if (!this.posicionValida(this.x,py)) 
		py=this.y;
	
	if (this.x==px && this.y==py) 
		return;
	
	this.x=px;
	this.y=py;

	if (this.dx>0)
		nuevaDireccion="derecha";
	if (this.dx<0)
		nuevaDireccion="izquierda";
	if (this.dy>0)
		nuevaDireccion="abajo";
	if (this.dy<0)
		nuevaDireccion="arriba";

	if (this.direccion!=nuevaDireccion)
	{
		this.transicion=0;
		this.spriteindice=0;
		this.direccion=nuevaDireccion;
	}
	this.transicion+=delta;

	if (this.transicion>this.transicionSprite)
	{
		this.transicion=0;
		this.spriteindice=(this.spriteindice+1)%this.sprite.getNumSprites(nuevaDireccion);
	}
};
Personaje.prototype.dibujar=function(contexto){
	contexto.save();
	contexto.translate(this.x*mundo.anchoCelda,this.y*mundo.altoCelda);
	this.sprite.dibujar(contexto,this.ancho,this.alto,this.direccion,this.spriteindice);
	
	contexto.restore();
};
