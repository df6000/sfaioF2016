var xoff = 0;
var inc = 0.01;
var anBlob;
var xBlob=100, yBlob=100;
var blobRadius=50;
var dots=[];
var blobs=[];
var currentDotsLength;
var blobLives=false;
var eatDots=true;
var playing=false;


function preload(){
  osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(240);
    osc.amp();
    osc.start();
    osc.phase(1);
}

function setup(){
  createCanvas(725,725);
  background(200);
  

}

function draw() {
  background(200);
  
  textSize(22);
  text("Do Not Click This", 10, 710);
  fill(200);
 
  xoff += inc;
  
  keyPressedOne();     
  eatDots=false;
  
  
  for(var i=0;i<dots.length;i++) {
    dots[i].display();

  if(blobLives===true){
    anBlob.display();
    if((anBlob.x<=dots[i].x+20) && (dots[i].x<=(anBlob.x+35)) && (anBlob.y<=(dots[i].y+10)) && (dots[i].y<=(anBlob.y+35))){
    dots[i].makeGrey();
    eatDots=true
    anBlob.resize();
    anBlob.blobSound();
    
      }
    }
  }
}

function mousePressed() {
  anBlob=new Blob(xBlob,yBlob,blobRadius);
  blobLives=true;
  playing=true;
}




function Dot(x,y,radius,colorIn) {
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.colorValue=colorIn;
  
  this.display = function() {
      fill(this.colorValue);
      ellipse(this.x,this.y,this.radius);
      noStroke();
    
  }
  
  this.makeGrey = function() {
    noStroke();
    this.colorValue=200;
  
    
  }
  
}


function Blob(x,y,blobRadius){
   this.x=x;
   this.y=y;
   this.blobRadius=blobRadius;
   this.colorIs=color('white');
  
  this.display = function() {
     this.x = map(noise(xoff), 0, 1, 0, width);
     this.y = map(noise(xoff+1),0,1,0,height);
   
    fill(this.colorIs); 
    noStroke();
    ellipse(this.x,this.y,this.blobRadius);
  }
  
  this.resize = function(){
    if(eatDots===true){
      fill('white');
      noStroke();
      this.blobRadius=this.blobRadius+.05;
      ellipse(this.x, this.y, this.blobRadius)
    }
    
  this.blobSound = function(){
      if (!playing) {
      // ramp amplitude to 0.5 over 0.1 seconds
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255,0,255);
      }
    } 
  }
}


function keyPressedOne(){
  if (keyIsPressed===true) 
    if (key == 'a'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF4F00')));
  }
    else if (key == 'A'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFA200')));
  }
    else if (key == 'b'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFF473')));
  }
    else if (key == 'B'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF9700')));
  }
    else if (key == 'c'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#A63400')));
  }   
    else if (key == 'C'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFC140')));
  }
    else if (key == 'd'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#9B6AD6')));
  }  
    else if (key == 'D'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFAD00')));
  } 
    else if (key == 'e'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF7B40')));
  }
    else if (key == 'E'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF7A00')));
  }  
    else if (key == 'f'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF9373')));
  }  
    else if (key == 'F'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF9500')));
  }  
    else if (key == 'g'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF9400')));
  }  
    else if (key == 'G'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFB040')));
  }  
    else if (key == 'h'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#BFB330')));
  }  
    else if (key == 'H'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF8900')));
  }  
    else if (key == 'i'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#A66000')));
  }  
    else if (key == 'I'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF7F00')));
  }  
    else if (key == 'j'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFAE40')));
  }  
    else if (key == 'J'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF9F40')));
  }  
    else if (key == 'k'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFC473')));
  }  
    else if (key == 'K'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#A64300')));
  }  
    else if (key == 'l'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#085FA5')));
  }  
    else if (key == 'L'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#A65200')));
  }  
    else if (key == 'm'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#255478')));
  }  
    else if (key == 'M'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF5C00')));
  }  
    else if (key == 'n'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#043C6B')));
  }  
    else if (key == 'N'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF8540')));
  }  
    else if (key == 'o'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#3F8FD2')));
  }  
    else if (key == 'O'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#A63100')));
  }  
    else if (key == 'p'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#66A1D2')));
  }  
    else if (key == 'P'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#A64500')));
  }  
    else if (key == 'q'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#00AC6B')));
  }  
    else if (key == 'Q'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF8540')));
  }  
    else if (key == 'r'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#20815D')));
  }  
    else if (key == 'R'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF7C00')));
  }  
    else if (key == 's'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#007046')));
  }  
    else if (key == 'S'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF9000')));
  }  
    else if (key == 't'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#35D699')));
  }  
    else if (key == 'T'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFA045')));
  }  
    else if (key == 'u'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#60D6A9')));
  }  
    else if (key == 'U'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFBC7D')));
  }  
    else if (key == 'v'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#560EAD')));
  }  
    else if (key == 'V'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF9845')));
  }  
    else if (key == 'w'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#512882')));
  }  
    else if (key == 'W'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FF7100')));
  }  
    else if (key == 'x'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#8643D6')));
  }  
    else if (key == 'X'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#C1852F')));
  }  
    else if (key == 'y'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#360570')));
  }  
    else if (key == 'Y'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFC97D')));
  }  
    else if (key == 'z'){
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFF040')));
  }  
    else if (key == 'Z'){ 
    dots.push(new Dot(random(25,700),random(25,675),25,color('#FFC645')));
  }
}


