//PROCESSING
function sketchProc(processing) {

  var xpos;
  var ypos;
  var drag = 1;
  var transformer;
  var CreateBoxesColors = false;
  var character;
  var colorChoosed;
  var whoProc;
  var rectCharacterX = [];
  var rectCharacterY = [];
  var rectOverCharacter = [];
  var rectOverConfirmation = [];
  var showCharacter = []
  var fill = [];
  var confirmedCharacter = [];
  var rectDone = false;
  var rectDone2 = false;
  var rectColor = [];
  var rectConfirmedBox = []
  var color = [];
  var personaje = [];

  for(var i = 1; i<3; i++)
    confirmedCharacter[i] = false;

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
          (colorChoosed == "rojo" || colorChoosed == "azul" || colorChoosed == "verde")|| color[1] != undefined)){
          rectDone = true;
        if(fill[12] == true && confirmedCharacter[1] == false){
          processing.fill(204, 204, 0);
          processing.rect(rectConfirmedBox[1], rectConfirmedBox[3], 150, 100, 10);
        }
        else{
          processing.noFill();
          processing.rect(rectConfirmedBox[1], rectConfirmedBox[3], 150, 100, 10);
        }
      }


      if((character >= 5 && (colorChoosed == "rojo" || colorChoosed == "azul" || colorChoosed == "verde")) || confirmedCharacter[2] == true && character > 4  /*color[2] != undefined*//*&& confirmedCharacter[1] == true*/){
       rectDone2 = true;
       if(fill[13] == true && confirmedCharacter[2] == false){
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

  function showMeRectOverCharacter(id){

    if(rectOverCharacter[id] || character == id){
     showCharacter[id] = true;
     estoyEnUno = true;
     writeGeneral();
     fill[id] = false;
   }
   else
    fill[id] = true;

  estoyEnUno = false
  showCharacter[id] = false;

};

for(var i = 1; i<9; i++)
  showMeRectOverCharacter(i);

//---------------------------------------------------------------------//



if (rectOverConfirmation[1] || confirmedCharacter[1] == true){
  fill[12] = false;
  estoyEnUno = true;
  processing.textFont(transformer, 25);
  if(confirmedCharacter[1] == false && rectDone == true && colorChoosed != color[1] && colorChoosed != color[2])
    processing.text("CONFIRMAR", 60, 550);
  else if (confirmedCharacter[1] == true && (character != 5 && character != 6 && character != 7 && character != 8)){
    processing.text("CONFIRMADO!\nJUGADOR 1", 55, 550);
    CreateBoxesColors = false;
  }
  else if(confirmedCharacter[1] == false)
    processing.text("ERROR:COLOR\nYA ELEGIDO", 55, 550);
}

else
  fill[12] = true;
estoyEnUno = false;




if (rectOverConfirmation[2] ||confirmedCharacter[2] == true){
  fill[13] = false;
  estoyEnUno = true;
  processing.textFont(transformer, 25);
  if(confirmedCharacter[2] == false && rectDone2 == true && colorChoosed != color[1] && colorChoosed != color[2])
    processing.text("CONFIRMAR", 1055, 550);



  else if(confirmedCharacter[2] == true && character > 4){
    processing.text("CONFIRMADO!\nJUGADOR 2", 1055, 550);
    CreateBoxesColors = false;



  }
  else if(confirmedCharacter[2] == false)
   processing.text("ERROR:COLOR\nYA ELEGIDO", 1055, 550);

}
else
  fill[13] = true;
estoyEnUno = false;

//---------------------------------------------------------------------//




if(CreateBoxesColors == true){
  if ((rectOverCharacter[9] || colorChoosed == "rojo")){
   fill[9] = false;
   if(personaje[1] == undefined && character <5  || personaje[2] == undefined && character >4){
    processing.text(" ROJO ", 300, 585);

  }
} 
else 
  fill[9] = true;


if (rectOverCharacter[11] || colorChoosed == "verde"){
  fill[11] = false;
 // if(character == 1 ||character == 2 ||character == 3 ||character == 4)
   // writeText();
   writeGeneral();

  //else
  //  writeText2();
  if(personaje[1] == undefined && character <5  || personaje[2] == undefined && character >4 ){    
    processing.text("VERDE ", 875, 585);
  }
} 
else
  fill[11] = true;


if (rectOverCharacter[10] || colorChoosed == "azul"){
  fill[10] = false;
  //if(character == 1 ||character == 2 ||character == 3 ||character == 4)
  writeGeneral();
    //writeText();
  //else
  //  writeText2();
  if(personaje[1] == undefined && character <5  || personaje[2] == undefined && character >4 ){    
   processing.text(" AZUL ", 580, 585);
 }
} 
else
  fill[10] = true;

}

//-----------------------------------------------------------------------


function creatingBoxColor(){
  for(var i = 9; i < 12; i++){
    if(fill[i] == true){
      processing.fill(204, 204, 0);
      processing.rect(rectColor[i-8], rectColor[i-5], 213, 50, 22);
    }
    else{
      processing.noFill();
      processing.rect(rectColor[i-8], rectColor[i-5], 213, 50, 22);
    }
  }
}

if(CreateBoxesColors == true)
  creatingBoxColor();


};

function writeGeneral(){
  for(var id = 1; id<9; id++){
    if(showCharacter[id] || character == id && estoyEnUno == false){
      processing.textFont(transformer, 25);
      switch(id){
        case 1:
        processing.text("JACK", 70, 465);
        break;
        case 2:
        processing.text("ELLIE", 210, 465);
        break;
        case 3:    
        processing.text("PAUL", 354, 465);
        break;
        case 4:
        processing.text("BILLY", 500, 465);
        break;
        case 5:
        processing.text("JACK", 695, 465);
        break;
        case 6:
        processing.text("ELLIE", 830, 465);
        break;
        case 7:
        processing.text("PAUL", 970, 465);
        break;
        case 8:
        processing.text("BILLY", 1116, 465);
        break;
      }
    }
  }
}





function update(x, y) {

  function setRectOver(){
    for(var i=1; i<9; i++){
      if(overRect(rectCharacterX[i], rectCharacterY[i], 93.5, 50)){
        rectOverCharacter[i] = true;
      }
      else
        rectOverCharacter[i] = false;
    }
    for(var id=1; id<4; id++){
      if(overRect(rectColor[id], rectColor[id+3], 213, 50) && character != undefined){
        rectOverCharacter[id+8] = true;
      }
      else
        rectOverCharacter[id+8] = false;
    }
    for(var id=1; id<3; id++){
     if(overRect(rectConfirmedBox[id], rectConfirmedBox[id+2], 150, 100) && colorChoosed != undefined){
      rectOverConfirmation[id] = true;
    }
    else
      rectOverConfirmation[id] = false;
  }

}

setRectOver();

} //update


processing.mousePressed = function() {


  function confirmationValues(id){
    whoProc = id;
    personaje[id] = character;
    color[id] = colorChoosed;
    dime(personaje[id], color[id], whoProc);
    confirmedCharacter[id] = true;
    colorChoosed = undefined;
    if(confirmedCharacter[1] == true && confirmedCharacter[2] == true)
      processing.exit();
  }

  function assignment(){
    for(var i = 1; i<9; i++){
      if(i < 5){
        if(rectOverCharacter[i] && confirmedCharacter[1] == false){
          CreateBoxesColors = true;
          character = i;
        }
      }
      else{
        if (rectOverCharacter[i] && confirmedCharacter[2] == false) {
          CreateBoxesColors = true;
          character = i;
        }
      }
    }
    if (rectOverConfirmation[1] && character <= 4 && colorChoosed != undefined && colorChoosed != color[2]){
     confirmationValues(1);
   }
   if (rectOverConfirmation[2] && character >= 5 && colorChoosed != undefined && colorChoosed != color[1]){
     confirmationValues(2);
   }
   if (rectOverCharacter[9]){
    colorChoosed = "rojo";
  }
  if (rectOverCharacter[10]){
    colorChoosed = "azul";
  }
  if (rectOverCharacter[11]){
    colorChoosed = "verde";
  }
}

assignment();

}




function overRect( x,  y,  width,  height)  {
 if (processing.mouseX >= x && processing.mouseX <= x+width && 
  processing.mouseY >= y && processing.mouseY <= y+height) {
  return true;
} 
else {
  return false;
}
}
}

var canvas;
var sketch;
var p;
function cargarCanvas(){
  canvas = document.getElementById("canvas1");
  p = new Processing(canvas, sketchProc);
  sketch = p.externals.sketch; 
  sketch.options.crispLines = true;
}

