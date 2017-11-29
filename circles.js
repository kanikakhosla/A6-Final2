var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0
}





function setup() {
  var cir = createCanvas(windowWidth, windowHeight);
  cir.parent("containercircles");
  background (1000);
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
spot.x = random(0,width);
spot.y = random(0,height);
col.r = random(100,255);
col.g = random(200,255);
col.b = random();
noStroke();
fill (col.r,col.g,col.b,100);
rect(spot.x,spot.y,10,10);
ellipse(spot.x,spot.y,20,20);

}
