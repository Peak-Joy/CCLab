let x = 380
let y = 230
let charIsMoving = false
let charRight = false
let charFacing = true // true - right, false - left
let charReset = false
let karma = 0
let hoveringRight = false
let hoveringLeft = false
let cycle = 0
let alpha = 0
let fadingOut
let fadedOut


let started = true
let storyStarted = false
let inRoom1 = false
let inRoom2 = false
let inRoom3 = false
let inRoom4 = false
let inRoom5 = false
let inRoom6 = false
let inRoom7 = false
let diedEaten = false
let diedFallen = false
let slimeKilled = false
let jumped = false
let wentAround = false
let swung = false
let killedDemon = false
let gaveFood = false
let ready = false
let dkRoom = false
let endMono = false

let startIMG
let blackScreen
let textScreen
let charFacingRight
let charFacingLeft
let charRunningRight
let charRunningLeft
let deathFallenIMG
let deathEatenIMG
let slimeKillIMG
let demonKillIMG
let dkIMG
let room1IMG
let room2IMG
let room3IMG
let room4IMG
let room5IMG
let room6IMG

function preload() {
  startIMG = loadImage('assets/start.png')
  blackScreen = loadImage('assets/black-screen.png')
  textScreen = loadImage('assets/text.png')
  charFacingRight = loadImage('assets/standing-right.png')
  charFacingLeft = loadImage('assets/standing-left.png')
  charRunningRight = loadImage('assets/running-right.png')
  charRunningLeft = loadImage('assets/running-left.png')
  room1IMG = loadImage('assets/room1bg.png')
  room2IMG = loadImage('assets/slime-event.png')
  room3IMG = loadImage('assets/river-room.png')
  room4IMG = loadImage('assets/demon-room.png')
  room5IMG = loadImage('assets/bridge-room.png')
  room6IMG = loadImage('assets/demon-event.png')
  room7BadIMG = loadImage('assets/dk-bad.png')
  room7MidIMG = loadImage('assets/dk-normal.png')
  room7GoodIMG = loadImage('assets/dk-good.png')
  deathFallenIMG = loadImage('assets/fallen.png')
  deathEatenIMG = loadImage('assets/Eaten.png')
  slimeKillIMG = loadImage('assets/slime-kill.png')
  demonKillIMG = loadImage('assets/demon-kill.png')
  dkIMG = loadImage('assets/dk.png')
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  if (started == true) {
    startScreen()
  }
  if (storyStarted == true) {
    story()
  }
  if (inRoom1 == true) {
    room1()
  }
  if (inRoom2 == true) {
    room2()
  }
  if (wentAround == true) {
    goAround()
  }
  if (slimeKilled == true) {
    slimeKill()
  }
  if (inRoom3 == true) {
    room3()
  }
  if (jumped == true) {
    jump()
  }
  if (inRoom4 == true) {
    room4()
  }
  if (diedEaten == true) {
    deathEaten()
  }
  if (diedFallen == true) {
    deathFallen()
  }
  if (inRoom5 == true) {
    room5()
  }
  if (swung == true) {
    swing()
  }
  if (inRoom6 == true) {
    room6()
  }
  if (gaveFood == true) {
    giveFood()
  }
  if (killedDemon == true) {
    demonKilled()
  }
  if (ready == true) {
    dkBuildUp()
  }
  if (dkRoom == true) {
    dk()
  }
  if (endMono == true) {
    endingMonologue()
  }
  if (inRoom7 == true) {
    room7()
  }

}

function startScreen() {
  image(startIMG, 0, 0)
  textSize(32)
  textFont("Tiny5")
  text('move with WASD, e - interact/skip text, q - retry', 50, 450)
  if (keyIsPressed === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway();
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      storyStarted = true
      started = false
    }
  }
}

