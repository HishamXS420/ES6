const numbers = [4, 5 ,3 ,45 ,47, 98];

// General way
const doubled= [];
for(const num of numbers){
    const double = num*2;
    doubled.push(double);
}

//console.log(doubled); // [ 8, 10, 6, 90, 94, 196 ]

// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

// Simple way 1
const no = [4, 5 ,3 ,45 ,47, 98];

function doubleIt(numb){
   // console.log('num now', numb);
    return numb * 2;
}
const result = no.map(doubleIt);
//console.log(result); // Main Output : [ 8, 10, 6, 90, 94, 196 ]
// প্রথমে প্রতিটা element এর জন্য function call করে output টাকে no এর মধ্যে entry করেছে এবং entry করা শেষ হলে পুরো array টাকে result এর মধ্যে রেখেছে।


// ShortCut
const double2 = n => n*2;
const result2 = no.map(double2);
//console.log(result2);


// More shortcut and more efficient
const output = numbers.map(n => n*2);
console.log(output);