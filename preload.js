let bg;
let bgSurvived;
let bgStart2;
let bgWasted;
let background;
let gameMusic;
let zombieMove;

let zombieRunFrames = [];
let zombieStopedFrames = [];

let playerStopedFrames = [];
let playerRunFrames = [];
let playerWinFrames = [];

let map;

let gridSquare = 70;

function preload() {
  bg = loadImage("assets/background.png");
  bgSurvived = loadImage("assets/bg-survived.png");
  bgStart2 = loadImage("assets/bg-start2.png");
  bgWasted = loadImage("assets/bg-wasted.png");

  soundFormats("mp3");
  gameMusic = loadSound("assets/game-music.mp3");
  zombieMove = loadSound("assets/little-zombie.mp3");

  // Player Images

  for (let i = 1; i < 18; i++) {
    playerStopedFrames.push(loadImage(`assets/player/Idle-${i}.png`));
  }

  for (let i = 1; i < 12; i++) {
    playerRunFrames.push(loadImage(`assets/player/Run-${i}.png`));
  }

  for (let i = 1; i < 12; i++) {
    playerWinFrames.push(loadImage(`assets/player/slashing-${i}.png`));
  }

  // Zombies Images

  for (let i = 1; i < 12; i++) {
    zombieRunFrames.push(loadImage(`assets/zombie/Run${i}.png`));
  }

  for (let i = 1; i < 18; i++) {
    zombieStopedFrames.push(loadImage(`assets/zombie/Idle${i}.png`));
  }

  // MAP
  map = [
    [[5], [5], [5], [5], [5], [5], [5], [5], [5], [5], [5], [5], [5], [5], [5]],
    [
      [5],
      [1, 2, 4],
      [5],
      [5],
      [5],
      [5],
      [5],
      [5],
      [5],
      [1, 2],
      [1],
      [1],
      [1],
      [1],
      [1, 4]
    ],
    [[5], [2], [1], [1], [1], [1], [1], [1], [1], [0], [3], [3], [3], [0], [4]],
    [[5], [2], [0], [3], [3], [3], [3], [0], [0], [4], [5], [5], [5], [2], [4]],
    [[5], [2], [4], [5], [5], [5], [5], [2], [0], [4], [5], [5], [5], [2], [4]],
    [[5], [2], [4], [5], [5], [5], [5], [2], [0], [0], [1], [1], [1], [0], [4]],
    [[5], [2], [0], [1], [1], [1], [1], [0], [0], [3], [3], [3], [3], [0], [4]],
    [[5], [2], [3], [3], [3], [3], [3], [0], [4], [5], [5], [5], [5], [2], [4]],
    [
      [1, 2],
      [4],
      [5],
      [5],
      [5],
      [5],
      [5],
      [2],
      [4],
      [5],
      [5],
      [5],
      [5],
      [2],
      [4]
    ],
    [
      [2],
      [4],
      [5],
      [5],
      [5],
      [5],
      [5],
      [2],
      [0],
      [1],
      [1],
      [1],
      [1],
      [0],
      [3, 4]
    ],
    [[2], [0], [1], [1], [1], [1], [1], [0], [0], [3], [3], [3], [0], [4], [5]],
    [
      [3, 2],
      [3],
      [3],
      [3],
      [3],
      [3],
      [3],
      [3],
      [3, 4],
      [5],
      [5],
      [5],
      [2],
      [4],
      [5]
    ]
  ];
}