function story() {
  image(textScreen, 0, 0)
  let text1 = 'Ever since you were little, you have heard stories of the legendary Ring of Life, and the power it wields. You have always wished to obtain this treasure, and after learning it is in the possesion of the demon king, you are finally on the path towards the ring...'
  push()
  fill(255)
  textSize(42)
  textFont("Tiny5")
  text(text1, 40, 40, 720, 420)
  pop()
  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway();
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      inRoom1 = true
      storyStarted = false
    }
  }
}

function room1() {//start-room
  image(room1IMG, 0, 0)
  person()

  //borders
  x = constrain(x, 50, width - 90)
  y = constrain(y, 50, height - 170)

  if (x + 40 < 760 && x + 40 > 720 && y > 180 && y < 280) {
    if (keyIsDown(69) === true) {
      fadingOut = true
    }
    if (fadingOut === true) {
      fadeAway();
      if (fadedOut) {
        fadingOut = false
        fadedOut = false
        alpha = 0
        inRoom1 = false
        inRoom2 = true
      }
    }
  }
}
function room2() {//slime-event

  image(room2IMG, 0, 0)
  textSize(32)
  textFont("Tiny5")
  if (hoveringLeft === false) {
    text('kill', 150, 250)
  }
  if (hoveringRight === false) {
    text('go around', 500, 250)
  }
  if (mouseX < width / 2) {
    text('KILL', 150, 250)
    hoveringLeft = true
    if (mouseIsPressed === true) {
      slimeKilled = true
      inRoom2 = false
      karma = karma + 1
    }
  } else {
    hoveringLeft = false
  }
  if (mouseX > width / 2) {
    text('GO AROUND', 500, 250)
    hoveringRight = true
    if (mouseIsPressed === true) {
      fadingOut = true
    }
    if (fadingOut === true) {
      fadeAway();
      if (fadedOut) {
        fadingOut = false
        fadedOut = false
        alpha = 0
        wentAround = true
        inRoom2 = false
        karma = karma - 1
      }
    }
  } else {
    hoveringRight = false
  }
}

function goAround() {
  image(textScreen, 0, 0)
  let text3 = 'You decide to not disturb its peace. The happy slime got happier.'
  push()
  fill(255)
  textSize(42)
  textFont("Tiny5")
  text(text3, 40, 40, 720, 420)
  pop()
  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway()
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      inRoom5 = true
      wentAround = false
    }
  }
}

function slimeKill() {// kill slime
  image(slimeKillIMG, 0, 0)

  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway();
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      inRoom3 = true
      slimeKilled = false
    }
  }
}

function room3() {// river room
  image(room3IMG, 0, 0)
  person()

  if (x + 40 < 500 && x + 40 > 460 && y > 100 && y < 200) {
    text('stone path', 470, 50)
    print('stone path')
    if (keyIsDown(69) === true) {
      fadingOut = true
    }
    if (fadingOut === true) {
      fadeAway();
      if (fadedOut) {
        fadingOut = false
        fadedOut = false
        alpha = 0
        diedEaten = true
        inRoom3 = false
      }
    }
  }

  if (x + 40 < 500 && x + 40 > 460 && y > 250 && y < 320) {
    text('narrow gap', 470, 240)
    print('jump across')
    if (keyIsDown(69) === true) {
      fadingOut = true
    }
    if (fadingOut === true) {
      fadeAway();
      if (fadedOut) {
        fadingOut = false
        fadedOut = false
        alpha = 0
        jumped = true
        inRoom3 = false
      }
    }
  }
  //borders
  x = constrain(x, 50, 450)
  y = constrain(y, 50, height - 130)
}

function jump() {
  image(textScreen, 0, 0)
  let text2 = 'Trusting your own capabilities and seeing the crocodile in the stone path, you jump across to the other side.'
  push()
  fill(255)
  textSize(42)
  textFont("Tiny5")
  text(text2, 40, 40, 720, 420)
  pop()
  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway();
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      inRoom4 = true
      jumped = false
    }
  }
}

