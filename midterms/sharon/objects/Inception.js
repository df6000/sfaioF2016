function Inception(x_, y_, r_, d_) {
  var x = x_;
  var y = y_;
  var r = r_;
  var d = d_;
  this.playSound=false;
  
  
  this.contains = function(mx, my) {
    if (dist(mx, my, x, y) < r/2) {
      this.playSound=true;
      return true;
    } else {
       this.playSound=false;
      return false;
    }
    
  };
  this.display = function(mx, my) {
    // noFill();
    if (this.contains(mx, my)) {
      fill(color('red'));

    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipse(x, y, r, r);
  };



};





