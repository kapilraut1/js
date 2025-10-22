// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promisse is good");
//   }, 2000);
// });

// promise.then((result) => console.log(result));

// console.log("Hello");

async function fetchData() {
  return "Data fetched";
}

await fetchData().then((result) => console.log(result));

console.log("Hello");
