let cloudX;
let cloudY;


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  cloudX = width / 2;
  cloudY = height / 2;
}


function draw() {
  background(220);
  background(150, 125, 255);

  drawCloud(cloudX, cloudY, 100)

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