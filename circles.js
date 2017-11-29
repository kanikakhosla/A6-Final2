//starting location
var spot = {
    x: 100,
    y: 50
}
//starting colour
var col = {
    r: 255,
    g: 0,
    b: 0
}


function setup() {
    //create canvas width and height of canvas
    var cir = createCanvas(windowWidth, windowHeight);
    //parent element in anxious.html
    cir.parent("containercircles");
    background (1000);
}

//responsive element
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    //randomize starting spot
    spot.x = random(0,width);
    spot.y = random(0,height);
    //randomize colour
    col.r = random(100,255);
    col.g = random(200,255);
    col.b = random();
    noStroke();
    //create shapes
    fill (col.r,col.g,col.b,100);
    rect(spot.x,spot.y,10,10);
    ellipse(spot.x,spot.y,20,20);

}
