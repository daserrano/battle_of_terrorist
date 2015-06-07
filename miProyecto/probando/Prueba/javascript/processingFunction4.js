//PROCESSING
function sketchProc(processing) {

  var xpos;
  var ypos;
  var drag = 1;
  var transformer;
  var CreateBoxesColors = false;
  var character;
  var color;
  var whoProc;
  var rectCharacterX = [];
  var rectCharacterY = [];
  var rectOverCharacter = [];
  var rectOverConfirmation = [];
  var showCharacter = []
  var fill = [];
  var personaje1, personaje2;
  var confirmedCharacter1 = false;
  var confirmedCharacter2 = false;
  var rectDone = false;
  var rectDone2 = false;
  var rectColor = [];
  var rectConfirmedBox = []


      //SETUP Processing
      processing.size(1250, 650);
      processing.frameRate(60);
      transformer = processing.createFont("transformer"); 

      xpos = processing.width/1.5;
      ypos = processing.height/1.5;

      firstCharacter = processing.loadImage("images/game/178.png");
      secondCharacter = processing.loadImage("images/game/179.png");
      thirdCharacter = processing.loadImage("images/game/180.png");
      fourthCharacter = processing.loadImage("images/game/181.png");
      MOD = processing.loadImage("images/game/183.png");  
      logo = processing.loadImage("images/game/182.png")
      processing.textFont(transformer, 65);

      rectCharacterX[1] = 50;
      rectCharacterY[1] = 430
      rectCharacterX[2] = 193.5;
      rectCharacterY[2] = 430;
      rectCharacterX[3] = 337;
      rectCharacterY[3] = 430;
      rectCharacterX[4] = 480.5;
      rectCharacterY[4] = 430;
      rectCharacterX[5] = 675;
      rectCharacterY[5] = 430;
      rectCharacterX[6] = 810.5;
      rectCharacterY[6] = 430;
      rectCharacterX[7] = 954;
      rectCharacterY[7] = 430;
      rectCharacterX[8] = 1097.5;
      rectCharacterY[8] = 430;
      rectColor[1] = 230;
      rectColor[4] = 550;
      rectColor[2] = 518;
      rectColor[5] = 550;
      rectColor[3] = 806;
      rectColor[6] = 550;
      rectConfirmedBox[1] = 50;
      rectConfirmedBox[3] = 500;
      rectConfirmedBox[2] = 1045;
      rectConfirmedBox[4] = 500;

      

  //DRAW
  processing.draw = function() { 
    processing.background(0);
    processing.fill(204, 204, 0);
    processing.text("Elige un personaje", 310, 310);


    processing.image(logo, 475, 25, 300, 150, 7);
    processing.image(firstCharacter, 75, 350,50,70);
    processing.image(secondCharacter, 215, 350, 50, 70);
    processing.image(thirdCharacter, 360, 350, 50, 70);
    processing.image(fourthCharacter, 500, 350, 50, 70);
    processing.image(firstCharacter, 697, 350,50,70);
    processing.image(secondCharacter, 832, 350, 50, 70);
    processing.image(thirdCharacter, 976, 350, 50, 70);
    processing.image(fourthCharacter, 1119, 350, 50, 70);
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

    for(var i = 1; i<9; i++)
      createBoxes(i);
    

    function createBoxes(id){
      if(fill[id] == true){
        processing.fill(204, 204, 0);
        processing.rect(rectCharacterX[id], rectCharacterY[id], 93.5, 50, 10);
      }
      else{
        processing.noFill();
        processing.rect(rectCharacterX[id], rectCharacterY[id], 93.5, 50, 10);
      }



      if((character ==1 || character == 2 || character == 3 ||character == 4) && (
        (color == "rojo" || color == "azul" || color == "verde")|| color1 != undefined)){
        rectDone = true;
      if(fill[12] == true && confirmedCharacter1 == false){
        processing.fill(204, 204, 0);
        processing.rect(rectConfirmedBox[1], rectConfirmedBox[3], 150, 100, 10);
      }
      else{
        processing.noFill();
        processing.rect(rectConfirmedBox[1], rectConfirmedBox[3], 150, 100, 10);
      }
    }


    if((character >= 5 && (color == "rojo" || color == "azul" || color == "verde")) || confirmedCharacter2 == true && character > 4  /*color2 != undefined*//*&& confirmedCharacter1 == true*/){
     rectDone2 = true;
     if(fill[13] == true && confirmedCharacter2 == false){
      processing.fill(204, 204, 0);
      processing.rect(rectConfirmedBox[2], rectConfirmedBox[4], 150, 100, 10);
    }
    else{
      processing.noFill();
      processing.rect(rectConfirmedBox[2], rectConfirmedBox[4], 150, 100, 10);
    }
  }
}

update(processing.mouseX, processing.mouseY);

if (rectOverCharacter[1] ||character == 1) {
  showCharacter[1] = true;
  estoyEnUno = true;
  writeText();
  fill[1] = false;
} 
else
  fill[1] = true;
estoyEnUno = false;
showCharacter[1] = false;
if (rectOverCharacter[2] || character == 2) {
  showCharacter[2] = true;
  estoyEnUno = true;
  writeText();
  fill[2] = false;
} 
else
  fill[2] = true;
estoyEnUno = false;
showCharacter[2] = false;
if (rectOverCharacter[3] || character == 3 ) {
  showCharacter[3] = true;
  estoyEnUno = true;
  writeText();
  fill[3] = false;

//  processing.noFill();
} 
else
  fill[3] = true;
estoyEnUno = false;
showCharacter[3] = false;
if (rectOverCharacter[4] || character == 4) {
  showCharacter[4] = true;
  estoyEnUno = true;
  writeText();
  fill[4] = false;

//  processing.noFill();
} 
else
  fill[4] = true;
showCharacter[4] = false;
estoyEnUno = false;
if (rectOverCharacter[5] ||character == 5) {
  showCharacter[5] = true;
  estoyEnUno = true;
  writeText2();
  fill[5] = false;

 // processing.noFill();
} 
else
  fill[5] = true;
estoyEnUno = false;
showCharacter[5] = false;
if (rectOverCharacter[6] ||character == 6) {
  showCharacter[6] = true;
  estoyEnUno = true;
  writeText2();
  fill[6] = false;

 // processing.noFill();
} 
else
  fill[6] = true;
estoyEnUno = false;
showCharacter[6] = false;
if (rectOverCharacter[7] ||character == 7) {
  showCharacter[7] = true;
  estoyEnUno = true;
  writeText2();
  fill[7] = false;

 // processing.noFill();
} 
else
  fill[7] = true;
estoyEnUno = false;
showCharacter[7] = false;
if (rectOverCharacter[8] ||character == 8) {
  showCharacter[8] = true;
  estoyEnUno = true;
  writeText2();
  fill[8] = false;
} 
else
  fill[8] = true
//fill[8] = true
estoyEnUno = false;
showCharacter[8] = false;



if (rectOverConfirmation[1] || confirmedCharacter1 == true){
  fill[12] = false;
  estoyEnUno = true;
  processing.textFont(transformer, 25);
  if(confirmedCharacter1 == false && rectDone == true && color != color1 && color != color2)
    processing.text("CONFIRMAR", 60, 550);
  else if (confirmedCharacter1 == true && (character != 5 && character != 6 && character != 7 && character != 8)){
    processing.text("CONFIRMADO!\nJUGADOR 1", 55, 550);
    CreateBoxesColors = false;
      //dime(character, color);
    }
    else if(confirmedCharacter1 == false)
      processing.text("ERROR:COLOR\nYA ELEGIDO", 55, 550);
   //if(rectDone == true)
    //processing.noFill();
  }

  else
    fill[12] = true;
  estoyEnUno = false;




  if (rectOverConfirmation[2] ||confirmedCharacter2 == true){
    fill[13] = false;
    estoyEnUno = true;
    processing.textFont(transformer, 25);
    if(confirmedCharacter2 == false && rectDone2 == true && color != color1 && color != color2)
      processing.text("CONFIRMAR", 1055, 550);
     // else
     // processing.text("CONFIRMAR", 1055, 550);

      //if(color != color1 || color != color2)


      else if(confirmedCharacter2 == true && character > 4){
        processing.text("CONFIRMADO!\nJUGADOR 2", 1055, 550);
        CreateBoxesColors = false;


     // dime(character, color);

   }
   else if(confirmedCharacter2 == false)
     processing.text("ERROR:COLOR\nYA ELEGIDO", 1055, 550);

  // if(rectDone2 == true)
  // processing.noFill();
}
else
  fill[13] = true;
estoyEnUno = false;


if(CreateBoxesColors == true){
  if ((rectOverCharacter[9] || color == "rojo")){
   // if(character == 1 ||character == 2 ||character == 3 ||character == 4)
   //   writeText();
   // else
   //   writeText2();
   fill[9] = false;
//if(character == 1 || character == 2 || character == 3|| character == 4 && confirmedCharacter1 == false){
  if(personaje1 == undefined && character <5  || personaje2 == undefined && character >4){
  //if(confirmedCharacter1 == false/* && confirmedCharacter2 == false*/|| confirmedCharacter1 == true && (character == 5 || character == 6 || character == 7 || character == 8)   ){
    //processing.fill(235, 0, 0);
    processing.text(" ROJO ", 300, 585);
    //processing.noFill();

  }
} 
else 
  fill[9] = true;
if (rectOverCharacter[11] || color == "azul"){
  fill[11] = false;
  if(character == 1 ||character == 2 ||character == 3 ||character == 4)
    writeText();
  else
    writeText2();
  if(personaje1 == undefined && character <5  || personaje2 == undefined && character >4 ){    
 // if(confirmedCharacter1 == false || confirmedCharacter1 == true && (character == 5 || character == 6 || character == 7 || character == 8) ){    
 // processing.fill(0, 0, 235);
 processing.text(" AZUL ", 580, 585);
    //processing.noFill();
  }
} 
else
  fill[11] = true;
if (rectOverCharacter[10] || color == "verde"){
  fill[10] = false;
  if(character == 1 ||character == 2 ||character == 3 ||character == 4)
    writeText();
  else
    writeText2();
  //if(confirmedCharacter1 == false || confirmedCharacter1 == true && (character == 5 || character == 6 || character == 7 || character == 8) ){    
    if(personaje1 == undefined && character <5  || personaje2 == undefined && character >4 ){    
  //processing.fill(0, 210, 0);
  processing.text("VERDE ", 875, 585);
    //processing.noFill();
  }
} 
else
  fill[10] = true;
    }//Si no hemos pinchado
    //if(rectOverCharacter[1] == false && rectOverCharacter[2] == false && rectOverCharacter[3] == false && rectOverCharacter[4] == false && rectOverCharacter[5] == false && rectOverCharacter[6] == false && rectOverCharacter[7] == false && rectOverCharacter[8] == false && rectOverCharacter[9] == false && rectOverCharacter[11] == false && rectOverCharacter[10] == false && rectOverConfirmation[1] == false && rectOverConfirmation[2] == false){
      //processing.fill(204, 204, 0);
    //}
    //if(rectOverCharacter[8] == false)
    //  fill[8] = true;
    if(CreateBoxesColors == true){
      //revisionColores = true;
      if(fill[9] == true){
        processing.fill(204, 204, 0);
        processing.rect(rectColor[1], rectColor[4], 213, 50, 22);

      }
      else{
        processing.noFill();
        processing.rect(rectColor[1], rectColor[4], 213, 50, 22);


      }

      if(fill[11] == true){
        processing.fill(204, 204, 0);
        processing.rect(rectColor[2], rectColor[5], 213, 50, 22);

      }
      else{
        processing.noFill();
        processing.rect(rectColor[2], rectColor[5], 213, 50, 22);


      }

      if(fill[10] == true){
        processing.fill(204, 204, 0);

        processing.rect(rectColor[3], rectColor[6], 213, 50, 22);
      }
      else{
        processing.noFill();
        processing.rect(rectColor[3], rectColor[6], 213, 50, 22);



      }

    }

  };//draw

   //FUNCTIONS

   function writeText(){
    if(showCharacter[1] || character == 1 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("JACK", 70, 465);
      //processing.text("  ?  ", 210, 465);
     // processing.text("  ?  ", 354, 465);
      //processing.text("  ?  ", 495, 465);
    }
    if(showCharacter[2] || character == 2 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      //processing.text("  ?  ", 65, 465);
      processing.text("ELLIE", 210, 465);
      //processing.text("  ?  ", 354, 465);
     // processing.text("  ?  ", 495, 465);
   }
   if(showCharacter[3] || character == 3 && estoyEnUno == false){
    processing.textFont(transformer, 25);
      //processing.text("  ?  ", 210, 465);
      //processing.text("  ?  ", 65, 465);
      processing.text("PAUL", 354, 465);
     // processing.text("  ?  ", 495, 465);
   }
   if(showCharacter[4] || character == 4 && estoyEnUno == false){
    processing.textFont(transformer, 25);
      //processing.text("  ?  ", 65, 465);
      //processing.text("  ?  ", 210, 465);
      //processing.text("  ?  ", 354, 465);
      processing.text("BILLY", 500, 465);
    }

  }

  function writeText2(){

    if(showCharacter[5] || character == 5 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      processing.text("JACK", 695, 465);
      //processing.text("  ?  ", 825, 465);
      //processing.text("  ?  ", 970, 465);
      //processing.text("  ?  ", 1116, 465);
    }
    if(showCharacter[6] || character == 6 && estoyEnUno == false){
      processing.textFont(transformer, 25);
     // processing.text("  ?  ", 695, 465);
     processing.text("ELLIE", 830, 465);
      //processing.text("  ?  ", 970, 465);
      //processing.text("  ?  ", 1116, 465);
    }
    if(showCharacter[7] || character == 7 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      //processing.text("  ?  ", 695, 465);
      //processing.text("  ?  ", 825, 465);
      processing.text("PAUL", 970, 465);
      //processing.text("  ?  ", 1116, 465);
    }
    if(showCharacter[8] || character == 8 && estoyEnUno == false){
      processing.textFont(transformer, 25);
      //processing.text("  ?  ", 695, 465);
      //processing.text("  ?  ", 825, 465);
      //processing.text("  ?  ", 970, 465);
      processing.text("BILLY", 1116, 465);
    }

  }

  function update(x, y) {

    if(overRect(rectCharacterX[1], rectCharacterY[1], 93.5, 50)){
      rectOverCharacter[1] = true;
    }
    else if (overRect(rectCharacterX[2], rectCharacterY[2], 93.5, 50)) {
      rectOverCharacter[2] = true;
    }
    else if (overRect(rectCharacterX[3], rectCharacterY[3], 93.5, 50)) {
      rectOverCharacter[3] = true;
    }
    else if(overRect(rectCharacterX[4], rectCharacterY[4], 93.5, 50)){
      rectOverCharacter[4] = true;
    }
    else if(overRect(rectCharacterX[5], rectCharacterY[5], 93.5, 50)){
      rectOverCharacter[5] = true;
    }
    else if (overRect(rectCharacterX[6], rectCharacterY[6], 93.5, 50)) {
      rectOverCharacter[6] = true;
    }
    else if (overRect(rectCharacterX[7], rectCharacterY[7], 93.5, 50)) {
      rectOverCharacter[7] = true;
    }
    else if(overRect(rectCharacterX[8], rectCharacterY[8], 93.5, 50)){
      rectOverCharacter[8] = true;
    }
    else if(overRect(rectColor[1], rectColor[4], 213, 50) && character != undefined /*&& (character>4 && confirmedCharacter2 == false) || (character<5 && confirmedCharacter1 == false)*/){
      rectOverCharacter[9] = true;
    }
    else if(overRect(rectColor[2], rectColor[5], 213, 50) && character != undefined){
      rectOverCharacter[11] = true;
    }
    else if(overRect(rectColor[3], rectColor[6], 213, 50) && character != undefined){
      rectOverCharacter[10] = true;
    }
    //else if(overRect(rectConfirmedBox[1], rectConfirmedBox[3], 150, 100) && color != undefined){
      else if(overRect(rectConfirmedBox[1], rectConfirmedBox[3], 150, 100) && color != undefined){
        rectOverConfirmation[1] = true;
      }
    //else if(overRect(rectConfirmedBox[2], rectConfirmedBox[4], 150, 100)&& color != undefined){
      else if(overRect(rectConfirmedBox[2], rectConfirmedBox[4], 150, 100) && color != undefined){
        rectOverConfirmation[2] = true;
      }
      if( overRect(rectCharacterX[1], rectCharacterY[1], 93.5, 50) == false && 
        overRect(rectCharacterX[2], rectCharacterY[2], 93.5, 50) == false && 
        overRect(rectCharacterX[3], rectCharacterY[3], 93.5, 50) == false && 
        overRect(rectCharacterX[4], rectCharacterY[4], 93.5, 50) == false &&
        overRect(rectCharacterX[5], rectCharacterY[5], 93.5, 50) == false && 
        overRect(rectCharacterX[6], rectCharacterY[6], 93.5, 50) == false && 
        overRect(rectCharacterX[7], rectCharacterY[7], 93.5, 50) == false && 
        overRect(rectCharacterX[8], rectCharacterY[8], 93.5, 50) == false &&
        overRect(rectColor[1], rectColor[4], 213, 50) == false &&
        overRect(rectColor[2], rectColor[5], 213, 50) == false &&
        overRect(rectColor[3], rectColor[6], 213, 50) == false &&
        overRect(rectConfirmedBox[1], rectConfirmedBox[3], 150, 100) == false &&
        overRect(rectConfirmedBox[2], rectConfirmedBox[4], 150, 100) == false
        ){

        rectOverCharacter[1] = rectOverCharacter[2] = rectOverCharacter[3] = rectOverCharacter[4] = 
      rectOverCharacter[5] = rectOverCharacter[6] = rectOverCharacter[7] = rectOverCharacter[8] = 
      rectOverCharacter[9] = rectOverCharacter[11] = rectOverCharacter[10] = 
      rectOverConfirmation[1] = rectOverConfirmation[2] = false;
    }
} //update


processing.mousePressed = function() {

  if (rectOverCharacter[1] && confirmedCharacter1 == false) {
    CreateBoxesColors = true;
    character = 1;
      //llenar1 = false;

    }
    if (rectOverCharacter[2] && confirmedCharacter1 == false) {    
     CreateBoxesColors = true;
     character = 2;
   }
   if (rectOverCharacter[3] && confirmedCharacter1 == false) {
    CreateBoxesColors = true;
    character = 3;
  }
  if (rectOverCharacter[4] && confirmedCharacter1 == false) {
    CreateBoxesColors = true;
    character = 4;
  }
  if (rectOverCharacter[5] && confirmedCharacter2 == false) {
    CreateBoxesColors = true;
    character = 5;
  }
  if (rectOverCharacter[6] && confirmedCharacter2 == false) {    
   CreateBoxesColors = true;
   character = 6;
 }
 if (rectOverCharacter[7] && confirmedCharacter2 == false) {
  CreateBoxesColors = true;
  character = 7;
}
if (rectOverCharacter[8] && confirmedCharacter2 == false) {
  CreateBoxesColors = true;
  character = 8;
}

if (rectOverConfirmation[1] && character <= 4 && confirmedCharacter1 == false && (color == "rojo" || color == "azul" || color == "verde") && color != color2){
  whoProc = 1;
  personaje1 = character;
  color1 = color;
  dime(personaje1,color1,whoProc);
  confirmedCharacter1 = true;
  color = undefined;
  if(confirmedCharacter1 == true && confirmedCharacter2 == true)
    processing.exit();


}

if (rectOverConfirmation[2] && character >= 5 && color != undefined && color != color1){
  whoProc = 2;
  personaje2 = character;
  color2 = color;
  dime(personaje2,color2,whoProc);
  confirmedCharacter2 = true;

  color = undefined;

  if(confirmedCharacter1 == true && confirmedCharacter2 == true)
    processing.exit();

}

if (rectOverCharacter[9]) {
  color = "rojo";
  //dime(character,color);
}
if (rectOverCharacter[11]) {
  color = "azul";
  //dime(character,color);
}
if (rectOverCharacter[10]) {
  color = "verde";
  //dime(character,color);
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

