// Reduce: সবগুলো উপাদান থেকে নিয়ে নিয়ে নিজে কিছু একটা বানাবে।

const numbers = [65, 64, 78, 89, 24, 62];

const total = numbers.reduce((previous, current) => previous + current , 0); // (condition/call back function, initial value)
// or (previous , current) => previous + current , 0

console.log(total); // OP: 382

const sum = numbers.reduce((p,c) => p + c , 0);
console.log(sum);  // OP: 382