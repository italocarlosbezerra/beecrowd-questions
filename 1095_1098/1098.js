for (let i = 0; i <= 20; i += 2) {
  for (let j = 1; j <= 3; j++) {
    const I = i / 10;
    const J = i / 10 + j;
    console.log(`I=${I} J=${J}`);
  }
}

// for (let i = 0; i <= 2; i += 0.2) {
//   for (let j = 1; j <= 3; j++) {
//     if (i < 0.2 || i > 1.8) {
//       console.log(`I=${i.toFixed(0)} J=${(i + j).toFixed(0)}`);
//     } else {
//       console.log(`I=${i.toFixed(1)} J=${(i + j).toFixed(1)}`);
//     }
//   }
// }

// let i, j;
// let a, b;

// for (let i = 0; i <= 2; i += 0.2) {
//   for (let j = 1; j <= 3; j++) {
//     if (i >= 0 && i < 0.2) {
//       console.log(`I=${Math.trunc(i)} J=${Math.trunc(i + j)}`);
//     } else if (i >= 0.2 && i <= 1.8) {
//       console.log(`I=${i.toFixed(1)} J=${(i + j).toFixed(1)}`);
//     } else {
//       console.log(`I=${Math.round(i)} J=${Math.round(i + j)}`);
//     }
//   }
// }
