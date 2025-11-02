/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new AustinDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class AustinDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.rotate = 0
    this.limbX = 25
    this.limbY = 25
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.rotate = map(sin(frameCount * 0.11), -1, 1, -.15, .15)
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();

    translate(this.x, this.y);
    noStroke()

    rotate(this.rotate)
    //body_upper
    fill(100, 50, 50)
    quad(-25, -25, 25, -25, 18, 25, -18, 25)
    fill(80, 40, 40)
    quad(1, 0, -1, 0, -1, -25, 1, -25)


    //arms
    fill(100, 50, 50)
    quad(-2 * this.limbX + 5, -2 * this.limbY - 5, -2 * this.limbX - 5, -2 * this.limbY + 5, -this.limbX + 5, -this.limbY + 15, -this.limbX + 15, -this.limbY + 5)
    quad(this.limbX - 15, -this.limbY + 5, 2 * this.limbX - 5, -2 * this.limbY - 5, 2 * this.limbX + 5, -2 * this.limbY + 5, this.limbX - 5, -this.limbY + 15)

    //hands
    fill(200, 0, 0)
    circle(2 * this.limbX, -2 * this.limbY, 20)
    circle(-2 * this.limbX, -2 * this.limbY, 20)

    //head
    fill(200, 0, 0)
    circle(0, -50, 60)

    //eyes
    fill(255)
    circle(-12, -50, 20)
    circle(12, -50, 20)

    fill(20)
    circle(-12, -50, 13)
    circle(12, -50, 13)

    //Mouth
    stroke(0)
    strokeWeight(2)
    noFill()
    arc(0, -38, 20, 12, 0.3, 2.5)
    pop();


    push()

    translate(this.x, this.y);
    noStroke()

    rotate(-this.rotate)

    //body_lower
    fill(0, 0, 200)
    quad(-25, 25, 25, 25, 22, 0, -22, 0)
    ellipse(0, 25, 50, 20)
    //legs
    quad(-this.limbX + 15, this.limbY + 5, -1.5 * this.limbX + 15, 2 * this.limbY + 5, -1.65 * this.limbX + 5, 2 * this.limbY - 5, -this.limbX + 5, this.limbY - 5)
    quad(this.limbX - 15, this.limbY + 5, 1.5 * this.limbX - 15, 2 * this.limbY + 5, 1.65 * this.limbX - 5, 2 * this.limbY - 5, this.limbX - 5, this.limbY - 5)

    //feet
    fill(0, 0, 100)
    arc(-1.5 * this.limbX + 6, 2 * this.limbY + 5, 20, 20, 3.6, TWO_PI + 0.6)
    arc(1.5 * this.limbX - 6, 2 * this.limbY + 5, 20, 20, 2.7, TWO_PI - 0.6)

    pop()

    this.drawReferenceShapes()
  }
  drawReferenceShapes() {
    translate(this.x, this.y)
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/