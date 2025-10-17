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

function setup() {
    let canvas = createCanvas(800, 500);
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
}



function draw() {
  background(100, 100, 255)

  bodyX += (mouseX - bodyX) * 0.1
  bodyY += (mouseY - bodyY) * 0.1
  
  fill(255, 150, 255)
  ellipse(bodyX, bodyY, 60, 60)
  
  legs()
  
  noStroke()
  fill(255, 100, 255)
  ellipse(bodyX, bodyY, 40, 40)

}
function legs(){
  //Leg 1 
  let dx1 = bodyX - leg1X
  let dy1 = bodyY - leg1Y
  if (sqrt(dx1 * dx1 + dy1 * dy1) > maxLen) {
    leg1X = bodyX + random(-100, 100)
  }
  noStroke()
  fill(255, 150, 255)
  triangle(bodyX + 10, bodyY, bodyX - 10, bodyY, leg1X, leg1Y)
  fill(255, 100, 255)
  triangle(bodyX + 5, bodyY, bodyX - 5, bodyY, leg1X, leg1Y)

  //Leg 2
  let dx2 = bodyX - leg2X
  let dy2 = bodyY - leg2Y
  if (sqrt(dx2 * dx2 + dy2 * dy2) > maxLen) {
    leg2X = bodyX + random(-100, 100)
  }
  fill(255, 150, 255)
  triangle(bodyX + 10, bodyY, bodyX - 10, bodyY, leg2X, leg2Y)
  fill(255, 100, 255)
  triangle(bodyX + 5, bodyY, bodyX - 5, bodyY, leg2X, leg2Y)

  //Leg 3
  let dx3 = bodyX - leg3X
  let dy3 = bodyY - leg3Y
  if (sqrt(dx3 * dx3 + dy3 * dy3) > maxLen) {
    leg3X = bodyX + random(-100, 100)
  }
  fill(255, 150, 255)
  triangle(bodyX + 10, bodyY, bodyX - 10, bodyY, leg3X, leg3Y)
  fill(255, 100, 255)
  triangle(bodyX + 5, bodyY, bodyX - 5, bodyY, leg3X, leg3Y)

  //Leg 4
  let dx4 = bodyX - leg4X
  let dy4 = bodyY - leg4Y
  if (sqrt(dx4 * dx4 + dy4 * dy4) > maxLen) {
    leg4X = bodyX + random(-100, 100)
  }
  fill(255, 150, 255)
  triangle(bodyX + 10, bodyY, bodyX - 10, bodyY, leg4X, leg4Y)
  fill(255, 100, 255)
  triangle(bodyX + 5, bodyY, bodyX - 5, bodyY, leg4X, leg4Y)
}
