function SoundButton(x_, y_, r_) {
  this.x = x_;
  this.y = y_;
  this.r = r_;
  // this.d = d_;
  this.playSound=false;
  this.isPlaying=false;
  
  
  this.contains = function(mx, my) {
    if (dist(mx, my, this.x, this.y) < this.r/2) {
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
      fill(200,20);
  // noFill();
     } else {
       noFill()
      // fill(175,20);
    }
    // stroke(0);
    // strokeWeight(4);
     ellipse(this.x, this.y, this.r, this.r);

  };



 };





