var radio;

const flowersURL = 'http://www.pngmart.com/files/4/Sunflower-PNG-Photo.png';

const birdsURL=
'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Birds-PNG/Humming_Bird_Transparent_PNG_Clipart_Picture.png?m=1399672800';

const cloudsURL=
'https://vignette.wikia.nocookie.net/dragonball/images/3/38/Clouds.png/revision/latest?cb=20130307042738';

var flowers_img;
var birds_img;
var clouds_img;
var current_img;

setup();

function preload(){
  flower_img = loadImage('url as string');
  birds_img = loadImage();
  clouds_img = loadImage();
}

function setup() {
  createCanvas(windowWidth, windowHeight*2.0/3.0);
  console.log('here testing')
  background(900);
  loadImage(flowersURL);
  loadImage(birdsURL);
  loadImage(cloudsURL);

  radio = createRadio();
  radio.option("birds");
  radio.option("flowers");
  radio.option("clouds");
  document.getElementById("defaultradio0-1").checked = true;
  radio.changed(changePicture);
  current_img = flowers_img;
}
//change picture captured
function changePicture(){
  if(radio.value() === "birds"){
      current_img = birds_img;
  }
  if(radio.value() === "flowers"){
      current_img = flowers_img;
  }
  if(radio.value() === "clouds"){
      current_img = clouds_img;
  }
}

//paste a picture every time the mouse is clicked
function mouseClicked(){
  if(current_img == null) current_img = flowers_img;
  if(mouseX>=0 && mouseX<width && mouseY>=0 && mouseY<height)
    image(current_img, mouseX - 37, mouseY - 50, 75, 100);
}