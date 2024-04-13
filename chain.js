// Accessing Data

const data = [{ id: 1, name: 'Hisham', address: 'kochu khet'}];
// এখানে data কোনো OBJECT না কারণ এর আগে third bracket আছে।
// এটা Array এর ভেতরে একটা object, তাই data.address দিলে adrress print হবে না।

// console.log(data.address);  // This wont work
console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo', price: 81000},
        {id: 2, name: 'mac', price: 221000},

    ]
}

// Second product price
console.log(products.data[1].price); // Output: 165000 


const user = {
    id: 5001,
    name: 'Bill Gates',
    address:{
        street: {
            first: 'Campher Park, NY',
            second: 'Hamilton Streets, LA',
            third: 'Peterburg height, SN'
        },
        city: 'Dhaka'
    }
}

console.log(user.address.street.second); // Output: Hamilton Streets, LA

// Optional Chaining
const user2 = {
    id:5002,
    name: 'pori bibir majar',
    address: {
        city: 'Chittagong',
        country: 'Bangladesh',
    }
}
console.log(user2.address.street?.second); 