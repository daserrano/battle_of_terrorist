//PROCESSING
function sketchProc(processing) {

  var xpos;
  var ypos;
  var drag = 1;
  var can = false;
  var rectCharacter1_X, rectCharacter1_Y, rectCharacter2_X, rectCharacter2_Y, 
  rectCharacter3_X, rectCharacter3_Y, rectCharacter4_X, rectCharacter4_Y;
  var rectOver = false, rectOverCharacter1 = false, rectOverCharacter2 = false, 
  rectOverCharacter3 = false, rectOverCharacter4 = false, rectOverCharacter5 = false, 
  rectOverCharacter6 = false, rectOverCharacter7 = false, rectOverCharacter8 = false, 
  rectOverColorRed = false,rectOverColorBlue = false,rectOverColorGreen = false, 
  texto = false,rectOver8 = false, rectOver9 = false,rectOverCuadroConfirmacion1 = false,
  rectOverCuadroConfirmacion2 = false;
  var transformer;
  var crearRectangulosColores = false;
  var revisionColores = false;
  var personaje;
  var color;
  var mostrarPersonaje1 = false, mostrarPersonaje2= false, mostrarPersonaje3= false, 
  mostrarPersonaje4= false, mostrarPersonaje1_2= false, mostrarPersonaje2_2= false, 
  mostrarPersonaje3_2= false, mostrarPersonaje4_2= false;
  var dibujaConfirmar = false, dibujaConfirmar2 = false;
  var rectXCONF1, rectXCONF2, rectYCONF1, rectYCONF2;



      //SETUP Processing
      processing.size(1250, 650);
      processing.frameRate(60);
      transformer = processing.createFont("transformer"); 

      xpos = processing.width/1.5;
      ypos = processing.height/1.5;

      primerPersonaje = processing.loadImage("images/game/178.png");
      segundoPersonaje = processing.loadImage("images/game/179.png");
      tercerPersonaje = processing.loadImage("images/game/180.png");
      cuartoPersonaje = processing.loadImage("images/game/181.png");
      MOD = processing.loadImage("images/game/183.png");  


      logo = processing.loadImage("images/game/182.png")
      processing.textFont(transformer, 65);

      rectCharacter1_X = 50;
      rectCharacter1_Y = 430;
      rectCharacter2_X = 193.5;
      rectCharacter2_Y = 430;
      rectCharacter3_X = 337;
      rectCharacter3_Y = 430;
      rectCharacter4_X = 480.5;
      rectCharacter4_Y = 430;
      rectCharacter5_X = 675;
      rectCharacter5_Y = 430;
      rectCharacter6_X = 810.5;
      rectCharacter6_Y = 430;
      rectCharacter7_X = 954;
      rectCharacter7_Y = 430;
      rectCharacter8_X = 1097.5;
      rectCharacter8_Y = 430;
      rectColorRedX = 230;
      rectColorRedY = 550;
      rectColorBlueX = 518;
      rectColorBlueY = 550;
      rectColorGreenX = 806;
      rectColorGreenY = 550;
      rectCuadroConfirmacion1X = 50;
      rectCuadroConfirmacion1Y = 500;
      rectCuadroConfirmacion2X = 1045;
      rectCuadroConfirmacion2Y = 500;
      //rectXCONF1 = 50; 
      //rectYCONF1 = 500;
      //rectXCONF2 = 1045;
      //rectYCONF2 = 500;
      var confirmado = false;
      var confirmado2 = false;
      var rectDone = false;
      var rectDone2 = false;

  //DRAW
  processing.draw = function() { 
    processing.background(0);
    processing.text("Elige un personaje", 310, 310);

    processing.image(logo, 475, 25, 300, 150, 7);
    processing.image(primerPersonaje, 75, 350,50,70);
    processing.image(segundoPersonaje, 215, 350, 50, 70);
    processing.image(tercerPersonaje, 360, 350, 50, 70);
    processing.image(cuartoPersonaje, 500, 350, 50, 70);
    processing.image(primerPersonaje, 697, 350,50,70);
    processing.image(segundoPersonaje, 832, 350, 50, 70);
    processing.image(tercerPersonaje, 976, 350, 50, 70);
    processing.image(cuartoPersonaje, 1119, 350, 50, 70);
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
    processing.rect(rectCharacter1_X, rectCharacter1_Y, 93.5, 50, 10);
    processing.rect(rectCharacter2_X, rectCharacter2_Y, 93.5, 50, 10);
    processing.rect(rectCharacter3_X, rectCharacter3_Y, 93.5, 50, 10);
    processing.rect(rectCharacter4_X, rectCharacter4_Y, 93.5, 50, 10);

    processing.rect(rectCharacter5_X, rectCharacter5_Y, 93.5, 50, 10);
    processing.rect(rectCharacter6_X, rectCharacter6_Y, 93.5, 50, 10);
    processing.rect(rectCharacter7_X, rectCharacter7_Y, 93.5, 50, 10);
    processing.rect(rectCharacter8_X, rectCharacter8_Y, 93.5, 50, 10);

    if((personaje ==1 || personaje == 2 || personaje == 3 ||personaje == 4) && (
      (color == "rojo" || color == "azul" || color == "verde")|| color1 != undefined)){
      rectDone = true;
    processing.rect(rectCuadroConfirmacion1X, rectCuadroConfirmacion1Y, 150, 100, 10);
  }
  if(personaje >= 5 && (color == "rojo" || color == "azul" || color == "verde") && confirmado == true){
   rectDone2 = true;
   processing.rect(rectCuadroConfirmacion2X, rectCuadroConfirmacion2Y, 150, 100, 10);
 }


 update(processing.mouseX, processing.mouseY);

 if (rectOverCharacter1) {
  mostrarPersonaje1 = true;
  estoyEnUno = true;
  escribeTexto();
  processing.noFill();
} 
estoyEnUno = false;
mostrarPersonaje1 = false;
if (rectOverCharacter2) {
  mostrarPersonaje2 = true;
  estoyEnUno = true;
  escribeTexto();
  processing.noFill();
} 
estoyEnUno = false;
mostrarPersonaje2 = false;
if (rectOverCharacter3) {
  mostrarPersonaje3 = true;
  estoyEnUno = true;
  escribeTexto();
  processing.noFill();
} 
estoyEnUno = false;
mostrarPersonaje3 = false;
if (rectOverCharacter4) {
  mostrarPersonaje4 = true;
  estoyEnUno = true;
  escribeTexto();
  processing.noFill();
} 
mostrarPersonaje4 = false;
estoyEnUno = false;
if (rectOverCharacter5) {
  mostrarPersonaje1_2 = true;
  estoyEnUno = true;
  escribeTexto2();
  processing.noFill();
} 
estoyEnUno = false;
mostrarPersonaje1_2 = false;
if (rectOverCharacter6) {
  mostrarPersonaje2_2 = true;
  estoyEnUno = true;
  escribeTexto2();
  processing.noFill();
} 
estoyEnUno = false;
mostrarPersonaje2_2 = false;
if (rectOverCharacter7) {
  mostrarPersonaje3_2 = true;
  estoyEnUno = true;
  escribeTexto2();
  processing.noFill();
} 
estoyEnUno = false;
mostrarPersonaje3_2 = false;
if (rectOverCharacter8) {
  mostrarPersonaje4_2 = true;
  estoyEnUno = true;
  escribeTexto2();
  processing.noFill();
} 
estoyEnUno = false;
mostrarPersonaje4_2 = false;
if (rectOverCuadroConfirmacion1){
  estoyEnUno = true;
  processing.textFont(transformer, 25);
  if(confirmado == false && rectDone == true)
    processing.text("CONFIRMAR", 60, 550);
  else if (confirmado == true && (personaje != 5 && personaje != 6 && personaje != 7 && personaje != 8)){
    processing.text("CONFIRMADO!\nJUGADOR 1", 55, 550);
crearRectangulosColores = false;
      //dime(personaje, color);
    }
   if(rectDone == true)
    processing.noFill();
  }
  estoyEnUno = false;
  if (rectOverCuadroConfirmacion2){
    estoyEnUno = true;
    processing.textFont(transformer, 25);
    if(confirmado2 == false && rectDone2 == true)
      processing.text("CONFIRMAR", 1055, 550);
    else if(confirmado2 == true){
      processing.text("CONFIRMADO!\nJUGADOR 2", 1055, 550);
     // dime(personaje, color);

   }
   if(rectDone2 == true)
   processing.noFill();
 }
 estoyEnUno = false;


 if(revisionColores == true){
  if (rectOverColorRed){
    if(personaje == 1 ||personaje == 2 ||personaje == 3 ||personaje == 4)
      escribeTexto();
    else
      escribeTexto2();
//if(personaje == 1 || personaje == 2 || personaje == 3|| personaje == 4 && confirmado == false){
if(confirmado == false || confirmado == true && (personaje == 5 || personaje == 6 || personaje == 7 || personaje == 8) ){
    processing.fill(235, 0, 0);
    processing.text(" ROJO ", 300, 585);
    processing.noFill();
}
  } 
  if (rectOverColorBlue){
    if(personaje == 1 ||personaje == 2 ||personaje == 3 ||personaje == 4)
      escribeTexto();
    else
      escribeTexto2();
if(confirmado == false || confirmado == true && (personaje == 5 || personaje == 6 || personaje == 7 || personaje == 8) ){    processing.fill(0, 0, 235);
    processing.text(" AZUL ", 580, 585);
    processing.noFill();
}
  } 
  if (rectOverColorGreen){
    if(personaje == 1 ||personaje == 2 ||personaje == 3 ||personaje == 4)
      escribeTexto();
    else
      escribeTexto2();
if(confirmado == false || confirmado == true && (personaje == 5 || personaje == 6 || personaje == 7 || personaje == 8) ){    processing.fill(0, 210, 0);
    processing.text("VERDE ", 875, 585);
    processing.noFill();
}
  } 
    }//Si no hemos pinchado
    if(rectOverCharacter1 == false && rectOverCharacter2 == false && rectOverCharacter3 == false && rectOverCharacter4 == false && rectOverCharacter5 == false && rectOverCharacter6 == false && rectOverCharacter7 == false && rectOverCharacter8 == false && rectOverColorRed == false && rectOverColorBlue == false && rectOverColorGreen == false && rectOverCuadroConfirmacion1 == false && rectOverCuadroConfirmacion2 == false){
      processing.fill(204, 204, 0);
    }
    if(crearRectangulosColores == true){
      revisionColores = true;
      processing.rect(rectColorRedX, rectColorRedY, 213, 50, 22);
      processing.rect(rectColorBlueX, rectColorBlueY, 213, 50, 22);
      processing.rect(rectColorGreenX, rectColorGreenY, 213, 50, 22);
    }

  };//draw

   //FUNCTIONS

   function escribeTexto(){
    if(mostrarPersonaje1 || personaje == 1 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("JACK", 70, 465);
      processing.text("  ?  ", 210, 465);
      processing.text("  ?  ", 354, 465);
      processing.text("  ?  ", 495, 465);
    }
    if(mostrarPersonaje2 || personaje == 2 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("  ?  ", 65, 465);
      processing.text("ELLIE", 210, 465);
      processing.text("  ?  ", 354, 465);
      processing.text("  ?  ", 495, 465);
    }
    if(mostrarPersonaje3 || personaje == 3 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("  ?  ", 210, 465);
      processing.text("  ?  ", 65, 465);
      processing.text("PAUL", 354, 465);
      processing.text("  ?  ", 495, 465);
    }
    if(mostrarPersonaje4 || personaje == 4 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("  ?  ", 65, 465);
      processing.text("  ?  ", 210, 465);
      processing.text("  ?  ", 354, 465);
      processing.text("BILLY", 500, 465);
    }

  }

  function escribeTexto2(){

    if(mostrarPersonaje1_2 || personaje == 5 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("JACK", 695, 465);
      processing.text("  ?  ", 825, 465);
      processing.text("  ?  ", 970, 465);
      processing.text("  ?  ", 1116, 465);
    }
    if(mostrarPersonaje2_2 || personaje == 6 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("  ?  ", 695, 465);
      processing.text("ELLIE", 830, 465);
      processing.text("  ?  ", 970, 465);
      processing.text("  ?  ", 1116, 465);
    }
    if(mostrarPersonaje3_2 || personaje == 7 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("  ?  ", 695, 465);
      processing.text("  ?  ", 825, 465);
      processing.text("PAUL", 970, 465);
      processing.text("  ?  ", 1116, 465);
    }
    if(mostrarPersonaje4_2 || personaje == 8 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("  ?  ", 695, 465);
      processing.text("  ?  ", 825, 465);
      processing.text("  ?  ", 970, 465);
      processing.text("BILLY", 1116, 465);
    }

  }

  function update(x, y) {

    if(overRect(rectCharacter1_X, rectCharacter1_Y, 93.5, 50)){
      rectOverCharacter1 = true;
    }
    else if (overRect(rectCharacter2_X, rectCharacter2_Y, 93.5, 50)) {
      rectOverCharacter2 = true;
    }
    else if (overRect(rectCharacter3_X, rectCharacter3_Y, 93.5, 50)) {
      rectOverCharacter3 = true;
    }
    else if(overRect(rectCharacter4_X, rectCharacter4_Y, 93.5, 50)){
      rectOverCharacter4 = true;
    }
    else if(overRect(rectCharacter5_X, rectCharacter5_Y, 93.5, 50)){
      rectOverCharacter5 = true;
    }
    else if (overRect(rectCharacter6_X, rectCharacter6_Y, 93.5, 50)) {
      rectOverCharacter6 = true;
    }
    else if (overRect(rectCharacter7_X, rectCharacter7_Y, 93.5, 50)) {
      rectOverCharacter7 = true;
    }
    else if(overRect(rectCharacter8_X, rectCharacter8_Y, 93.5, 50)){
      rectOverCharacter8 = true;
    }
    else if(overRect(rectColorRedX, rectColorRedY, 213, 50)){
      rectOverColorRed = true;
    }
    else if(overRect(rectColorBlueX, rectColorBlueY, 213, 50)){
      rectOverColorBlue = true;
    }
    else if(overRect(rectColorGreenX, rectColorGreenY, 213, 50)){
      rectOverColorGreen = true;
    }
    //else if(overRect(rectCuadroConfirmacion1X, rectCuadroConfirmacion1Y, 150, 100) && color != undefined){
    else if(overRect(rectCuadroConfirmacion1X, rectCuadroConfirmacion1Y, 150, 100)){
      rectOverCuadroConfirmacion1 = true;
    }
    //else if(overRect(rectCuadroConfirmacion2X, rectCuadroConfirmacion2Y, 150, 100)&& color != undefined){
    else if(overRect(rectCuadroConfirmacion2X, rectCuadroConfirmacion2Y, 150, 100)){
      rectOverCuadroConfirmacion2 = true;
    }
    if( overRect(rectCharacter1_X, rectCharacter1_Y, 93.5, 50) == false && 
      overRect(rectCharacter2_X, rectCharacter2_Y, 93.5, 50) == false && 
      overRect(rectCharacter3_X, rectCharacter3_Y, 93.5, 50) == false && 
      overRect(rectCharacter4_X, rectCharacter4_Y, 93.5, 50) == false &&
      overRect(rectCharacter5_X, rectCharacter5_Y, 93.5, 50) == false && 
      overRect(rectCharacter6_X, rectCharacter6_Y, 93.5, 50) == false && 
      overRect(rectCharacter7_X, rectCharacter7_Y, 93.5, 50) == false && 
      overRect(rectCharacter8_X, rectCharacter8_Y, 93.5, 50) == false &&
      overRect(rectColorRedX, rectColorRedY, 213, 50) == false &&
      overRect(rectColorBlueX, rectColorBlueY, 213, 50) == false &&
      overRect(rectColorGreenX, rectColorGreenY, 213, 50) == false &&
      overRect(rectCuadroConfirmacion1X, rectCuadroConfirmacion1Y, 150, 100) == false &&
      overRect(rectCuadroConfirmacion2X, rectCuadroConfirmacion2Y, 150, 100) == false
      ){

      rectOverCharacter1 = rectOverCharacter2 = rectOverCharacter3 = rectOverCharacter4 = 
    rectOverCharacter5 = rectOverCharacter6 = rectOverCharacter7 = rectOverCharacter8 = 
    rectOverColorRed = rectOverColorBlue = rectOverColorGreen = 
    rectOverCuadroConfirmacion1 = rectOverCuadroConfirmacion2 = false;
  }
} //update


processing.mousePressed = function() {

  if (rectOverCharacter1 && confirmado == false) {
    crearRectangulosColores = true;
    personaje = 1;
  }
  if (rectOverCharacter2 && confirmado == false) {    
   crearRectangulosColores = true;
   personaje = 2;
 }
 if (rectOverCharacter3 && confirmado == false) {
  crearRectangulosColores = true;
  personaje = 3;
}
if (rectOverCharacter4 && confirmado == false) {
  crearRectangulosColores = true;
  personaje = 4;
}
if (rectOverCharacter5 && confirmado2 == false) {
  crearRectangulosColores = true;
  personaje = 5;
}
if (rectOverCharacter6 && confirmado2 == false) {    
 crearRectangulosColores = true;
 personaje = 6;
}
if (rectOverCharacter7 && confirmado2 == false) {
  crearRectangulosColores = true;
  personaje = 7;
}
if (rectOverCharacter8 && confirmado2 == false) {
  crearRectangulosColores = true;
  personaje = 8;
}
if (rectOverCuadroConfirmacion1 && personaje <= 4 && confirmado == false && (color == "rojo" || color == "azul" || color == "verde")){

  personaje1 = personaje;
  color1 = color;
  dime(personaje1,color1);
  confirmado = true;
  color = undefined;

}
if (rectOverCuadroConfirmacion2 && personaje >= 5 && color != undefined){

  personaje2 = personaje;
  color2 = color;
  dime(personaje2,color2);
  confirmado2 = true;
  processing.exit();

}

if (rectOverColorRed) {
  color = "rojo";
  //dime(personaje,color);
}
if (rectOverColorBlue) {
  color = "azul";
  //dime(personaje,color);
}
if (rectOverColorGreen) {
  color = "verde";
  //dime(personaje,color);
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

