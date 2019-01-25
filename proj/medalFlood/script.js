var medal;

   
function setup() {
   createCanvas(700,480);
   medal = loadImage("medal.png");
   }


//drawtimer
var drawI = 0;
var floodI = 0;

function draw() {
   
   background(64);
//   medalFlood();
   
   for(floodI = 0; floodI < drawI; floodI++) {
      medalFlood();
      }
   
   if (drawI < 1000)
      drawI = drawI+20;
   
}
   
   
   
function medalFlood() {

   xPos = random(0, width);
   yPos = random(0, height);
   
   
   if(drawI > 0) {
      image(medal, random(0,width), random(0,height), medal.width/15, medal.height/15);
      }
      
   
      
      
      
      textSize(100);
      text(drawI, 200,200);
   
   
   
   
   frameRate(2);
   
   
   }