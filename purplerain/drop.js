class Drop {
  
    constructor(){
      this.x = Math.random() * Width;
      this.y = Math.random() * Height - Width;
      this.z = Math.random() * Z
      this.len = map(this.z, 0, Z, 10, 20)
      this.yspeed = map(this.z, 0, Z, 2, 5)
      
    }
      
    fall() {
      var grav = map(this.z, 0, Z, 0.01, 0.2);
      this.y = this.y + this.yspeed 
      this.yspeed = this.yspeed + grav
      
     if (this.y > 360){
      this.y = Math.random() * 500 - 600;
      this.yspeed = map(this.z, 0, Z, 2, 5)
     }
    }
    
    show(){
      var thick = map(this.z, 0, Z, 1, 2)
      strokeWeight(thick)
      stroke(138, 43, 226)
      line(this.x, this.y, this.x, this.y + this.len) 
    }
  }