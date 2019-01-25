var usha;
   
function setup() {
   createCanvas(700,480);
   usha = createImg("usha.gif");
   }


function draw(){
   background(200);
   runner();
   header();
   
   }
   
   
//usha vars
var ushaStart = -200;
var ushaEnd = 150;


//header vars
var headerStart = 700;
var headerEnd = -11000;


function runner(){
   usha.position(ushaStart,150);
   
   
   if (ushaStart < ushaEnd)
      ushaStart++;
  }
   
   


function header(){
   
   textSize(60);
   text('ONE-THOUSAND-PLUS AWARDS          101 INTERNATIONAL MEDALS            PADMASHREE AWARDEE            THE YOUNGEST SPRINTER EVER TO ENTER 1980 OLYMPICS AT THE AGE OF 16            TRACK RECORDS STILL UNBEATEN BY ANY ASIAN MAN OR WOMAN            PRODUCED TWO-OLYMPIANS AND EIGHT-INTERNATIONAL-ATHELETES AFTER RETIREMENT            THE PAYYOLI EXPRESS OF INDIA...                         P.T USHA!!',headerStart,100);
   if(headerStart > headerEnd)
      headerStart = headerStart-3;
   
   }