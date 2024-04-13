/*
    1. var let const
    2. default parameter
    3. template string
    4. Arrow function
    5. Destructuring and Spread Operator
    6. Object.keys, Object.values, Object.entries
    7. for of used in array and string
    8. for in loop used in object

    ler কোনো একটা block (ex: if-else block) এর বাহিরে যায় না, কিন্তু var বাহিরে যায়।


*/

const a = 56;
const numbers = [56, 7, 72];
const person = {
    name : "Ananta Jalil"
}

const message = `Hi, ${person.age} has a : ${a}$ bank account access to ${numbers[1]}`;
console.log(message);

const square = x => x*x;
const sum = (a, b) => a + b;

const {age, z, ...others} = {x: 2, y: 5, z: 3, name: 'Abhishek', age: 56}
// যেঁ property টাকে variable হিসেবে নিতে হ্য, সেটাকে বাম পাশের brace এর ভেতরে লিখে ফেলতে হবে। আর যদি বাকি সবগুলো property কে আরেকটা variable এর মধ্যে রাখতে হয়, তাহলে 
//{...others} লিখতে হবে।

const [first, second , ...remaining] = ['ram','sam','jodu', 'modhu'];
console.log(remaining);