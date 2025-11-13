//let cloudX = [100, 300, 600];
//let cloudY = [100, 400, 200]
let cloud
let clouds = []


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  for (let i = 0; i < 10; i++) {
    clouds[i] = new Cloud(random(30, 770), random(30, 470), random(60, 120))
  }
  print(clouds)
}


function draw() {
  background(150, 125, 255);
  //cloud.display()

  for (let i = 0; i < clouds.length; i++) {
    clouds[i].move()
    clouds[i].display()
  }
  //for (let i = 0; i < cloudX.length; i++) {
  // drawCloud(cloudX[i], cloudY[i], 100)
}



function drawCloud(x, y, s) {
  push()
  translate(x, y)
  // rotate(frameCount * 0.05)
  noStroke()
  fill(200, 220, 150)
  circle(0, 0, s)

  for (let a = 0; a < 2 * PI; a += PI / 4) {
    push();
    rotate(a);
    circle(s * 0.4, s * 0.1, s * 0.5);
    pop();
  }

  // blushes
  noStroke()
  fill(255, 10, 255, 100)
  ellipse(0 - s / 4, 0 + s / 20, s / 8, s / 10)
  ellipse(0 + s / 4, 0 + s / 20, s / 8, s / 10)

  // eyes
  noStroke();
  fill(0);
  circle(0 - s / 5, 0, s / 10);
  circle(0 + s / 5, 0, s / 10);

  stroke(0)
  noFill()
  strokeWeight(s / 20)
  arc(0, 0 + s / 10, s / 5, s / 10, 0, PI)
  pop()
}

class Cloud {
  constructor(cloudX, cloudY, cloudS) {
    this.x = cloudX
    this.y = cloudY
    this.s = cloudS
    this.speedX = random(2, -2)
    this.speedY = random(2, -2)

  }
  move() {
    //this.x += random(1, -1)
    //this.y += random(1, -1)
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > width || this.x < 0) {
      this.speedX = -this.speedX
    }
    if (this.y > height || this.y < 0) {
      this.speedY = -this.speedY
    }

  }
  display() {
    push()
    translate(this.x, this.y)
    rotate(frameCount * 0.05)
    noStroke()
    fill(200, 220, 150)
    circle(0, 0, this.s)

    for (let a = 0; a < 2 * PI; a += PI / 4) {
      push();
      rotate(a);
      circle(this.s * 0.4, this.s * 0.1, this.s * 0.5);
      pop();
    }

    // blushes
    noStroke()
    fill(255, 10, 255, 100)
    ellipse(0 - this.s / 4, 0 + this.s / 20, this.s / 8, this.s / 10)
    ellipse(0 + this.s / 4, 0 + this.s / 20, this.s / 8, this.s / 10)

    // eyes
    noStroke();
    fill(0);
    circle(0 - this.s / 5, 0, this.s / 10);
    circle(0 + this.s / 5, 0, this.s / 10);

    stroke(0)
    noFill()
    strokeWeight(this.s / 20)
    arc(0, 0 + this.s / 10, this.s / 5, this.s / 10, 0, PI)
    pop()
  }
}