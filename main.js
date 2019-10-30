const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(1050, 840);
  game.setup();
}

function draw() {
  game.draw();
}