function room4() {//demon-room
  image(room4IMG, 0, 0)

  if (charReset == false) {
    x = 60
    y = 210
    charReset = true
  }
  person()

  //borders
  x = constrain(x, 50, width - 90)
  y = constrain(y, 50, height - 130)

  if (x + 40 > 550) {
    inRoom6 = true
    inRoom4 = false
  }
}

function room5() {//go-around-slime
  image(room5IMG, 0, 0)
  person()

  if (x + 40 < 500 && x + 40 > 460 && y > 50 && y < 150) {
    print('repair bridge')
    text('broken bridge', 510, 30)
    if (keyIsDown(69) === true) {
      fadingOut = true
    }
    if (fadingOut === true) {
      fadeAway();
      if (fadedOut) {
        fadingOut = false
        fadedOut = false
        alpha = 0
        diedFallen = true
        inRoom5 = false
      }
    }
  }

  if (x + 40 < 500 && x + 40 > 460 && y > 280 && y < 350) {
    print('swing across')
    text('vine', 510, 260)
    if (keyIsDown(69) === true) {
      fadingOut = true
    }
    if (fadingOut === true) {
      fadeAway();
      if (fadedOut) {
        fadingOut = false
        fadedOut = false
        alpha = 0
        swung = true
        inRoom5 = false
      }
    }
  }
  //borders
  x = constrain(x, 50, 450)
  y = constrain(y, 50, height - 170)
}

function swing() {
  image(textScreen, 0, 0)
  let text4 = 'You swing across the gap, feeling like a badass while doing so.'
  push()
  fill(255)
  textSize(42)
  textFont("Tiny5")
  text(text4, 40, 40, 720, 420)
  pop()
  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway()
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      inRoom4 = true
      swung = false
    }
  }
}

function room6() {//demon-event
  image(room6IMG, 0, 0)

  if (hoveringLeft === false) {
    text('kill', 150, 350)
  }
  if (hoveringRight === false) {
    text('give food', 500, 350)
  }
  if (mouseX < width / 2) {
    text('KILL', 150, 350)
    hoveringLeft = true
    if (mouseIsPressed === true) {
      killedDemon = true
      inRoom6 = false
      karma = karma + 1
    }
  } else {
    hoveringLeft = false
  }
  if (mouseX > width / 2) {
    text('GIVE FOOD', 500, 350)
    hoveringRight = true
    if (mouseIsPressed === true) {
      fadingOut = true
    }
    if (fadingOut === true) {
      fadeAway();
      if (fadedOut) {
        fadingOut = false
        fadedOut = false
        alpha = 0
        gaveFood = true
        inRoom6 = false
        karma = karma - 1
      }
    }
  } else {
    hoveringRight = false
  }
}

function giveFood() {
  image(textScreen, 0, 0)
  let text5 = 'You give it some of the bread you had packed and it hapilly ate the bread and sat down. You tried to pet it, but you two arent there yet.'
  push()
  fill(255)
  textSize(42)
  textFont("Tiny5")
  text(text5, 40, 40, 720, 420)
  pop()
  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway()
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      ready = true
      gaveFood = false
    }
  }
}

function demonKilled() {
  image(demonKillIMG, 0, 0)

  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway();
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      ready = true
      killedDemon = false
    }
  }
}

function dkBuildUp() {
  image(textScreen, 0, 0)
  let text6 = 'After an adventurous journey, you arrive at the demon kings lair. Remembering your goal of obtaining the Ring of Life, you steel your nerves and come face to face with the DEMON KING...'
  push()
  fill(255)
  textSize(42)
  textFont("Tiny5")
  text(text6, 40, 40, 720, 420)
  pop()
  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway();
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      dkRoom = true
      ready = false
    }
  }
}

function dk() {
  image(dkIMG, 0, 0)
  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway();
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      endMono = true
      dkRoom = false
    }
  }
}

