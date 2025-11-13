let Sound1;
let Sound2
let mySound
let balls = []
let num = 5
let interacted = false

function preload() {
  Sound1 = loadSound("assets/kick.mp3");
  Sound2 = loadSound("assets/beat.mp3")
  mySound = loadSound("assets/song.mp3")
}
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  for (let i = 0; i < num; i++) {
    balls.push(new Ball(100, height / 2))
  }
}

function mousePressed() {
  interacted = true
}

function draw() {
  background(0);
  if (interacted == true) {
    for (let i = 0; i < balls.length; i++) {
      balls[i].update()
      balls[i].display()
      balls[i].checkEdges()
    }

  } else {
    text("press the mouse!", width / 2, height / 2)
  }

  fill(255)
  text(balls.length, 20, 20)
}

class Ball {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-1, 1);
    this.size = random(20, 50)
  }
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  checkEdges() {
    if (this.x > width - 10 || this.x < 10) {
      this.xSpeed = - this.xSpeed
    }
    if (this.y > height - 10 || this.y < 10) {
      this.ySpeed = - this.ySpeed
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(255, 200);
    noStroke();
    circle(0, 0, this.size)
    pop();
  }
}