let s = "FUIb JIhyyg JIkhtH";
let arr = s.split(" ");
let total = "";
arr.map((data, index) => {
  let word = data.toString().split("");
  for (let i = 0; i < word.length; i++) {
    if (i % 2 == 0) {
      word[i] = word[i].toUpperCase();
    } else {
      word[i] = word[i].toLowerCase();
    }
  }
  word.map((wordData) => (total += wordData));
  if (index !== arr.length - 1) {
    total += " ";
  }
});

console.log(total);
