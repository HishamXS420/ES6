const products = [
    {id: 1, name: 'lenovo' , price: 65400},
    {id: 2, name: 'dell' , price: 85400},
    {id: 3, name: 'hp' , price: 95400},
    {id: 4, name: 'mac' , price: 233000},
    {id: 5, name: 'msi' , price: 187000},
]

const names = products.map(product => product.name);
// console.log(names); // [ 'lenovo', 'dell', 'hp', 'mac', 'msi' ]

const prices = products.map(p => p.price);
// console.log(prices); // [ 65400, 65400, 65400, 65400, 65400 ]

products.forEach( p => console.log(p.id));
/*
1
2
3
4
5
*/

// filter
const expensive = products.filter( p => p.price > 100000);
console.log(expensive);
/*
[
  { id: 4, name: 'mac', price: 233000 },
  { id: 5, name: 'msi', price: 187000 }
]
*/

// Find
const affordable = products.find( p => p.price < 80000);
console.log(affordable); // { id: 1, name: 'lenovo', price: 65400 }

// Reduce 
const total = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(total); // 666200