class Zombie {
  constructor(x, y, num) {
    this.num = num;
    this.row = y * gridSquare;
    this.col = x * gridSquare;
    this.x = x;
    this.y = y;
    this.position = {};

    this.x1 = this.col;
    this.y1 = this.row;

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
    this.zombieRunFrames.push(loadImage("assets/zombie/Run9.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run8.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run7.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run6.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run5.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run4.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run3.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run2.png"));
    this.zombieRunFrames.push(loadImage("assets/zombie/Run1.png"));

    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle4.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle3.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle2.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle1.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle2.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle3.png"));
    this.zombieStopedFrames.push(loadImage("assets/zombie/Idle4.png"));
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
        console.log(i);
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
    if (this.col === game.player1.col && this.row === game.player1.row) {
      console.log("ok");
    }

    // this.x1 = this.x1 + (this.col - this.x1) * 0.05;
    // image(zombieFrame, this.x1, this.row - 2, 70, 65);

    if (frameCount % 10 === 0) {
      this.frameCounter = this.frameCounter + 1;
    }

    if (this.x1 === this.col && this.y1 === this.row) {
      const zombieIdle = this.zombieStopedFrames[
        this.frameCounter % this.zombieStopedFrames.length
      ];

      image(zombieIdle, this.x1, this.y1 - 2, 70, 65);
    } else {
      const zombieFrame = this.zombieRunFrames[
        this.frameCounter % this.zombieRunFrames.length
      ];
      image(zombieFrame, this.x1, this.y1, 70, 65);
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