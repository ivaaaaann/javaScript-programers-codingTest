let n = 3;
let m = 12;
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
console.log([gcd(n, m), lcm(n, m)]);
