let n = 12345;
let newN = (n + "")
  .split("")
  .reverse()
  .map((data) => parseInt(data));
console.log(newN);
