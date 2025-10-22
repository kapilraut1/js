let arr = [1, 2, 3, 4, 4, 3, 2, 8];

function check(array) {
  let box = array.filter(
    (item) => !array.includes(item, array.indexOf(item) + 1)
  );
  return box;
}

// function check(array) {
//   let box = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] !== array[j] && !box.includes(array[i])) {
//         box.push(array[i]);
//       }
//     }
//   }
//   return box;
// }

console.log(check(arr));
