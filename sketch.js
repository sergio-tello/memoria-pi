// 3.1415926535 
//   8979323846 
//   2643383279 
//   5028841971 
//   6939937510 
//   5820974944 
//   5923078164 
//   0628620899 
//   8628034825 
//   3421170679

let N = 10;
let matrix = [];
let diametro = 25;
let x0 = 90;
let y0 = 70;
let espacio = 10;
let pi_string = '3.'
let pi_list = ['14', '15', '92', '65', '35', '89', '79', '32', '38',
               '46', '26', '43', '38', '32', '79', '50', '28', '84',
               '19', '71', '69', '39', '93', '75', '10', '58', '20',
               '97', '49', '44', '59', '23', '07', '81', '64', '06',
               '28', '62', '08', '99', '86', '28', '03', '48', '25',
               '34', '21', '17', '06', '79'];
let jugada = 0;
let mensaje = '';


function setup() {
  createCanvas(500, 500);
  setup_matrix();
}

function draw() {
  background(0);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  text('π' + mensaje, 20, 20);
  textSize(6);
  text(pi_string, 10, 440);
  draw_matrix();
}


function setup_matrix() {
  for (var i = 0; i < N; i++) {
    matrix[i] = [];
    for (var j = 0; j < N; j++) {
      valor = (9 - i)*10 + j;
      matrix[i][j] = new Cell(x0 + j*(diametro + espacio), y0 + i*(diametro + espacio), valor); 
    }
  }
}

function draw_matrix() {
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      matrix[i][j].show(); 
    }
  }
}

function mouseClicked() {
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      matrix[i][j].clicked(); 
    }
  }
}


class Cell {  
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.d = diametro;
    this.value = str(value);
    if (value < 10) {
      this.value = '0' + str(value);
    }
    this.border_color = 230;
    this.text_color = 255;
    }
  
  show() {
    noFill();
    stroke(this.border_color);
    strokeWeight(2);
    circle(this.x, this.y, this.d);
    noStroke();
    fill(this.text_color);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(this.value, this.x, this.y);
  }
  
  clicked() {
    let r = this.d/2;
    if (pow(mouseX - this.x, 2) + pow(mouseY - this.y, 2) <= pow(r, 2)) {
      if (this.value === pi_list[jugada]){
        mensaje = ' Correcto!'
        jugada = jugada + 1;
        pi_string = pi_string + this.value;
      } else {
        mensaje = ' No es correcto...'
        jugada = 0;
        pi_string = '3.'
        background(0);
        draw();
      }
      
    } 
  }
}