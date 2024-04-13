const numbers = [12, 109 ,3, 53 ,6];

const doubled = numbers.map(num => num*2);
//console.log(doubled); // OP : [ 24, 218, 6, 106, 12 ]

const fiveBonus = numbers.map(num => num + 5);
//console.log(fiveBonus); // OP : [ 17, 114, 8, 58, 11 ]

const halves = numbers.map( n => n/2);
// console.log(halves); // OP: [ 6, 54.5, 1.5, 26.5, 3 ]

const friends = ['Tom', 'Friends', 'John', 'Michael', 'David'];

const lengths = friends.map(frnd => frnd.length);
console.log(lengths);

const firstLetter =  friends.map(friend => friend[0]);
console.log(firstLetter);

