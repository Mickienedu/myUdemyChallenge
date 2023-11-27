//128. Default Parameters
'use strict';
 
/*const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum, numPassengers, price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);*/


//129. How Passing Arguments Works: Value vs. Reference
/*const flight = 'LH123';
const mickie = {
    name: 'Mickie Okorie',
    passport: 23456789021
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 23456789021 ) {
        alert('Checked in');
    }else {
        alert('Wrong passport!');
    }
};

// checkIn(flight, mickie);
// console.log(flight);
// console.log(mickie);

// is the same as doing...
// const flightNum = flight;
// const passenger = mickie;  //checked in

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(mickie);
checkIn(flight, mickie);  //wrong passport
*/


// 130. First-Class and Higher-Order Functions

//FIRST CLASS FUNCTIONS
/* 1. JS treats functions as first class citizens
 2. this means that functions are simply values
  3. functions are just another 'type' of object*/

//   store functions in variables or properties;
// const add = (a, b) => a + b;

// const counter = {
//     value: 23,
//     inc: function() { this.value++;}
// }

// // pass functions as arguments to OTHER functions:
// const greet = () => console.log('Hey mickie');
// btnClose.addEventListener('click', greet)

// //return functions from functions
// //call methods on functions;

// counter.inc.bind(someOtherObject);

// // HIGHER ORDER FUNCTIONS
// /* 1. A function that receives another function as an argument, that returns
// a new function, or both.
//  2. This is only possible because of first class functions */

//  //1. FUNCTION THAT RECIEVES ANOTHER FUNCTION
//  const greet1 = () => console.log('Hey mickie');
//  btnClose.addEventListener('click', greet)  //greet is a call back function
// //addeventlistener is HIGHER ORDER FUNCTION

// //2. FUNCTION THAT RETURNS NEW FUNCTION
// function count() { //higher order function
//     let counter = 0;
//     return function() { //returned function
//         counter++;
//     };
// }


//131. Functions Accepting Callback Functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();

}
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//js uses callbacks all the time
const high5 = function() {
    console.log('✌');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


// 132. Functions Returning Functions
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name} `);
    }
}
const greeterHey = greet('Hey');
greeterHey('Mickie');
greeterHey('Steven');

greet('Hello')('Mickie');

// rewriting this function to arrow function 
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Mickie');



// 133. The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} 
        flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Mickie Okorie');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//does not work
// book(23, 'Benson Grig');

//call method
book.call(eurowings, 23, 'Benson Grig')
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//APPLY METHOD
const flightData = [583, 'Jude Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
//the apply method is no longer use in modern javascript

book.call(swiss, ...flightData);


//134. The bind Method