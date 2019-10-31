class Zombie {
  constructor(x, y, num) {
    this.num = num;
    this.row = y * gridSquare - 10;
    this.col = x * gridSquare;
    this.x = x;
    this.y = y;
    this.position = {};

    this.x1 = this.col;
    this.y1 = this.row;

    this.x1Start = -700;
    this.y1Start = 100;

    this.zombieRunFrames = zombieRunFrames;
    this.zombieStopedFrames = zombieStopedFrames;
    this.frameCounter = 0;
  }

  resetPostion(resetX, resetY) {
    this.x = resetX;
    this.y = resetY;

    this.row = resetY * gridSquare - 10;
    this.col = resetX * gridSquare;

    this.x1 = this.col;
    this.y1 = this.row;
    this.preload();
  }

  preload() {
    game.zombiesPositions.push([this.x, this.y, this.num]);
  }

  collides(direction) {
    let zombieX;
    let zombieY;
    if (direction === "right") {
      zombieX = this.x + 1;
    } else if (direction === "left") {
      zombieX = this.x - 1;
    } else {
      zombieX = this.x;
    }
    if (direction === "up") {
      zombieY = this.y - 1;
    } else if (direction === "down") {
      zombieY = this.y + 1;
    } else {
      zombieY = this.y;
    }

    for (let i = 0; i < game.zombiesPositions.length; i++) {
      if (this.num !== game.zombiesPositions[i][2]) {
        if (
          zombieX === game.zombiesPositions[i][0] &&
          zombieY === game.zombiesPositions[i][1]
        ) {
          return true;
        }
      }
    }
  }

  move() {
    this.position = map[this.y][this.x];

    if (this.x < game.player1.x && !this.position.includes(4)) {
      if (!this.collides("right")) {
        this.x++;
        this.col += gridSquare;
      }
    } else if (this.y > game.player1.y && !this.position.includes(1)) {
      if (!this.collides("up")) {
        this.y--;
        this.row -= gridSquare;
      }
    } else if (this.x > game.player1.x && !this.position.includes(2)) {
      if (!this.collides("left")) {
        this.x--;
        this.col -= gridSquare;
      }
    } else if (this.y < game.player1.y && !this.position.includes(3)) {
      if (!this.collides("down")) {
        this.y++;
        this.row += gridSquare;
      }
    }
    this.position = map[this.y][this.x];
    for (let i = 0; i < game.zombiesPositions.length; i++) {
      if (this.num === game.zombiesPositions[i][2]) {
        game.zombiesPositions[i][0] = this.x;
        game.zombiesPositions[i][1] = this.y;
      }
    }
  }

  draw() {
    if (game.gameLevel === 0) {
      if (frameCount % 10 === 0) {
        this.frameCounter = this.frameCounter + 3;
      }
      const zombieFrame = this.zombieRunFrames[
        this.frameCounter % this.zombieRunFrames.length
      ];
      image(zombieFrame, this.x1Start, this.y1Start, 300, 300);
      if (this.x1Start < width) {
        this.x1Start += 5;
      } else {
        this.x1Start = -700;
      }
    } else if (game.gameLevel === 1 && game.player1.aLife === true) {
      if (frameCount % 10 === 0) {
        this.frameCounter = this.frameCounter + 1;
      }

      if (this.x1 === this.col && this.y1 === this.row) {
        const zombieIdle = this.zombieStopedFrames[
          this.frameCounter % this.zombieStopedFrames.length
        ];

        image(zombieIdle, this.x1 - 15, this.y1 - 15, 100, 100);
      } else {
        const zombieFrame = this.zombieRunFrames[
          this.frameCounter % this.zombieRunFrames.length
        ];
        image(zombieFrame, this.x1 - 15, this.y1 - 15, 100, 100);
        if (this.x1 < this.col) {
          this.x1 += 1;
        }
        if (this.y1 < this.row) {
          this.y1 += 1;
        }
        if (this.x1 > this.col) {
          this.x1 -= 1;
        }
        if (this.y1 > this.row) {
          this.y1 -= 1;
        }
      }
    }

    if (
      game.gameLevel === 1 &&
      this.col === game.player1.col &&
      this.row === game.player1.row
    ) {
      setTimeout(() => {
        game.player1.aLife = false;
      }, 600);
    }
  }
}
