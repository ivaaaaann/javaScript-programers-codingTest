let arr = [10];
let min = arr[0];
let minIndex;

for (let i = 1; i < arr.length; i++) {
  min > arr[i] ? (min = arr[i]) : min;
}

minIndex = arr.filter((num) => num !== min);

minIndex.length ? minIndex : (minIndex[0] = -1);
console.log(minIndex);
