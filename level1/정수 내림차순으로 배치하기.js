let n = 118373;
let stringN = n.toString();
let arr = [];
let result = "";
for (let i = 0; i < stringN.length; i++) {
  arr.push(stringN.charAt(i));
}
arr.sort(function (a, b) {
  return b - a;
});
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);
