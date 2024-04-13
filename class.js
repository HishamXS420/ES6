const products = [
    {id: 1, name: 'lenovo' , price: 65400},
    {id: 2, name: 'dell' , price: 85400},
    {id: 3, name: 'hp' , price: 95400},
    {id: 4, name: 'mac' , price: 233000},
    {id: 5, name: 'msi' , price: 187000},
]

// Class এর নাম generally বড় হাতের letter দিয়ে শুরু করা উচিত
// Class এর মাধ্যমে similar type এর অনেকগুলো জিনিস তৈরি করা যায়।
// has some properties, and methods

// Class এর মধ্যে function & variables ও লেখা যায়, কিন্তু সেখানে function keyword টি অথবা variables এর মধ্যে var, let ,const এগুলো ব্যবহার করা হয় না।

class Product {
    country = 'Bangladesh';
    constructor(name){
        this.name = name; //  এটা Constructor function এর ভেতরে থাকা name
    } //  this এর পরেরটা হচ্ছে declare করা name।
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
}

const lenovo = new Product('Oreh Bhai');
// console.log(lenovo); // OP : Product { country: 'Bangladesh' }
// lenovo.speak('oba kita kou'); // OP : Talking about oba kita kou

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}

const tapon = new Teacher('Tapon sir', 'Physics');
console.log(tapon); // OP: Teacher { name: 'Tapon sir', subject: 'Physics' }

const rashid = new Teacher('Rashid', 'English');
console.log(rashid); // OP: Teacher { name: 'Rashid', subject: 'English' }
