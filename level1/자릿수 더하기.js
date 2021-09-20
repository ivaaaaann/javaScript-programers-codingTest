let n = 123;
let total = 0;

n.toString()
  .split("")
  .map((w) => {
    total += parseInt(w);
  });

console.log(total);
