//PROCESSING
function sketchProc(processing) {

  var xpos;
  var ypos;
  var drag = 1;
  var can = false;
  var rectX1, rectY1, rectX2, rectY2, rectX3, rectY3, rectX4, rectY4, rectJUGARX, rectJUGARY;
  var rectOver = false, rectOver1 = false, rectOver2 = false, rectOver3 = false, rectOver4 = false,rectOver5 = false,rectOver6 = false,rectOver7 = false, texto = false;
  var transformer;
  var crearRectangulos = false;
  var revisionColores = false;
  var personaje;
  var color;
  var mostrarPersonaje1 = false, mostrarPersonaje2= false, mostrarPersonaje3= false, mostrarPersonaje4= false;

      //SETUP Processing
      processing.size(1250, 650);
      processing.frameRate(60);
      transformer = processing.createFont("transformer"); 

      xpos = processing.width/1.5;
      ypos = processing.height/1.5;

      primerPersonaje = processing.loadImage("img/1FIN.png");
      segundoPersonaje = processing.loadImage("img/2FIN.png");
      tercerPersonaje = processing.loadImage("img/3FIN.png");
      cuartoPersonaje = processing.loadImage("img/4FIN.png");
      MOD = processing.loadImage("img/ratonMOD.png");  


      logo = processing.loadImage("img/logo1.png")
      processing.textFont(transformer, 65);

      rectX1 = 130;
      rectY1 = 430;
      rectX2 = 410;
      rectY2 = 430;
      rectX3 = 690;
      rectY3 = 430;
      rectX4 = 970;
      rectY4 = 430;
      rectX5 = 230;
      rectX6 = 518;
      rectX7 = 806;
      rectY5 = 550;
      rectY6 = 550;
      rectY7 = 550;
      rectJUGARX = 325; 
      rectJUGARY = 550; 


  //DRAW
  processing.draw = function() { 
    processing.background(0);
    processing.text("Elige un personaje", 310, 310);

    processing.image(logo, 475, 25, 300, 150, 7);
    processing.image(primerPersonaje, 185, 350,50,70);
    processing.image(segundoPersonaje, 465, 350, 50, 70);
    processing.image(tercerPersonaje, 740, 350, 50, 70);
    processing.image(cuartoPersonaje, 1020, 350, 50, 70);
    processing.noCursor();
    processing.image(MOD, xpos, ypos);

    var difx = processing.mouseX - xpos-MOD.width/2;
    if(processing.abs(difx) > 1.0) {
      xpos = xpos + difx/drag;
      xpos = processing.constrain(xpos, 0, processing.width-MOD.width);
    }  
    var dify = processing.mouseY - ypos-MOD.height/2;
    if(processing.abs(dify) > 1.0) {
      ypos = ypos + dify/drag;
      ypos = processing.constrain(ypos, 0, processing.height-MOD.height);
    }  

    processing.stroke(255);
    processing.rect(rectX1, rectY1, 160, 50, 10);
    processing.rect(rectX2, rectY2, 160, 50, 10);
    processing.rect(rectX3, rectY3, 160, 50, 10);
    processing.rect(rectX4, rectY4, 160, 50, 10);

    update(processing.mouseX, processing.mouseY);

    if (rectOver1) {
      mostrarPersonaje1 = true;
      estoyEnUno = true;
      escribeTexto();
      processing.noFill();
    } 
    estoyEnUno = false;
    mostrarPersonaje1 = false;
    if (rectOver2) {
      mostrarPersonaje2 = true;
      estoyEnUno = true;
      escribeTexto();
      processing.noFill();
    } 
    estoyEnUno = false;
    mostrarPersonaje2 = false;
    if (rectOver3) {
      mostrarPersonaje3 = true;
      estoyEnUno = true;
      escribeTexto();
      processing.noFill();
    } 
    estoyEnUno = false;
    mostrarPersonaje3 = false;
    if (rectOver4) {
      mostrarPersonaje4 = true;
      estoyEnUno = true;
      escribeTexto();
      processing.noFill();
    } 
    mostrarPersonaje4 = false;
    estoyEnUno = false;



    if(revisionColores == true){
      if (rectOver5){
        escribeTexto();
        processing.fill(235, 0, 0);
        processing.text(" ROJO ", 240, 595);
        processing.noFill();
      } 
      if (rectOver6){
        escribeTexto();
        processing.fill(0, 0, 235);
        processing.text(" AZUL ", 521, 595);
        processing.noFill();
      } 
      if (rectOver7){
        escribeTexto();
        processing.fill(0, 210, 0);
        processing.text("VERDE ", 820, 595);
        processing.noFill();
      } 
    }
    if(rectOver1 == false && rectOver2 == false && rectOver3 == false && rectOver4 == false && rectOver5 == false && rectOver6 == false && rectOver7 == false){
      processing.fill(204, 204, 0);
    }
    if(crearRectangulos == true){
    //processing.fill(255, 0, 0);
    revisionColores = true;
    processing.rect(rectX5, rectY5, 213, 50, 22);
    processing.rect(rectX6, rectY6, 213, 50, 22);
    processing.rect(rectX7, rectY7, 213, 50, 22);
  }



  };//draw

   //FUNCTIONS

   function escribeTexto(){
    if(mostrarPersonaje1 || personaje == 1 && estoyEnUno == false){
      processing.text("JACK", 145, 475);
      processing.text("  ?  ", 405, 475);
      processing.text("  ?  ", 685, 475);
      processing.text("  ?  ", 965, 475);
    }
    if(mostrarPersonaje2 || personaje == 2 && estoyEnUno == false){
     processing.text("  ?  ", 125, 475);
     processing.text("ELLIE", 415, 475);
     processing.text("  ?  ", 685, 475);
     processing.text("  ?  ", 965, 475);
   }
   if(mostrarPersonaje3 || personaje == 3 && estoyEnUno == false){
    processing.text("  ?  ", 125, 475);
    processing.text("  ?  ", 405, 475);
    processing.text("PAUL", 705, 475);
    processing.text("  ?  ", 965, 475);
  }
  if(mostrarPersonaje4 || personaje == 4 && estoyEnUno == false){
    processing.text("  ?  ", 125, 475);
    processing.text("  ?  ", 405, 475);
    processing.text("  ?  ", 685, 475);
    processing.text("BILLY", 980, 475);
  }

}



function update(x, y) {

  if(overRect(rectX1, rectY1, 160, 50)){
    rectOver1 = true;
  }
  else if (overRect(rectX2, rectY2, 160, 50)) {
    rectOver2 = true;
  }
  else if (overRect(rectX3, rectY3, 160, 50)) {
    rectOver3 = true;
  }
  else if(overRect(rectX4, rectY4, 160, 50)){
    rectOver4 = true;
  }
  else if(overRect(rectX5, rectY5, 213, 50)){
    rectOver5 = true;
  }
  else if(overRect(rectX6, rectY6, 213, 50)){
    rectOver6 = true;
  }
  else if(overRect(rectX7, rectY7, 213, 50)){
    rectOver7 = true;
  }
  if( overRect(rectX1, rectY1, 160, 50) == false && 
    overRect(rectX2, rectY2, 160, 50) == false && 
    overRect(rectX3, rectY3, 160, 50) == false && 
    overRect(rectX4, rectY4, 160, 50) == false &&
    overRect(rectX5, rectY5, 213, 50) == false &&
    overRect(rectX6, rectY6, 213, 50) == false &&
    overRect(rectX7, rectY7, 213, 50) == false ){

    rectOver1 = rectOver2 = rectOver3 = rectOver4 = rectOver5 = rectOver6 = rectOver7 = false;
}
} //update


processing.mousePressed = function() {

  if (rectOver1) {
    crearRectangulos = true;
    personaje = 1;
  }
  if (rectOver2) {    
   crearRectangulos = true;
   personaje = 2;
 }
 if (rectOver3) {
  crearRectangulos = true;
  personaje = 3;
}
if (rectOver4) {
  crearRectangulos = true;
  personaje = 4;
}
if (rectOver5) {
  color = "rojo";
  processing.exit();
  processing.noLoop();
  dime(personaje,color);
  prueba();
    //World(canvas);
  }
  if (rectOver6) {
    color = "azul";
    processing.exit();
    processing.noLoop();
    dime(personaje,color);
    prueba();
    //World(canvas);
  }
  if (rectOver7) {
    color = "verde";
    processing.exit();
    processing.noLoop();
    dime(personaje,color);
    prueba();

    //World(canvas);
  }
}




function overRect( x,  y,  width,  height)  {
   //Puede ser o width y height o processing.width...
   if (processing.mouseX >= x && processing.mouseX <= x+width && 
    processing.mouseY >= y && processing.mouseY <= y+height) {
    return true;
} 
else {
  return false;
}
}
}

var canvas
var sketch
var p
function cargarCanvas(){
  canvas = document.getElementById("canvas1");
  p = new Processing(canvas, sketchProc);
  sketch = p.externals.sketch; 
  sketch.options.crispLines = true;
}

