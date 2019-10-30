class Background {
  constructor() {}

  preload() {
    this.bg = loadImage("assets/background.png");
    this.street = loadImage("assets/street.png");
    this.wall1 = loadImage("assets/wall-1050px.png");
    this.wall2 = loadImage("assets/wall-350px.png");
    this.wall3 = loadImage("assets/wall-490px.png");
    this.wall4 = loadImage("assets/wall-490px.png");
    this.wall5 = loadImage("assets/wall-210px.png");
    this.wall6 = loadImage("assets/wall-70px.png");
  }

  draw() {
    image(this.bg, 0, 0);
    // image(this.street, 0, 350);
    // image(this.wall1, 0, 0);
    // image(this.wall2, 0, 280);
    // image(this.wall3, 490, 280);
    // image(this.wall4, 70, 560);
    // image(this.wall5, 700, 560);
    // image(this.wall6, 980, 560);
  }
}
