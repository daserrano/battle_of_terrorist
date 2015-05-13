//PROCESSING
function sketchProc(processing) {

  var xpos;
  var ypos;
  var drag = 1;
  var can = false;
  var rectX1, rectY1, rectX2, rectY2, rectX3, rectY3, rectX4, rectY4, rectJUGARX, rectJUGARY;
  var rectOver = false, rectOver1 = false, rectOver2 = false, rectOver3 = false, rectOver4 = false, texto = false;
  var transformer;
  var hapasado;


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
      rectJUGARX = 325; 
      rectJUGARY = 550; 


  //DRAW
  processing.draw = function() { 
    processing.background(0);
    processing.noCursor();
    processing.text("Elige un personaje", 310, 310);

    processing.image(MOD, xpos, ypos);
    processing.image(logo, 475, 25, 300, 150, 7);
    processing.image(primerPersonaje, 185, 350,50,70);
    processing.image(segundoPersonaje, 465, 350, 50, 70);
    processing.image(tercerPersonaje, 740, 350, 50, 70);
    processing.image(cuartoPersonaje, 1020, 350, 50, 70);

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
      processing.text("JACK", 145, 475);
      processing.text("  ?  ", 405, 475);
      processing.text("  ?  ", 685, 475);
      processing.text("  ?  ", 965, 475);
      processing.noFill();
    } 
    if (rectOver2) {
      processing.text("  ?  ", 125, 475);
      processing.text("ELLIE", 415, 475);
      processing.text("  ?  ", 685, 475);
      processing.text("  ?  ", 965, 475);
      processing.noFill();
    } 
    if (rectOver3) {
      processing.text("  ?  ", 125, 475);
      processing.text("  ?  ", 405, 475);
      processing.text("PAUL", 705, 475);
      processing.text("  ?  ", 965, 475);
      processing.noFill();
    } 
    if (rectOver4) {
      processing.text("  ?  ", 125, 475);
      processing.text("  ?  ", 405, 475);
      processing.text("  ?  ", 685, 475);
      processing.text("BILLY", 980, 475);
      processing.noFill();
    } 

    if(rectOver1 == false && rectOver2 == false && rectOver3 == false && rectOver4 == false){
      processing.fill(204, 204, 0);
    }
if(hapasado == 1){
    processing.rect(600, 550, 100, 50, 10);


}



  };//draw

   //FUNCTIONS


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
    if( overRect(rectX1, rectY1, 160, 50) == false && 
      overRect(rectX2, rectY2, 160, 50) == false && 
      overRect(rectX3, rectY3, 160, 50) == false && 
      overRect(rectX4, rectY4, 160, 50) == false){

      rectOver1 = rectOver2 = rectOver3 = rectOver4 = false;
  }
} //update


processing.mousePressed = function() {

  if (rectOver1) {
    processing.exit();
    processing.noLoop();
    can = true;
    canvas.width = canvas.width;
    prueba();
    //World(canvas);
  }
  if (rectOver2) {
    //processing.exit();
    //processing.noLoop();
    hapasado = 1;
    processing.redraw();
    //World(canvas);
  }
  if (rectOver3) {
    processing.exit();
    processing.noLoop();
    //World(canvas);
  }
  if (rectOver4) {
    processing.exit();
    processing.noLoop();
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