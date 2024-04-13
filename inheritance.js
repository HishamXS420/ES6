class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na, chole na chole na re');
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price); // Parent class এর common properties গুলো super এর মধ্যে রাখতে হবে
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price); // Parent class এর common properties গুলো super এর মধ্যে রাখতে হবে
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

// New keyword এর মাধ্যমে class এর constructor কে call কর হয়।

// JavaScript ব্যবহার করে Prototype based Inheritance