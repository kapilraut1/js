// let arr = [1, 2, 3, 4, 5];

// function check(array) {
//   let box = array.filter((item) => item % 2 === 0);
//   return box;
// }

// console.log(prac(arr));

function prac(array, callback) {
  let bo = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      bo.push(array[i]);
    }
  }
  return bo;
}
let arr = [1, 2, 3, 4, 5];
let see = prac(arr, (item) => item % 2 === 0);
console.log(see);
