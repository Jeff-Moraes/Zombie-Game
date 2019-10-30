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

    this.zombieRunFrames = [];
    this.zombieStopedFrames = [];
    this.frameCounter = 0;
  }
  setup() {
    this.position = map1[this.y][this.x];
  }

  preload() {
    game.zombiesPositions.push([this.x, this.y, this.num]);
    this.zombieRunFrames.push(loadImage("assets/zombie/Run1.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run2.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run3.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run4.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run5.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run6.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run7.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run8.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run9.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run10.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run11.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run12.png"));

    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle1.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle2.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle3.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle4.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle5.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle6.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle7.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle8.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle9.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle10.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle11.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle12.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle13.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle14.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle15.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle16.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle17.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle18.png"));
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
    this.setup();
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
    } else {
      if (this.col === game.player1.col && this.row === game.player1.row) {
        game.player1.playerDied();
      }

      if (frameCount % 10 === 0) {
        this.frameCounter = this.frameCounter + 2;
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
    }
  }
}
