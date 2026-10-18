function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {
  // put drawing code here
   background(245, 240, 225);

  let passoX = 100; // distanza faccine in orizzontale
  let passoY = 100; // verticale

  for (let y = 50; y < height + 50; y += passoY) {
    for (let x = 50; x < width + 50; x += passoX) {
      push();
      translate(x, y); // sposto il sistema di riferimento al centro della faccina

      let tipo = (floor(x / passoX) + floor(y / passoY) * 3) % 8;
      disegnaFaccina(tipo);

      pop(); // ripristino il sistema di riferimento
    }
  }
}

function disegnaFaccina(tipo) {
  let colori = [
    [194, 175, 240],
    [112, 169, 161],
    [69, 126, 172],
    [255, 151, 112]
  ];

  let c = colori[tipo % colori.length];
// Corpo faccina
  stroke(45, 45, 50);
  strokeWeight(2.5);
  fill(c[0], c[1], c[2]);
  ellipse(0, 0, 62, 62);

  // Occhi
  fill(45, 45, 50);
  noStroke();

  if (tipo % 4 == 0) {
    ellipse(-13, -8, 7, 12);
    ellipse(13, -8, 7, 12);
  } else if (tipo % 4 == 1) {
    line(-19, -8, -7, -8);
    line(7, -8, 19, -8);
    stroke(45, 45, 50);
    strokeWeight(3);
    line(-18, -8, -8, -8);
    line(8, -8, 18, -8);
    noStroke();
  } else if (tipo % 4 == 2) {
    ellipse(-13, -8, 10, 6);
    ellipse(13, -8, 10, 6);
  } else {
    triangle(-18, -5, -8, -13, -8, -3);
    triangle(18, -5, 8, -13, 8, -3);
  }

  // Bocche
  stroke(45, 45, 50);
  strokeWeight(2.5);
  noFill();

  if (tipo % 5 == 0) {
    arc(0, 4, 28, 22, 0, PI); // bocca triste
  } else if (tipo % 5 == 1) {
    line(-11, 10, 11, 10); // bocca dritta
  } else if (tipo % 5 == 2) {
    arc(0, 15, 20, 18, PI, TWO_PI); // bocca sorridente
  } else if (tipo % 5 == 3) {
    ellipse(0, 11, 9, 12); // bocca tonda
  } else {
    beginShape();
    vertex(-12, 7);
    vertex(-5, 13);
    vertex(3, 7);
    vertex(12, 13);
    endShape(); // bocca zigzag
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw(); 
}

