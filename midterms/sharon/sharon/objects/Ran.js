
function Ran(x_, y_, r_, d_) {

  var x = x_;
  var y = y_;
  var r = r_;
  var d = d_;
  

  this.contains = function(mx, my) {
    if (dist(mx, my, x, y) < r) {
      return true;
    } else {
      return false;
    }
    
  };
 
  this.display = function(mx, my) {
    // noFill();
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipse(x, y, r, d);
  };
};

