var bg, poo;
 
function preload()
{
  // load images
  happy = loadImage("unhappy.jpg");
  poopoo = loadImage("poopoopoo.png");
}
 
function setup() 
{
  // set canvas size
  createCanvas(1500, 1050);
  
  // hide mouse cursor
  noCursor();
}
 
function draw() 
{
  background(255);
 
  // display background image
  image(happy, 0, 0); 
  
  // display poo
  image(poopoo, mouseX, mouseY);
}
  