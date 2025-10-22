const arr = [1, 2, 3, 4, 5];

const box = arr.reduce((acc, cur) => {
  return acc * cur;
});

console.log(box);
