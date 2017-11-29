// piano for anxiety
// The midi notes of a scale
var notes = [ 54, 56, 58,60, 62, 64, 66, 68, 70, 72,74];
var osc;

function setup() {
  var note = createCanvas(windowWidth, windowHeight);
  note.parent("containerkeyboard");
  background(100);
  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.5);
    }, duration-50);
  }
}

//making the canvas responsive
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  // The width for each key
  var w = width / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var x = i * w;
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      // If we're clicking
      if (mouseIsPressed) {
        fill(26,188,156);
      // Or just rolling over
      } else {
        fill(150,200,20);
      }
    } else {
      fill(900);
    }

    // Draw the individual keys of the piano
    rect(x, 0, w-5, height-6);
  }

}

// When we click
function mousePressed() {
  // Map mouse to the key index
  var key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
}

// Fade it out when we release
function mouseReleased() {
  osc.fade(0.005,3);
}


