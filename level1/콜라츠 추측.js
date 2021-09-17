let number = 6;
let result = number;
let count = 0;
while (result > 1) {
  count++;
  if (count == 500) {
    count = -1;
    break;
  }
  if (result % 2 == 0) {
    result /= 2;
    continue;
  }
  result = result * 3 + 1;
}

console.log(count);
