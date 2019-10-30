class Game {
  constructor() {
    this.background = new Background();
    this.map1 = new Map();
    this.player1 = new Player(1, 1);

    this.zombie1 = new Zombie(12, 1, 1);
    this.zombie2 = new Zombie(6, 2, 2);
    this.zombie3 = new Zombie(14, 2, 3);
    this.zombie4 = new Zombie(2, 3, 4);
    this.zombie5 = new Zombie(9, 3, 5);
    this.zombie6 = new Zombie(7, 5, 6);
    this.zombie7 = new Zombie(13, 5, 7);
    this.zombie8 = new Zombie(12, 9, 8);
    this.zombie9 = new Zombie(10, 6, 9);
    this.zombie10 = new Zombie(5, 6, 10);
    this.zombie11 = new Zombie(0, 8, 11);
    this.zombie12 = new Zombie(8, 6, 12);
    this.zombie13 = new Zombie(14, 9, 13);
    this.zombie14 = new Zombie(2, 10, 14);
    this.zombie15 = new Zombie(9, 9, 15);

    this.zombie16 = new Zombie(6, 11, 16);
    this.zombie17 = new Zombie(13, 11, 17);

    this.zombiesPositions = [];

    this.gameLevel = 0;
  }

  preload() {
    this.bgSurvived = loadImage("assets/bg-survived.png");
    this.bgStart2 = loadImage("assets/bg-start2.png");

    this.bgWasted = loadImage("assets/bg-wasted.png");

    this.background.preload();
    this.map1.preload();

    this.player1.preload();

    this.zombie1.preload();
    this.zombie2.preload();
    this.zombie3.preload();
    this.zombie4.preload();
    this.zombie5.preload();
    this.zombie6.preload();
    this.zombie7.preload();

    this.zombie8.preload();
    this.zombie9.preload();
    this.zombie10.preload();
    this.zombie11.preload();
    this.zombie12.preload();
    this.zombie13.preload();
    this.zombie14.preload();
    this.zombie15.preload();

    this.zombie16.preload();
    this.zombie17.preload();
  }

  setup() {
    this.map1.setup();
    this.player1.setup();

    this.zombie1.setup();
    this.zombie2.setup();
    this.zombie3.setup();
    this.zombie4.setup();
    this.zombie5.setup();
    this.zombie6.setup();
    this.zombie7.setup();

    this.zombie8.setup();
    this.zombie9.setup();
    this.zombie10.setup();
    this.zombie11.setup();
    this.zombie12.setup();
    this.zombie13.setup();
    this.zombie14.setup();
    this.zombie15.setup();

    this.zombie16.setup();
    this.zombie17.setup();
  }

  draw() {
    if (this.gameLevel === 0) {
      image(this.bgStart2, 0, 0);
      this.player1.draw();
      this.zombie1.draw();
    } else if (this.gameLevel === 1) {
      clear();

      this.background.draw();
      this.map1.draw();
      this.player1.draw();

      this.zombie1.draw();
      this.zombie2.draw();
      this.zombie3.draw();
      this.zombie4.draw();
      this.zombie5.draw();
      this.zombie6.draw();
      this.zombie7.draw();

      this.zombie8.draw();
      this.zombie9.draw();
      this.zombie10.draw();
      this.zombie11.draw();
      this.zombie12.draw();
      this.zombie13.draw();
      this.zombie14.draw();
      this.zombie15.draw();

      this.zombie16.draw();
      this.zombie17.draw();

      if (
        (this.player1.x === 12 || this.player1.x === 13) &&
        this.player1.y === 11
      ) {
        this.gameLevel = 2;
      }

      if (this.player1.moves === 0) {
        this.zombie1.move();
        this.zombie2.move();
        this.zombie3.move();
        this.zombie4.move();
        this.zombie5.move();
        this.zombie6.move();
        this.zombie7.move();

        this.zombie8.move();
        this.zombie9.move();
        this.zombie10.move();
        this.zombie11.move();
        this.zombie12.move();
        this.zombie13.move();
        this.zombie14.move();
        this.zombie15.move();

        this.zombie16.move();
        this.zombie17.move();

        this.player1.moves = 3;
      }
    } else if (this.gameLevel === 2) {
      console.log("win");
      clear();
      image(this.bgSurvived, 0, 0);
    } else if (this.gameLevel === 1000) {
      console.log("wasted");
      tint(255, 20);
      image(this.bgWasted, 0, 0);
      if (keyCode === 32) {
        this.gameLevel = 1;
        this.setup();
      }
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    game.gameLevel = 1;
  }
  let squareSize = 70;
  if (keyCode === 37 && game.player1.col > 0 && game.player1.canMove) {
    if (!game.player1.position.includes(2)) {
      game.player1.moveLeft();
      game.player1.canMove = false;
      game.player1.newMoves();
    }
  }
  if (
    keyCode === 39 &&
    game.player1.col < 1050 - squareSize &&
    game.player1.canMove
  ) {
    if (!game.player1.position.includes(4)) {
      game.player1.moveRight();
      game.player1.canMove = false;
      game.player1.newMoves();
    }
  }
  if (
    keyCode === 40 &&
    game.player1.row < 980 - squareSize * 3 &&
    game.player1.canMove
  ) {
    if (!game.player1.position.includes(3)) {
      game.player1.moveDown();
      game.player1.canMove = false;
      game.player1.newMoves();
    }
  }
  if (keyCode === 38 && game.player1.row > 0 && game.player1.canMove) {
    if (!game.player1.position.includes(1)) {
      game.player1.moveUp();
      game.player1.canMove = false;
      game.player1.newMoves();
    }
  }
  game.player1.setup();
}
