let gridSquare = 70;

class Player {
  constructor(x, y) {
    this.row = y * gridSquare;
    this.col = x * gridSquare;
    this.x = x;
    this.y = y;
    this.position = {};
    this.moves = 3;
  }
  setup() {
    this.position = map1[this.y][this.x];
  }

  moveUp() {
    this.row -= gridSquare;
    this.y -= 1;
    this.moves -= 1;
  }
  moveDown() {
    this.row += gridSquare;
    this.y += 1;
    this.moves -= 1;
  }
  moveRight() {
    this.col += gridSquare;
    this.x += 1;
    this.moves -= 1;
  }
  moveLeft() {
    this.col -= gridSquare;
    this.x -= 1;
    this.moves -= 1;
  }
  draw() {
    // image(playerCharacter, this.col, this.row, gridSquare, gridSquare);
    push();
    fill("blue");
    rect(this.col, this.row, 70, 70);
    pop();
  }
}
