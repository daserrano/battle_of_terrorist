/* @pjs preload="1.png"; */
void setup()
{
  size(200,200);
 
  PFont fontA = loadFont("courier");
  textFont(fontA, 14);
   PImage im = loadImage("1.png");
 background(im);  
}

void draw(){  

 
  text("Hello Web!",20,20);
  println("Hello ErrorLog!");
 

}