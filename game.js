class Game {
  constructor() {
    this.map1 = new Map();
    this.player1 = new Player(0, 0);
    this.zombie1 = new Zombie(2, 2);
    this.zombie2 = new Zombie(4, 1);
  }

  preload() {
    // this.map1.preload();
    // this.player.preload();
  }

  setup() {
    this.map1.setup();
    this.player1.setup();

    this.zombie1.setup();
    this.zombie2.setup();
  }

  draw() {
    clear();
    this.map1.draw();
    this.player1.draw();

    this.zombie1.draw();
    this.zombie2.draw();

    if (this.player1.moves === 0) {
      this.zombie1.move();
      this.zombie2.move();
      this.player1.moves = 3;
    }
  }
}

function keyPressed() {
  let squareSize = 70;
  if (keyCode === 37 && game.player1.col > 0) {
    if (!game.player1.position.includes(2)) {
      game.player1.moveLeft();
    }
  }
  if (keyCode === 39 && game.player1.col < 1050 - squareSize) {
    if (!game.player1.position.includes(4)) {
      game.player1.moveRight();
    }
  }
  if (keyCode === 40 && game.player1.row < 980 - squareSize * 3) {
    if (!game.player1.position.includes(3)) {
      game.player1.moveDown();
    }
  }
  if (keyCode === 38 && game.player1.row > 0) {
    if (!game.player1.position.includes(1)) {
      game.player1.moveUp();
    }
  }
  game.player1.setup();
}
