let x = 11;
let stringX = x.toString();
let total = 0;
let result;

for (let i = 0; i < stringX.length; i++) {
  let number = stringX.charAt(i);
  total += parseInt(number);
}
x % total == 0 ? (result = true) : (result = false);

console.log(result);
