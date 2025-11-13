let fireworks = []
let num = 30

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < num; i++) {
    fireworks.push(new Firework(width / 2, height / 2))
  }
  print(fireworks)
}

function draw() {
  background(0);

  for (let i = 0; i < fireworks.length; i++) {
    fireworks[i].update()
    fireworks[i].display()

  }

  if (mouseIsPressed) {
    for (let i = 0; i < 3; i++) {
      fireworks.push(new Firework(mouseX, mouseY))
    }
  }

  for (i = fireworks.length - 1; i >= 0; i--) {
    let byeFirework = fireworks[i]
    if (byeFirework.isOutside) {
      fireworks.splice(i, 1)
    }
  }

  if (fireworks.length > 250) {
    fireworks.splice(0, 3)
  }

  fill(255)
  text(fireworks.length, 20, 20)
}
class Firework {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    this.hue = random(0, 360);

    this.speedX = random(-3, 3);
    this.speedY = random(3, -3);

    this.isOutside = false

  }
  update() {

    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY += 0.1
    this.speedX *= 0.99

    this.edgeReset()

  }

  edgeReset() {
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.isOutside = true
    }
  }



  display() {

    push();
    translate(this.x, this.y);

    colorMode(HSB)
    fill(this.hue, 80, 100)
    noStroke();
    circle(0, 0, this.size);

    pop();
  }
}