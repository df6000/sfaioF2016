var bubbles = [];
var img = [];
var z  = 0;
var counter=0;
var bg;
var osc;


function preload() {
  for (var i = 0; i < 13; i++){
  img[i] = loadImage('image/plane-' + i + '.jpg');
  bg = loadImage('image/clouds.jpg');
  }    
}
function setup() {
  createCanvas(1000, 900);
   osc = new p5.Oscillator();
   osc.setType('sine');
   //osc.freq(240);
   //osc.amp(0);
   //osc.start();


}

function mousePressed() {
    //var r = floor(random(0, img.length));
    var b = (new Bubble(mouseX, mouseY, img[counter]));
    bubbles.push(b);
    
    if(counter < 12) {
    counter=counter+1;
    }
    else {
    counter=0;
    }
  osc = new p5.Oscillator();
   osc.setType('sine');
   //osc.freq(540);
   //osc.amp(5);
   osc.start();

    
}


function draw() {
  background(bg);
  
  
  for (var i = bubbles.length-1; i>=0; i--) {
    bubbles[i].display();
    //console.log(bubbles[i].x);
    bubbles[i].xoff=bubbles[i].xoff+bubbles[i].inc;
    bubbles[i].move();
    
    
  }
}

function Bubble(x,y,thisImage,freqIn) {
  this.x = x;
  this.y = y;
  this.myImage = thisImage;
  this.inc = random(0.0001,0.003);
  this.xoff=random(100);
  this.osc = new p5.Oscillator(); 
  this.osc.setType('saw');
  //this.freq=freqIn*8;
  //this.amp=1;

  //this.osc.freq(240);
  //this.osc.amp(1);
  
  this.display = function() {
    // stroke(255);
    // rect(this.x, this.y, 30, 20);
   image(thisImage, this.x, this.y);
  
  }

  this.move = function() {
    // this.xoff += this.inc;
    this.x = map(noise(this.xoff), 0, 1, 0, width-200);
    this.y = map(noise(this.xoff+0.5),0,1,0,height);
    //z = map(noise(xoff+0.3*100),0,1,0,random(255));
    //this.osc.start();
    var freq = map(this.x, 0, width, 40, 880);
    osc.freq(freq);

 var amp = map(this.y, 0, height, 1, .01);
  osc.amp(amp);
  }

}


  
