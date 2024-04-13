// ForEach কিছুটা Map এর মতোই কাজ করে, কিন্তু result কে array বানায়ে Return আর করে না।
// ForEach : Array এর প্রতিটি উপাদান এর জন্য কিছু একটা কাজ করে। কিন্তু কিছু Return আর করে না।

const numbers = [1, 5, 6, 4, 14];
const result = numbers.forEach( n => console.log(n) );
console.log(result); // Result will be undefined, because nothing is returned