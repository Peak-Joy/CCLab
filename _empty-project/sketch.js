let x = 380
let y = 230
let inRoom2 = false
let inRoom3 = false

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220);
  room1()
  print(x, y)
}
function room1() {//red
  background(255, 0, 0)
  push()
  fill(0, 0, 255)
  noStroke()
  square(150, 200, 100)
  pop()
  push()
  fill(155, 0, 155)
  noStroke()
  square(550, 200, 100)
  pop()
  if (x < 250 && x > 150 && y > 200 && y < 300) {
    if (keyIsDown(69) === true) {
      inRoom2 = true
    }
    print("inroom2")
  }
  if (x < 650 && x > 550 && y > 200 && y < 300) {
    if (keyIsDown(69) === true) {
      inRoom3 = true
    }
    print("inroom3")
  }
  if (inRoom2 == true) {
    room2()
  }
  if (inRoom3 == true) {
    room3()
  }
  person()
}
function room2() {//blue
  background(0, 0, 255)
}
function room3() {//purple
  background(155, 0, 155)
}

function person() {
  fill(0)
  rect(x, y, 40, 80)
  if (x > 0) {
    if (keyIsDown(65) === true) {
      x -= 2;
    }
  }
  if (x < width - 40) {
    if (keyIsDown(68) === true) {
      x += 2;
    }
  }
  if (y > 0) {
    if (keyIsDown(87) === true) {
      y -= 2;
    }
  }
  if (y < height - 80) {
    if (keyIsDown(83) === true) {
      y += 2;
    }
  }
}