class Game {
  constructor() {
    this.background = new Background();
    this.map1 = new Map();
    this.player1 = new Player(0, 0);

    this.zombie1 = new Zombie(2, 2, 1);
    this.zombie2 = new Zombie(4, 1, 2);
    this.zombie3 = new Zombie(6, 0, 3);
    this.zombie4 = new Zombie(8, 3, 4);
    this.zombie5 = new Zombie(9, 3, 5);
    this.zombie6 = new Zombie(10, 1, 6);
    this.zombie7 = new Zombie(12, 2, 7);

    this.zombie8 = new Zombie(2, 4, 8);
    this.zombie9 = new Zombie(11, 4, 9);
    this.zombie10 = new Zombie(4, 5, 10);
    this.zombie11 = new Zombie(8, 5, 11);
    this.zombie12 = new Zombie(1, 6, 12);
    this.zombie13 = new Zombie(10, 6, 13);
    this.zombie14 = new Zombie(6, 7, 14);
    this.zombie15 = new Zombie(12, 7, 15);

    this.zombie16 = new Zombie(1, 10, 16);
    this.zombie17 = new Zombie(4, 9, 17);
    this.zombie18 = new Zombie(7, 10, 18);
    this.zombie19 = new Zombie(10, 9, 19);
    this.zombie20 = new Zombie(13, 10, 20);

    this.zombiesPositions = [];
  }

  preload() {
    this.background.preload();
    this.map1.preload();
    // this.player.preload();

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
    this.zombie18.preload();
    this.zombie19.preload();
    this.zombie20.preload();
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
    this.zombie18.setup();
    this.zombie19.setup();
    this.zombie20.setup();
  }

  draw() {
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
    this.zombie18.draw();
    this.zombie19.draw();
    this.zombie20.draw();

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
      this.zombie18.move();
      this.zombie19.move();
      this.zombie20.move();
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
