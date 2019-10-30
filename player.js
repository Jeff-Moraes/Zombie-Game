let gridSquare = 70;

class Player {
  constructor(x, y) {
    this.row = y * gridSquare;
    this.col = x * gridSquare;
    this.x = x;
    this.y = y;
    this.position = {};
    this.moves = 3;

    this.x1 = this.col;
    this.y1 = this.row;

    this.playerStopedFrames = [];
    this.playerRunFrames = [];
    this.frameCounter = 0;
  }

  preload() {
    this.playerStopedFrames.push(loadImage("assets/player/Idle-1.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-2.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-3.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-4.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-5.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-6.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-7.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-8.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-9.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-10.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-11.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-12.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-13.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-14.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-15.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-16.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-17.png"));
    this.playerStopedFrames.push(loadImage("assets/player/Idle-18.png"));

    this.playerRunFrames.push(loadImage("assets/player/Run-1.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-2.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-3.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-4.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-5.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-6.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-7.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-8.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-9.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-10.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-11.png"));
    this.playerRunFrames.push(loadImage("assets/player/Run-12.png"));
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
    if (frameCount % 10 === 0) {
      this.frameCounter = this.frameCounter + 2;
    }

    if (this.x1 === this.col && this.y1 === this.row) {
      const playerFrame = this.playerStopedFrames[
        this.frameCounter % this.playerStopedFrames.length
      ];

      image(playerFrame, this.x1 - 15, this.y1 - 15, 100, 100);
    } else {
      const playerFrame = this.playerRunFrames[
        this.frameCounter % this.playerRunFrames.length
      ];
      image(playerFrame, this.x1 - 15, this.y1 - 15, 100, 100);
    }

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

    // if (frameCount % 10 === 0) {
    //   this.frameCounter =
    //     (this.frameCounter + 1) % this.playerStopedFrames.length;
    // }
    // const playerFrame = this.playerStopedFrames[this.frameCounter];
    // image(playerFrame, this.col - 10, this.row - 15, 100, 100);
  }
}
