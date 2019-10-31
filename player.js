class Player {
  constructor(x, y) {
    this.row = y * gridSquare - 10;
    this.col = x * gridSquare;
    this.x = x;
    this.y = y;
    this.position = {};
    this.moves = 3;
    this.canMove = true;
    this.aLife = true;

    this.x1 = this.col;
    this.y1 = this.row;

    this.x1Start = -200;
    this.y1Start = 100;

    this.playerStopedFrames = playerStopedFrames;
    this.playerRunFrames = playerRunFrames;
    this.playerWinFrames = playerWinFrames;
    this.frameCounter = 0;
  }

  resetPostion(resetX, resetY) {
    this.x = resetX;
    this.y = resetY;

    this.row = resetX * gridSquare - 10;
    this.col = resetY * gridSquare;

    this.x1 = this.col;
    this.y1 = this.row;
    this.aLife = true;
    this.moves = 3;
    this.newPosition();
  }

  newMoves() {
    setTimeout(() => {
      this.canMove = true;
    }, 800);
  }

  newPosition() {
    this.position = map[this.y][this.x];
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
    if (game.gameLevel === 0) {
      // game start
      if (frameCount % 10 === 0) {
        this.frameCounter = this.frameCounter + 2;
      }
      const playerFrame = this.playerRunFrames[
        this.frameCounter % this.playerRunFrames.length
      ];
      image(playerFrame, this.x1Start, this.y1Start, 300, 300);
      if (this.x1Start < width + 150) {
        this.x1Start += 4;
      } else {
        this.x1Start = -200;
      }
    } else if (game.gameLevel === 2) {
      // game win
      if (frameCount % 10 === 0) {
        this.frameCounter = this.frameCounter + 1;
      }
      const playerFrame = this.playerWinFrames[
        this.frameCounter % this.playerWinFrames.length
      ];
      image(playerFrame, 350, 150, 300, 300);
    } else if (game.gameLevel === 1 && this.aLife === true) {
      // game
      if (frameCount % 10 === 0) {
        this.frameCounter = this.frameCounter + 2;
      }

      if (this.x1 === this.col && this.y1 === this.row) {
        const playerFrame = this.playerStopedFrames[
          this.frameCounter % this.playerStopedFrames.length
        ];

        image(playerFrame, this.x1 - 15, this.y1 - 15, 100, 100);
      } else if (game.gameLevel === 1 && !this.canMove) {
        const playerFrame = this.playerRunFrames[
          this.frameCounter % this.playerRunFrames.length
        ];
        image(playerFrame, this.x1 - 15, this.y1 - 15, 100, 100);

        if (this.x1 < this.col) {
          this.x1 += 2;
        }
        if (this.y1 < this.row) {
          this.y1 += 2;
        }
        if (this.x1 > this.col) {
          this.x1 -= 2;
        }
        if (this.y1 > this.row) {
          this.y1 -= 2;
        }
      }
    }
  }
}
