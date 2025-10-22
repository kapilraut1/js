let arr = [1, 2, 3, 4, 5];

// function check(array) {
//   let box = array.map((item) => item * 2);
//   return box;
// }

console.log(prac(arr));

function prac(array) {
  let bo = [];
  for (let i = 0; i < array.length; i++) {
    bo.push(array[i] * 2);
  }
  return bo;
}
