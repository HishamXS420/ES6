const numbers = [1, 3, 5, 7, 9];

const even = [];
for(const num of numbers){
    const evenned = num + 1;
    even.push(evenned);
}

console.log(even);

const number = [1,3,5,7,9];

const evenny = n => n + 1;
const result = number.map(evenny);
console.log(result);