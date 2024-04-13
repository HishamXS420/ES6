class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`); 
        // this দিয়ে class এর object এর property কে access করা হলো।
    }
    activity(){
        this.sleep();
    }
}


const Kodom = new Person('Kodom Ali', 22);
console.log(Kodom); // Person { name: 'Kodom Ali', age: 22 }
Kodom.sleep(); // Sleeping now Kodom Ali

const Badam = new Person('Kacha Badam', 51);
console.log(Badam); // Person { name: 'Kacha Badam', age: 51 }
Badam.sleep(); // Sleeping now Kacha Badam


