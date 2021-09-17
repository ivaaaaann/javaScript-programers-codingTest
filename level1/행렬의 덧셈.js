let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];
let resultArr = [];
var answer = [];
let word;

let newArr1;
let newArr2;

newArr1 = arr1.map((data) =>
  data.map((data2) => {
    return data2;
  })
);
newArr2 = arr2.map((data) =>
  data.map((data2) => {
    return data2;
  })
);

console.log(...newArr1);
console.log(...newArr2);
// 나중에 풀게요
