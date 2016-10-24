var bg, poopoo;
var next=0;
var poops=[];
 
function preload()
{
  // load images
  happy = loadImage("unhappy.jpg");
  poopoo = loadImage("poopoopoo.png");
}
 
function setup() 
{
  
  
  // set canvas size
  createCanvas(1000, 800);
  
  // hide mouse cursor
  noCursor();
}

function draw() {
  //backround(255);
  image(happy, 0, 0);
  

     for (var i=0; i<poops.length;i++){
     poops[i].display();
     }

  //display poo
  image(poopoo,mouseX, mouseY);
  
  console.log(poops.length);
}

 
 function mousePressed() {
   
   poops[next]= new Poop(mouseX,mouseY);
   next=next+1;
 }
 
 
 
function Poop (x,y) {
  this.x=x;
  this.y=y;
  this.img=loadImage("poopoopoo.png");
  
  this.display=function() {
    image(this.img, this.x,this.y);
  }
}
 