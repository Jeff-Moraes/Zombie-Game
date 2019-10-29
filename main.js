const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(1050, 980);
  game.setup();
}

function draw() {
  game.draw();
}
