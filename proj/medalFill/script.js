var medal;

var medalX = 3;
var medalY = 10;
var fr;

function setup() {
   createCanvas(500,500);
   medal = loadImage("medal.png"); 
   
   
   }
   
function draw(){
   background(64);
   
   for( var medalNo = 0; medalNo < 10; medalNo++){
   medalFill(medalX, medalY);
   }

   
   }
   
function medalFill(medalX, medalY){
     
     medalX = random(0, width);
     medalY = random(0, height);
     image(medal,medalX,medalY,medal.width/10,medal.height/10);
     fr = 3 ;
     frameRate(fr);
  
  
  }