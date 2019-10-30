let gridSquare = 70;

class Player {
  constructor(x, y) {
    this.row = y * gridSquare;
    this.col = x * gridSquare;
    this.x = x;
    this.y = y;
    this.position = {};
    this.moves = 3;

    this.playerStopedFrames = [];
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
      this.frameCounter =
        (this.frameCounter + 1) % this.playerStopedFrames.length;
    }
    const playerFrame = this.playerStopedFrames[this.frameCounter];
    image(playerFrame, this.col, this.row, 80, 70);
  }
}
