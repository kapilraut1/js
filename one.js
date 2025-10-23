function Counter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const inc = Counter();
console.log(inc());
console.log(inc());
console.log(inc());

const dec = Counter();
console.log(dec());
console.log("Champ is here!!!");
console.log(dec());
