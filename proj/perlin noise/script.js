let yoff = 0.0; 
var filler = 800;

function setup() {
  createCanvas(700, 480);
}

function draw() {
  background(51);

  fill(255);
  
  beginShape();

  let xoff = 0.0; 
  for (let x = 0; x <= width; x += 20) {
    
    let y = map(noise(xoff, yoff), 0, 1, filler, 300);

    
    vertex(x, y);
    
    xoff += 0.05;
  }
  
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  if(filler>-1500){
     filler = filler-2;
     }
}
