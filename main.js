const game = new Game();

function setup() {
  createCanvas(1050, 840);

  gameMusic.setVolume(0);
  gameMusic.loop();
  gameMusic.play();
}
function draw() {
  game.draw();
}
