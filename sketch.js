function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 242, 232);

  // disegno glifi
  let numeroGlifi = 90;
  let numeroColonne = ceil(sqrt(numeroGlifi));  // crea 10 colonne
  let numeroRighe = ceil(numeroGlifi / numeroColonne); // 90 glifi in 10 colonne
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0; // posizione in x del glifo corrente
  let yCorrente = 0; // in y

  angleMode(DEGREES); // angoli in gradi

  for (let g = 0; g < numeroGlifi; g++) {
    mioGlifo( 
      xCorrente + dimColonna / 2, 
      yCorrente + dimRiga / 2,
      min(dimColonna, dimRiga) * 0.65,
      g
    ); 

    xCorrente += dimColonna; 

    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente += dimRiga;
    }
  }
}

function draw() {
}

function mioGlifo(_x, _y, _size, _tipo) {
  push();
  translate(_x, _y); // funzione glifo

  stroke(45, 48, 52);
  strokeWeight(1.8);
  noFill();

  let tipo = _tipo % 6;
  let r = _size * 0.38;

  // forma esterna
  if (tipo == 0) {
    circle(0, 0, _size * 0.8);
  } else if (tipo == 1) {
    ellipse(0, 0, _size * 0.8, _size * 0.5);
  } else if (tipo == 2) {
    arc(0, 0, _size * 0.8, _size * 0.8, 30, 310);
  } else if (tipo == 3) {
    circle(0, 0, _size * 0.65);
    circle(0, 0, _size * 0.35);
  } else if (tipo == 4) {
    line(-r, -r, r, r);
    line(-r, r, r, -r);
  } else {
    arc(0, 0, _size * 0.8, _size * 0.8, 0, 270);
    arc(0, 0, _size * 0.55, _size * 0.55, 180, 360);
  }

  // spirale centrale
  push();
  rotate(_tipo * 23);

  let angolo = 0;
  let raggio = 0;

  beginShape(); 
  while (angolo < 720) {
    let x = cos(angolo) * raggio;
    let y = sin(angolo) * raggio;
    vertex(x, y);

    angolo += 12;
    raggio += _size / 180;
  }
  endShape(); // conclude sequenza di vertici

  pop();

  // elementi geometrici variabili
  push();
  rotate(_tipo * 41);

  if (_tipo % 4 == 0) {
    circle(r, 0, _size * 0.16);
    circle(-r, 0, _size * 0.16);
  } else if (_tipo % 4 == 1) {
    line(-r, 0, r, 0);
    line(0, -r, 0, r);
  } else if (_tipo % 4 == 2) {
    circle(0, -r, _size * 0.2);
    circle(0, r, _size * 0.2);
    circle(r, 0, _size * 0.2);
  } else {
    arc(0, 0, _size * 0.9, _size * 0.9, 45, 135);
    arc(0, 0, _size * 0.9, _size * 0.9, 225, 315);
  }

  pop();
  pop();
}