const { performance } = require("perf_hooks");

const boxes = [1, 2, 3, 4, 5];

function generatePair(boxes) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 1; j < boxes.length; j++) {
      console.log("Pair ", boxes[i] + ",", boxes[j]);
    }
  }
  console.log("Done");
}

generatePair(boxes);
