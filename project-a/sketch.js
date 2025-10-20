/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let bodyX, bodyY
let leg1X, leg1Y
let leg2X, leg2Y
let leg3X, leg3Y
let leg4X, leg4Y
let maxLen = 200
let br, bg, bb
let r = 0
let g = 30
let b = 255
let backg = 0
let shimmer
let w = 10
let h = 5
let opacity = 255


function setup() {
  createCanvas(800, 500)
   canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

  bodyX = 100
  bodyY = 100
  leg1X = 100
  leg1Y = 500
  leg2X = 200
  leg2Y = 500
  leg3X = 300
  leg3Y = 500
  leg4X = 400
  leg4Y = 500
  br = 0
  bg = 128
  bb = 200
}

function draw() {
  background(br, bg, bb)
  shimmer=sin(frameCount*0.05)
  bb = bb + shimmer
  
  r = 0
  g = 30
  b = 255
  v = 0.05
  
  bodyX += (mouseX - bodyX) * 0.1
  bodyY += (mouseY - bodyY) * 0.1
  
   fade()
   frame1()
   frame2()
   aura()
   legs()
   body()
   print(mouseX, mouseY)

}
function legs(){
  //Leg 1 
  let dx1 = bodyX - leg1X
  let dy1 = bodyY - leg1Y
  if (sqrt(dx1 * dx1 + dy1 * dy1) > maxLen) {
    leg1X = bodyX + random(-100, 100)
  }
  noStroke()
  fill(r - 20, g - 20, b - 20)
  triangle(bodyX + 10, bodyY, bodyX - 10, bodyY, leg1X, leg1Y)
  fill(r, g, b)
  triangle(bodyX + 5, bodyY, bodyX - 5, bodyY, leg1X, leg1Y)

  //Leg 2
  let dx2 = bodyX - leg2X
  let dy2 = bodyY - leg2Y
  if (sqrt(dx2 * dx2 + dy2 * dy2) > maxLen) {
    leg2X = bodyX + random(-100, 100)
  }
  fill(r - 20, g - 20, b - 20)
  triangle(bodyX + 10, bodyY, bodyX - 10, bodyY, leg2X, leg2Y)
  fill(r, g, b)
  triangle(bodyX + 5, bodyY, bodyX - 5, bodyY, leg2X, leg2Y)

  //Leg 3
  let dx3 = bodyX - leg3X
  let dy3 = bodyY - leg3Y
  if (sqrt(dx3 * dx3 + dy3 * dy3) > maxLen) {
    leg3X = bodyX + random(-100, 100)
  }
  fill(r - 20, g - 20, b - 20)
  triangle(bodyX + 10, bodyY, bodyX - 10, bodyY, leg3X, leg3Y)
  fill(r, g, b)
  triangle(bodyX + 5, bodyY, bodyX - 5, bodyY, leg3X, leg3Y)

  //Leg 4
  let dx4 = bodyX - leg4X
  let dy4 = bodyY - leg4Y
  if (sqrt(dx4 * dx4 + dy4 * dy4) > maxLen) {
    leg4X = bodyX + random(-100, 100)
  }
  fill(r - 20, g - 20, b - 20)
  triangle(bodyX + 10, bodyY, bodyX - 10, bodyY, leg4X, leg4Y)
  fill(r, g, b)
  triangle(bodyX + 5, bodyY, bodyX - 5, bodyY, leg4X, leg4Y)
}
function frame1(){
  
  fill(0, 50, 100)
  
beginShape()
  
  vertex(30, 390)
  vertex(40, 370)
  vertex(55, 320)
  vertex(50, 270)
  vertex(70, 230)
  vertex(65, 180)
  vertex(85, 140)
  vertex(110, 100)
  vertex(130, 80)
  vertex(170, 60)
  vertex(230, 35)
  vertex(310, 30)
  vertex(390, 20)
  vertex(470, 25)
  vertex(550, 35)
  vertex(630, 45)
  vertex(690, 100)
  vertex(700, 140)
  vertex(715, 180)
  vertex(710, 230)
  vertex(730, 270)
  vertex(725, 320)
  vertex(740, 370)
  vertex(750, 420)
  vertex(770, 460)
  vertex(800, height)
  vertex(800, 0)
  vertex(0,0)
  vertex(0, 460)

  endShape(CLOSE)
}
function frame2(){
  
  fill(0, 40, 100)
  
beginShape()
  
  vertex(10, 400)
  vertex(20, 370)
  vertex(35, 320)
  vertex(30, 270)
  vertex(40, 230)
  vertex(25, 180)
  vertex(45, 140)
  vertex(70, 100)
  vertex(100, 40)
  vertex(140, 30)
  vertex(200, 15)
  vertex(310, 10)
  vertex(390, 5)
  vertex(470, 10)
  vertex(550, 15)
  vertex(630, 30)
  vertex(710, 100)
  vertex(730, 140)
  vertex(740, 180)
  vertex(740, 230)
  vertex(750, 270)
  vertex(770, 320)
  vertex(760, 370)
  vertex(780, 420)
  vertex(800, 460)
  vertex(800, height)
  vertex(800, 0)
  vertex(0,0)
  vertex(0, 430)

  endShape(CLOSE)
}
function body(){
   noStroke()
  fill(r, g, b)
  ellipse(bodyX, bodyY, 40, 40)
}
function aura(){

  if (bodyY < 310){
    r = 255
    g = 0
    b = 0
    v = 1
  }
  fill(r - 20, g - 20, b - 20)
  push()
  noStroke()
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.1) {
    let baseR = 30
    let wave = sin(a * 6 + frameCount*v) * 5
    let r = baseR + wave
    let x = bodyX + r * cos(a)
    let y = bodyY + r * sin(a)
    vertex(x, y)
  }

  endShape(CLOSE)
  pop()

}
function glow(){
  shimmer=map(sin(frameCount*0.1), -1, 1, -30, 30)
  bb = bb + shimmer
}
function fade(){
  fill(100, 200, 255, opacity)
  ellipse(width / 2, height / 2, w, h)
  w += 5
  h += 2.5
  opacity -= 2
  if (opacity <= 0) {
    w = 10
    h = 5
    opacity = 255
  }
}