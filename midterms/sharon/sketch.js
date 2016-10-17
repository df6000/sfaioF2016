
var img;
var lightningsound;
var lightning;
var inceptionsound;
var inception;
var screamsound;
var scream;
var carsound;
var car;
var rainsound;
var ran;
// var buttons=[];


function preload() {
  img = loadImage("lightning.jpg");
  lightningsound = loadSound('sounds/Lightning Storm Sound Effect.mp3');
  inceptionsound = loadSound('sounds/Inception short Sound Effect.mp3');
  screamsound = loadSound('sounds/Scream Sound Effect.mp3');
 carsound = loadSound('sounds/Passing car horn sound effect.mp3');
 ransound = loadSound('sounds/Sound Effects Heavy Rain and Thunder.mp3');
}



function setup() {
  createCanvas(600, 400);
  background(0)
  smooth();
  noStroke();
  image(img, 25, 20);

   inception = new SoundButton(210, 250, 150);
  lightning = new SoundButton(340, 120, 50);

   car = new SoundButton(450, 250, 100);
   ran = new SoundButton(450, 120, 100);
  scream = new SoundButton(350, 330, 50);
}

function draw() {
  lightning.display(mouseX, mouseY);
  inception.display(mouseX, mouseY);
  scream.display(mouseX, mouseY);
  car.display(mouseX, mouseY);  
  ran.display(mouseX, mouseY);
  //console.log(inception.playSound);
}

function mousePressed() {
  //inceptionsound.play();
  //console.log("inception");
  if (inception.playSound===true&&inception.isPlaying===false) {
    inceptionsound.play();
    inception.isPlaying=true;
  }  
    else if (inception.playSound===true && inception.isPlaying===true) {
       inceptionsound.stop();
        inception.isPlaying=false;
    }

  if (car.playSound===true&&car.isPlaying===false) {
    carsound.play();
    car.isPlaying=true;
    console.log(carsound.playSound);
  }  
      else if (car.playSound===true && car.isPlaying===true) {
       carsound.stop();
        car.isPlaying=false;
    }
    
  if (scream.playSound===true&&scream.isPlaying===false) {
    screamsound.play();
    scream.isPlaying=true;
  }  
    else if (scream.playSound===true && scream.isPlaying===true) {
       screamsound.stop();
        scream.isPlaying=false;
    }

    if (ran.playSound===true && ran.isPlaying===false) {
    ransound.play();
    ran.isPlaying=true;
  }  
      else if (ran.playSound===true && ran.isPlaying===true) {
       ransound.stop();
        ran.isPlaying=false;
    }
    if (lightning.playSound===true&&lightning.isPlaying===false) {
    lightningsound.play();
    lightning.isPlaying=true;
  }  
      else if (lightning.playSound===true && lightning.isPlaying===true) {
       lightningsound.stop();
        lightning.isPlaying=false;
    }


}



