class Game {
  constructor() {
    this.player1 = new Player(1, 1);

    this.zombies = zombiesArr.map((el, index) => {
      return new Zombie(...el);
    });

    this.zombiesPositions = [];
    this.gameLevel = 0;
  }

  resetCharactersPositions() {
    this.player1.resetPostion(1, 1);
    for (let i = 0; i < this.zombies.length; i++) {
      this.zombies[i].resetPostion(zombiesArr[i][0], zombiesArr[i][1]);
    }
    console.log("new position after death", this.player1.col, this.player1.row);
  }

  draw() {
    if (this.gameLevel === 0) {
      image(bgStart2, 0, 0);
      this.player1.draw();
      this.zombies[0].draw();
    } else if (this.gameLevel === 1) {
      image(bg, 0, 0);
      this.player1.draw();

      for (let i = 0; i < this.zombies.length; i++) {
        this.zombies[i].draw();
      }

      if (
        (this.player1.x === 12 || this.player1.x === 13) &&
        this.player1.y === 11
      ) {
        this.gameLevel = 2;
      }

      if (this.player1.moves === 0) {
        zombieMove.setVolume(0.1);
        zombieMove.play();

        for (let i = 0; i < this.zombies.length; i++) {
          this.zombies[i].move();
        }

        this.player1.moves = 3;
      }
    } else if (this.gameLevel === 2) {
      // win
      clear();
      image(bgSurvived, 0, 0);
      this.player1.draw();
      this.resetCharactersPositions();
    } else if (this.gameLevel === 1000) {
      // wasted
      push();
      tint(255, 20);
      image(bgWasted, 0, 0);
      pop();

      this.resetCharactersPositions();
    }
  }
}

function keyPressed() {
  if (keyCode === 32 && game.gameLevel === 0) {
    game.gameLevel = 1;
  }
  if (keyCode === 32 && game.gameLevel === 2) {
    game.gameLevel = 1;
  }
  if (keyCode === 32 && game.gameLevel === 1000) {
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
  game.player1.newPosition();
}
