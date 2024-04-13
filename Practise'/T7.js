const people = [
    {name: 'Meena', age: 25},
    {name: 'Rina', age: 15},
    {name: 'Sunchorita', age: 30},
];

let totalAge = 0;
for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}

console.log("Total sum using for loop:", totalAge); 

const total = people.reduce((acc, person) => acc + person.age, 0); // 70

console.log("Sum", total); //  Sum 70