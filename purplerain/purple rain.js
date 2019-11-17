const DropsCnt = 1000
const Width = 640
const Height = 320
const Z = 20


var drops = new Array(DropsCnt)
  
  
  function setup() {
    for(var i = 0; i < drops.length; i++){
      drops[i] = new Drop() 
    }
    createCanvas(Width, Height);
  }
  
  function draw() {
    background(220, 230, 250);
     
    for(var i = 0; i < drops.length; i++){
      drops[i].show()
      drops[i].fall()
    }
  }
  
  
  