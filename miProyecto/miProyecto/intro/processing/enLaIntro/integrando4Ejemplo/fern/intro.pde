/* @pjs font="transformer.ttf" */
/* @pjs preload="img/arma1.jpg"; */
//Se da la orden de precarga de la fuente que vamos a utilizar
//se crean las variables que vamos a utilizar

//VARIABLES DE TIPO PImage
PImage primerPersonaje, logo, segundoPersonaje, tercerPersonaje, cuartoPersonaje, MOD, img;

//VARIABLES DE TIPO PFont
PFont font_name;

float xpos;
float ypos;
float drag = 1;

//Variables que indican la posicion de X e Y donde empezaran los rect
int rectX1, rectY1, rectX2, rectY2, rectX3, rectY3, rectX4, rectY4, rectJUGARX, rectJUGARY; 

//Se crea el boleano que indicara si el raton esta encima del rect o no
boolean rectOver = false, rectOver1 = false, rectOver2 = false, rectOver3 = false, rectOver4 = false, texto = false;

//Funcion setup
void setup()  	
{
	//Estas lineas determinarán el tamaño y el framerate de nuestro canvas
	size(1250, 650);
	frameRate(60);

	xpos = width/1.5;
	ypos = height/1.5;

	//Empezamos a cargar los elementos del canvas
	primerPersonaje = loadImage("img/1FIN.png");
	segundoPersonaje = loadImage("img/2FIN.png");
	tercerPersonaje = loadImage("img/3FIN.png");
	cuartoPersonaje = loadImage("img/4FIN.png");
	MOD = loadImage("img/ratonMOD.png");	
	logo = loadImage("img/logo1.png")
	font_name = createFont("transformer", 65);
	textFont(font_name);
	font_name = loadFont("transformer.ttf");
	textFont(font_name);
	
	//BOTON 
	//Se dan los valores de X e Y donde comenzaran los botones(rect)
	rectX1 = 130;
	rectY1 = 430;

	rectX2 = 410;
	rectY2 = 430;


	rectX3 = 690;
	rectY3 = 430;

	rectX4 = 970;
	rectY4 = 430;

	rectJUGARX = 325; 
	rectJUGARY = 550; 
	noLoop();
}

//Funcion draw
void draw() 
{		


	background(0);

	noCursor();
	text("Elige un personsaje", 310, 310);

	image(MOD, xpos, ypos);

	//Dibujamos las imagenes que estaran contenidas en nuestro canvas
	image(logo, 475, 25, 300, 150, 7);
	image(primerPersonaje, 185, 350,50,70);
	image(segundoPersonaje, 465, 350, 50, 70);
	image(tercerPersonaje, 740, 350, 50, 70);
	image(cuartoPersonaje, 1020, 350, 50, 70);
	
	float difx = mouseX - xpos-MOD.width/2;
	if(abs(difx) > 1.0) {
	xpos = xpos + difx/drag;
	xpos = constrain(xpos, 0, width-MOD.width);
}  

float dify = mouseY - ypos-MOD.height/2;
if(abs(dify) > 1.0) {
ypos = ypos + dify/drag;
ypos = constrain(ypos, 0, height-MOD.height);
}  

//Se crean los rectangulos
stroke(255);
rect(rectX1, rectY1, 150, 50, 10);
rect(rectX2, rectY2, 150, 50, 10);
rect(rectX3, rectY3, 150, 50, 10);
rect(rectX4, rectY4, 150, 50, 10);
//BOTON
update(mouseX, mouseY);

if (rectOver1) {
text("JACK", 135, 475);
text("  ?  ", 405, 475);
text("  ?  ", 685, 475);
text("  ?  ", 965, 475);
noFill();
} 
if (rectOver2) {
text("  ?  ", 125, 475);
text("PUNK", 415, 475);
text("  ?  ", 685, 475);
text("  ?  ", 965, 475);
noFill();
} 
if (rectOver3) {
text("  ?  ", 125, 475);
text("  ?  ", 405, 475);
text("SPOK", 695, 475);
text("  ?  ", 965, 475);
noFill();
} 
if (rectOver4) {
text("  ?  ", 125, 475);
text("  ?  ", 405, 475);
text("  ?  ", 685, 475);
text("BILL", 995, 475);
noFill();
} 

if(rectOver1 == false && rectOver2 == false && rectOver3 == false && rectOver4 == false){
fill(204, 204, 0);
}

}


//void salir(){
//
//
//	  exit(); 
//	  canvas();
//	  //size(500, 450);
//	  //text("JUGAR", 250, 225);
//}


//BOTON
void update(int x, int y) {

if(overRect(rectX1, rectY1, 150, 50)){
rectOver1 = true;
}
else if (overRect(rectX2, rectY2, 150, 50)) {
rectOver2 = true;
}
else if (overRect(rectX3, rectY3, 150, 50)) {
rectOver3 = true;
}
else if(overRect(rectX4, rectY4, 150, 50)){
rectOver4 = true;
}
if( overRect(rectX1, rectY1, 150, 50) == false && 
overRect(rectX2, rectY2, 150, 50) == false && 
overRect(rectX3, rectY3, 150, 50) == false && 
overRect(rectX4, rectY4, 150, 50) == false){

rectOver1 = rectOver2 = rectOver3 = rectOver4 = false;
}
if (texto == true) {

//text("JUGAR", 625, 600);
//rect(rectJUGARX, rectJUGARY, 600, 50, 10);
//triangle(0,450,0,450,100,650);

}
}



void mousePressed() {
exit();
	//void mouseClicked() {
		if (rectOver1) {
  			//salir();
			exit();
			canvas();
		}
	}



boolean overRect(int x, int y, int width, int height)  {
if (mouseX >= x && mouseX <= x+width && 
mouseY >= y && mouseY <= y+height) {
return true;
} 
else {
//fill(204, 204, 0);
return false;
}
}