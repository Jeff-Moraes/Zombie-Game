class Map {
  constructor() {
    // this.map;
  }
  preload() {
    this.wallTop = loadImage("assets/walls-top.png");
  }
  setup() {
    this.map = createMap(map1);
  }
  draw() {
    createMap(map1);
  }
}

function createMap(map) {
  let rowStart = 0;
  let squareSize = 70;
  let colStart = 0;
  map.forEach(colArr => {
    colArr.forEach(rowArr => {
      if (rowStart <= width) {
        if (rowArr.includes(1)) {
          push();
          fill("black");
          rect(rowStart, colStart, squareSize, 10);
          pop();
        } else if (rowArr.includes(3)) {
          fill("black");
          rect(rowStart, colStart + squareSize, squareSize, 10);
        }
        if (rowArr.includes(2)) {
          // image(this.wallTop, rowStart, colStart, 5, squareSize);

          fill("black");
          rect(rowStart, colStart, 5, squareSize);
        } else if (rowArr.includes(4)) {
          fill("black");
          rect(rowStart + squareSize - 5, colStart, 5, squareSize);
        }
        rowStart += squareSize;
      } else {
        rowStart = 0;
        colStart += squareSize;
      }
    });
    rowStart = 0;
    colStart += squareSize;
  });
}

// function createMap(map) {
//   let rowStart = 0;
//   let squareSize = 70;
//   let colStart = 0;
//   map.forEach(colArr => {
//     colArr.forEach(rowArr => {
//       if (rowStart < width) {
//         if (rowArr.includes(1)) {
//           line(rowStart, colStart, rowStart + squareSize, colStart);
//           stroke(50);
//         }
//         if (rowArr.includes(3)) {
//           line(
//             rowStart,
//             colStart + squareSize,
//             rowStart + squareSize,
//             colStart + squareSize
//           );
//           stroke(50);
//         }
//         if (rowArr.includes(2)) {
//           line(rowStart, colStart, rowStart, colStart + squareSize);
//           stroke(50);
//         } else if (rowArr.includes(4)) {
//           line(
//             rowStart + squareSize,
//             colStart,
//             rowStart + squareSize,
//             colStart + squareSize
//           );
//           stroke(50);
//         }
//         rowStart += squareSize;
//       } else {
//         rowStart = 0;
//         colStart += squareSize;
//       }
//     });
//     rowStart = 0;
//     colStart += squareSize;
//   });
// }

let map1 = [
  [
    [1, 2],
    [1],
    [1],
    [1],
    [1],
    [1, 4],
    [1, 2],
    [1],
    [1],
    [1],
    [1],
    [1, 4],
    [1, 2],
    [1],
    [1, 4]
  ],
  [[2], [0], [0], [0], [0], [4], [2], [0], [4], [2], [0], [4], [2], [0], [4]],
  [[2], [0], [0], [0], [0], [4], [2], [0], [4], [2], [0], [4], [2], [0], [4]],
  [
    [3, 2],
    [3],
    [3],
    [3],
    [3],
    [4],
    [2],
    [3],
    [3, 4],
    [3, 2],
    [3],
    [3],
    [3],
    [3],
    [4]
  ],
  [
    [1, 2],
    [1],
    [1],
    [1],
    [1],
    [0],
    [0],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [0]
  ],
  [[2], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[2], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[2], [3], [3], [3], [3], [3], [3], [3], [0], [0], [3], [3], [3], [0], [0]],
  [
    [2],
    [1],
    [1],
    [1],
    [1],
    [1, 4],
    [1, 2],
    [1],
    [4],
    [2],
    [1],
    [1, 4],
    [1, 2],
    [0],
    [1, 4]
  ],
  [[2], [0], [4], [2], [0], [4], [2], [0], [4], [2], [0], [4], [2], [0], [4]],
  [[2], [0], [4], [2], [0], [4], [2], [0], [4], [2], [0], [0], [0], [0], [4]],
  [
    [3, 2],
    [3],
    [3, 4],
    [3, 2],
    [3],
    [3],
    [3],
    [3],
    [3, 4],
    [3, 2],
    [3],
    [3, 4],
    [3, 2],
    [3],
    [3, 4]
  ]
];
