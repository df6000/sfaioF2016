var lines = [];
var lines2 = [];
var lines3 = [];
var lines4 = [];
var lines5 = [];
var lines6 = [];
var value = 0;
var currentMillis = 0;
var button;
var moreLines = false
var mask;
var osc;
var playing = false;

function setup() {
  createCanvas(800, 600);
  mask = loadImage("assets/mask.png");
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(200);
  osc.amp(0);
  osc.start();
  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  osc2.freq(100);
  osc2.amp(0);
  osc2.start();
  osc3 = new p5.Oscillator();
  osc3.setType('sine');
  osc3.freq(100);
  osc3.amp(0);
  osc3.start();


  for (var i = 0; i < 50; i++) {
    lines[i] = new Line(50, random(300), 20, 20, color(random(205), random(140), random(149), random(255)));
  }

  for (var j = 0; j < 50; j++) {
    lines2[j] = new Line(750, random(300), 780, 20, color(random(191), random(62), random(255), random(255)));
  }


  for (var k = 0; k < 50; k++) {
    lines3[k] = new Line(width / 2, random(300), 400, 580, color(random(152), random(112), random(245), random(255)));
  }

  for (var l = 0; l < 50; l++) {
    lines4[l] = new Line(width / 2, random(300), 400, 580, color(random(198), random(226), random(255), random(255)));
  }

  for (var m = 0; m < 50; m++) {
    lines5[m] = new Line(width / 2, random(300), 400, 20, color(random(191), random(62), random(149), random(255)));
  }

  for (var n = 0; n < 50; n++) {
    lines6[n] = new Line(width / 2, random(300), 400, 20, color(random(205), random(140), random(149), random(255)));
  }

  // button = createButton('hi');
  // button.position(400, 300);
  // button.mousePressed(addMoreLines);
  // //button.class('myButton');
}


function draw() {

  if (!playing) {
    playing = true;
  } else {
    osc.freq(300);
    osc.amp(0.4, 0.5);
  }

  if (currentMillis > 4500) {
    osc.freq(300);
    osc.amp(0.5, 0.5);
    osc2.freq(100);
    osc2.amp(0.5, 0.5);
  }

  if (currentMillis > 10500) {
    osc.freq(300);
    osc.amp(0.5, 0.5);
    osc2.freq(100);
    osc2.amp(0.5, 0.5);
    osc3.freq(200);
    osc3.amp(0.5, 0.5);
  }


  ///////follow the cursor/////// 
  if (currentMillis >= 17000) {
    image(mask, 0, 0);
    if (!playing) {
      osc.amp(0.5, 0.5);
      osc2.amp(0.5, 0.5);
      playing = true;
    } else {
      osc.amp(0.4, 0.4);
      osc.freq(mouseX / 2 + mouseY / 2);
      //osc2.amp(0.5, 0.5);
      //osc2.freq(mouseX / 2 + mouseY / 2);
      //osc3.amp(0.5, 0.5);
      //osc3.freq(mouseX / 2 + mouseY / 2);
    }


    for (var i = 0; i < lines.length; i++) {
      lines[i].changeColor();
      lines2[i].changeColor();
      lines3[i].changeColor();
      lines4[i].changeColor();
      lines5[i].changeColor();
      lines6[i].changeColor();
      lines[i].followMouse();
      lines[i].display();
      lines2[i].followMouse();
      lines2[i].display();
      lines3[i].followMouse();
      lines3[i].display();
      lines4[i].followMouse();
      lines4[i].display();
      lines5[i].followMouse();
      lines5[i].display();
      lines6[i].followMouse();
      lines6[i].display();

    }
  } else {
    background(0);
  }
  //end of if statement


  currentMillis = millis();

  //from up-middle to down-right
  for (var m = 0; m < lines5.length; m++) {
    lines5[m].moveDown();
    lines5[m].display();
  }

  //from up-middle to down-left
  for (var n = 0; n < lines6.length; n++) {
    lines6[n].moveDownNegative();
    lines6[n].display();
  }

  //from up-left to down-right
  for (var i = 0; i < lines.length; i++) {
    if (currentMillis > 4500) {
      lines[i].move();
      lines[i].display();
    }
  }
  //from up-right to down-left
  for (var j = 0; j < lines2.length; j++) {
    if (currentMillis > 4500) {
      lines2[j].moveNegative();
      lines2[j].display();
    }
  }

  //from down-middle to up-right
  for (var k = 0; k < lines3.length; k++) {
    if (currentMillis > 10500) {
      lines3[k].moveUp();
      lines3[k].display();
    }
  }

  //from down-middle to up-left
  for (var l = 0; l < lines4.length; l++) {
    if (currentMillis > 10500) {
      lines4[l].moveUpNegative();
      lines4[l].display();
    }
  }
}
///////////////////////end of draw function///////////////////////


function Line(x, y, xOrigin, yOrigin, inputColor) {
  this.x = x;
  this.y = y;
  this.xOrigin = xOrigin;
  this.yOrigin = yOrigin;
  this.colorValue = inputColor;

  this.display = function() {
    stroke(this.colorValue);
    strokeWeight(1);
    fill(value);
    line(this.x, this.y, this.xOrigin, this.yOrigin);
  }

  this.move = function() {
    this.x = this.x + random(0, 6);
    this.y = this.y + random(0, 4);
  }

  this.moveNegative = function() {
    this.x = this.x - random(0, 6);
    this.y = this.y + random(0, 4);
  }

  this.moveUp = function() {
    this.x = this.x + random(0, 6);
    this.y = this.y - random(0, 3);
  }

  this.moveUpNegative = function() {
    this.x = this.x - random(0, 6);
    this.y = this.y - random(0, 3);
  }

  this.moveDown = function() {
    this.x = this.x + random(0, 6);
    this.y = this.y + random(0, 1);
  }

  this.moveDownNegative = function() {
    this.x = this.x - random(0, 6);
    this.y = this.y + random(0, 1);
  }

  this.followMouse = function() {
    this.x = mouseX + random(0, 6);
    this.y = mouseY + random(0, 6);
  }

  this.changeColor = function() {
    this.colorValue = color(mouseX / 5 + random(100), 75, mouseX / 4 + random(200));
  }
}


/////////////BUTTON STUFF/////////////


// function addMoreLines() {
//   console.log('buttonpressed');

//   if (moreLines === false) {
//     button.html('add more lines');
//     //from up-middle to down-left

//     // lines[i].display



//     addMoreLines = true;
//   } else if (moreLines === true) {
//     button = createButton('add more lines');
//   }

// }