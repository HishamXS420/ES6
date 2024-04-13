// // Filter : কোনো একটা শর্ত অনুযায়ী কিছু উপাদানকে বাছাই করা।
// const numbers = [1, 5, 6, 4, 14];
// const players = [65, 64, 78, 89, 24, 62];
// const selected = players.filter(p => p > 65);
// console.log(selected); // OP: [ 78, 89 ]

// Filter : কোনো একটা শর্ত অনুযায়ী কিছু উপাদানকে বাছাই করা।
const numbers = [1, 5, 6, 4, 14];
const players = [65, 64, 78, 89, 24, 62];
const selected = players.filter(p => p > 96);
const all = players.filter(p => p > 20);
const odd = players.filter(p => p % 2 === 1);
console.log(odd); // OP: [ 65, 89 ]
// console.log(selected); // OP: []
// console.log(all); // OP: [ 65, 64, 78, 89, 24, 62 ]


const friends = ['Tom', 'Friends', 'John', 'Michael', 'David', 'Tim', 'Josna'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends); // OP: [ 'Friends', 'Michael', 'David', 'Josna' ]