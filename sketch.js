var bangs = [10, 20, 30, 40];
var idk = ["wassup", "its lit", "I want food lol", "i made javone fall", "this was easier than i thought", "go cowboys!"];
var kjo = 0;

function setup(){
  createCanvas(600,400);
    background(244,66,232);
}

function draw(){
  
  
  
  ellipse(10, 50, 25, 25)
  
  var x = 0;
  while(x<560){
    fill(0);
    ellipse(x, 150, 25, 25)
    x = x + 60;
  }
  
if(mouseIsPressed){
    kj(mouseX,mouseY);
}
}

function kj (x,y){
    noStroke();
    fill(66,134,244);
    ellipse(mouseX,mouseY,25,25);
}