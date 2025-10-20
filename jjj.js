// const arr = [1, 2, 3, 4, 5];
// arr.unshift(4);
// console.log(arr[1]);
const words = ["spray", "elite", "sxuberant", "destruction", "present"];

const box = words.filter((e) => e.charAt(0) === "s");
const check = words.map((e) => e.charAt(0) === "s");
console.log(check);
console.log(box);
