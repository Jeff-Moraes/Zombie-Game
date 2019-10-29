class Zombie {
  constructor(x, y) {
    this.row = y * gridSquare;
    this.col = x * gridSquare;
    this.x = x;
    this.y = y;
    this.position = {};
  }
  setup() {
    this.position = map1[this.y][this.x];
  }

  move() {
    if (this.x < game.player1.x && !this.position.includes(4)) {
      this.x++;
      this.col += gridSquare;
    } else if (this.y > game.player1.y && !this.position.includes(1)) {
      this.y--;
      this.row -= gridSquare;
    } else if (this.x > game.player1.x && !this.position.includes(2)) {
      this.x--;
      this.col -= gridSquare;
    } else if (this.y < game.player1.y && !this.position.includes(3)) {
      this.y++;
      this.row += gridSquare;
    }
    setup();
  }

  draw() {
    // image(playerCharacter, this.col, this.row, gridSquare, gridSquare);
    push();
    fill("red");
    rect(this.col, this.row, 70, 70);
    pop();
  }
}
