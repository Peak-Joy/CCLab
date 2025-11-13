// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 3; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 500; // Decide the maximum number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // generate particles
  //for (let i = 0; i < NUM_OF_PARTICLES; i++) {
  //  particles[i] = new Particle(random(width), //random(height));
  //}

}

function draw() {
  background(50);

  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY))
  }

  // limit the number of particles
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
}


class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x1 = startX;
    this.y1 = startY;
    this.x2 = startX
    this.y2 = startY
    this.vx = random(2, -2)
    this.vy = random(2, -2)
  }
  // methods (functions): particle's behaviors
  update() {
    this.x2 += this.vx
    this.y2 += this.vy
  }
  display() {
    // particle's appearance
    push();

    line(this.x1, this.y1, this.x2, this.y2)
    pop();
  }
}
