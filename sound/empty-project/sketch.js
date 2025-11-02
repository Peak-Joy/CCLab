let Sound1;
let Sound2
let x = 11
let y = 200
let speed = 2
function preload() {
  Sound1 = loadSound("assets/kick.mp3");
  Sound2 = loadSound("assets/beat.mp3")
}
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220);
  fill(0);
  circle(x, y, 20);
  x = x + speed;
  if (x > 390) {
    speed = -speed;
    Sound1.play();
  }
  if (x < 10) {
    speed = -speed;
    Sound2.play();
  }
}
function mousePressed() {
  if (mySound.isPlaying() == false) {
    mySound.play();
  } else {
    mySound.pause();
  }
}