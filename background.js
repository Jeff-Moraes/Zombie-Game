class Background {
  constructor() {}

  preload() {
    this.bg = loadImage("assets/background.png");
  }

  draw() {
    image(this.bg, 0, 0);
  }
}
