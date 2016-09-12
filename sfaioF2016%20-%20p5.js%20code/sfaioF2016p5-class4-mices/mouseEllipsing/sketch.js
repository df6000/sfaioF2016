var ellipseRadius = 100;
function setup() {
    createCanvas(800, 600);
    colorMode(RGB, 255);
    background(0);
    smooth();
    frameRate(60);
}
function draw() {
    noStroke();
    fill( (mouseX/width)*255, (mouseY/height)*255, 0, 25); // ( R, G, B, A )
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}