function endingMonologue() {
  image(textScreen, 0, 0)
  if (karma == 2) {
    let text7 = 'You face the demon king, ready to take the ring by any means necessary. The demon king respectfully asked what you were here for, secretely hoping that you could be friends as he really wants to talk to someone about his day. But you, lacking sympathy, kill the poor thing. Who was the monster all along...'
    push()
    fill(255)
    textSize(42)
    textFont("Tiny5")
    text(text7, 40, 40, 720, 420)
    pop()
  }
  if (karma == 0) {
    let text8 = 'You declare to the demon king that you are here for the Ring of Life. In response, the demon king demands to test if you are strong enough to earn the treasure. Accepting the challenge, you fight the demon king. After a long battle, the demon king deems you worthy of the ring. for now...'
    push()
    fill(255)
    textSize(42)
    textFont("Tiny5")
    text(text8, 40, 40, 720, 420)
    pop()
  }
  if (karma == -2) {
    let text9 = 'When you arrive, demon king doesnt look like he is in a mood for a fight. You ask him whats wrong?and he tells you about his stressful life as demon king. You listen to his worries and have a nice conversation with him. His name is Joe!:D After talking for a while, Joe gives you the ring as a thank you.'
    push()
    fill(255)
    textSize(42)
    textFont("Tiny5")
    text(text9, 40, 40, 720, 420)
    pop()
  }


  if (keyIsDown(69) === true) {
    fadingOut = true
  }
  if (fadingOut === true) {
    fadeAway();
    if (fadedOut) {
      fadingOut = false
      fadedOut = false
      alpha = 0
      inRoom7 = true
      endMono = false
    }
  }
}

function room7() {
  print(karma)
  if (karma == 2) {
    image(room7BadIMG, 0, 0)
  }
  if (karma == 0) {
    image(room7MidIMG, 0, 0)
  }
  if (karma == -2) {
    image(room7GoodIMG, 0, 0)
  }
  if (keyIsDown(81) === true) {
    inRoom7 = false
    inRoom1 = true
    charReset = false
  }

}

function deathEaten() {
  image(deathEatenIMG, 0, 0)
  text('q to restart', 600, 450)
  if (keyIsDown(81) === true) {
    diedEaten = false
    inRoom1 = true
  }
  x = 380
  y = 230
  charReset = false
}

function deathFallen() {
  image(deathFallenIMG, 0, 0)
  text('q to restart', 600, 450)
  if (keyIsDown(81) === true) {
    diedFallen = false
    inRoom1 = true
  }
  x = 380
  y = 230
  charReset = false
}

function person() {

  if (keyIsDown(65) === true) {
    x -= 2.5;
    charIsMoving = true
    charFacing = false
  }
  if (keyIsDown(68) === true) {
    x += 2.5;
    charIsMoving = true
    charFacing = true
  }
  if (keyIsDown(87) === true) {
    y -= 2.5;
    charIsMoving = true
  }
  if (keyIsDown(83) === true) {
    y += 2.5;
    charIsMoving = true
  }

  cycle += 1
  if (cycle > 10) {
    cycle = 0
  }

  print(cycle)

  if (charFacing === true) {
    if (charIsMoving === false) {
      image(charFacingRight, x, y)
    }
    if (charIsMoving === true) {
      if (cycle <= 4) {
        image(charRunningRight, x, y - 2)
      }
      if (cycle > 4) {
        image(charFacingRight, x, y)
      }
    }
  }
  if (charFacing === false) {
    if (charIsMoving === false) {
      image(charFacingLeft, x, y)
    }
    if (charIsMoving === true) {
      if (cycle <= 4) {
        image(charRunningLeft, x, y - 2)
      }
      if (cycle > 4) {
        image(charFacingLeft, x, y)
      }
    }
  }
  charIsMoving = false
}

function fadeAway() {

  push()
  tint(255, alpha)
  image(blackScreen, 0, 0)
  pop()

  alpha += 5

  if (alpha >= 255) {
    alpha = 255
    fadedOut = true
  }
}

