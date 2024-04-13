const person = {
    name: 'kodom ali',
    job: 'badam khai',
    3: 'Hisham',
    'add-dress' : 'kochukhet'
}


const prop = 'job';
console.log(person[prop]); // 1

console.log(person['job']); // 2
console.log(person.job); // 3



// 1 number process একটূ ভেজাইল্লা মনে হলেও কিছু ক্ষেত্রে কাজে লাগবে।
// console.log(person.3); এভাবে লেখলে error দেখাবে।
console.log(person[3]); // Hisham
console.log(person['add-dress']) // Kochukhet (Same goes for this)

