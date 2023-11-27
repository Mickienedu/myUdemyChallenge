// 89. An High-Level Overview of JavaScript

// 90. The JavaScript Engine and Runtime
 /* A js engene is simply a computer program that executes js code,
 there are a lot of steps involved in doing that, but essentially executing
 js code is what an engine does. Every browser has their js engine, 
 but the most known is Google's V-Eight */

//  91. Execution Contexts and The Call Stack
/*WWHAT IS INSIDE EXECUTION CONTEXT
1. VARIABLE ENVIRONMENT (let, const and var declarations), (Functions), 
(arguments object)
2. SCOPE CHAIN
3. this KEYWORD*/
// COMPILED CODE STARTS EXECUTION
'use strict'


const name = 'Mickie';

const first = () => {
    let a = 1;
    const b = second(7, 9);
    a = a + b;
    
};

function second(x, y) {
    var c = 2;
    return c;
}
const x = first();

//92. Scope and The Scope Chain
/*SCOPING controls how our program's variables are organized and accessed
by the javascript engine
WE HAVE WHAT IS CALLED LEXICAL SCOPING. lexical scoping is controlled
by placement of functions and blocks in the scope*/
/*THE SCOPE OF A VARIABLE is basically the entire region of our code, 
where a certain variable can be accessed*/

//THREE TYPES OF SCOPE 
//GLOBAL SCOPE
//FUNCTION SCOPE
//BLOCK SCOPE(ES6)

// GLOBAL SCOPE 
// const me = 'jonas';
// const job = 'teacher';
// const year = 1992;
// //outside orf any function or block
// //variables declared in global scope are accessible everywhere


//FUNCTION SCOPE
// function calcAge(birthYear) {
//     const now = 2023;
//     const age = now - birthYear;
//     return age;
// }
// console.log(now); //reference error
// //variables are accessible only INSIDE FUNCTION NOT outside
// //Also called local scope


//BLOCK SCOPE(ES6)
// if(year >= 1981 && year <= 1996) {
//     const millenial = true;
//     const food = 'Avocado toast';
// };
// console.log(millenial); //referenceError
//variables are accessible only inside block (block scope)
//HOWEVER this only applies to let and const variables
//functions are also block scoped(only in strict mode)


// 93. Scoping in Practice

function calcAge(birthYear) {
    const age = 2023 - birthYear;

    //function scope
    function printAge() {
        let output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output);

        //block scope
        if (birthYear >= 1981 && birthYear <= 1996) {
            // Creating NEW variable with same name as outer scope's variable

            const firstName = 'Steven'; //the firstname can change because it is defined in different scopes
            output = 'NEW OUTPUT!';  //reassigning outer scope's variable

            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(     add(2, 3));
        console.log(output);
    }
    printAge();
    return age;
}
const firstName = 'Mickie'; //this variable is in the global environment ready to be used
calcAge(1992)


//94. Variable Environment: Hoisting and The TDZ(TEMPORAL DEAD ZONE)
//hoisting is a very misunderstood concept in javascript
/*HOISTING WAS IMPLEMENTED so that we can use function declarations 
before we use them.*/

// 95. Hoisting and TDZ in Practice

//lets try to define variable before assigning
// console.log(me);
// console.log(job); //TDZ
// console.log(year); //TDZ

var me = 'mickie';
let job = 'teacher';
const year = 1992;

//FUNCTION
// console.log(addDecl(2,3)); // ans = 5. we were able to call the function declaration b4 it was actually defined
// console.log(addExpr(2,3)); //error, its not a function
// console.log(addArrow(2,3)); // ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a,b) {
    return a + b;
}
const addExpr = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

//EXAMPLE
if (!numProducts) deleteShoppingCart();
var numProducts = 10; //do not use var to declare a variable

function deleteShoppingCart() {
    console.log('All products deleted'); // this shows in the console
}

//always declare your variable at the top of each scope to make your code readable and to avoid confusion


// 96. The this Keyword
//this is an extremely important concept to understand in javascript

// const mickie = {
//     name: 'mickie',
//     year: 1992,
//     calcAge: function() {
//         return 2023 - this.year; //you can use this.year instead of 1992 or year
//     }
// };
// mickie.calcAge();
// console.log(mickie.calcAge());

//remember that arrowFunction do not get their own 'this' keyword



// 97. The this Keyword in Practice
console.log(this);

const calcAge1 = function(birthYear) {
    console.log(2023 - birthYear)
    console.log(this); //shown undefined
};
calcAge1(1992)

//with arrowFunction. arrowFunction do not get its own 'this' keyword
const calcAgeArrow = birthYear => {
    console.log(2023 - birthYear)
    console.log(this);
};
calcAgeArrow(1992);



// 98. Regular Functions vs. Arrow Functions
/*WE Can learn when we should use and when to avoid each of them */

const mickie = {
    firstName: 'mickie',
    year: 1992,
    calcAge: function() {
        console.log(this);
        console.log(2023 - this.year); 
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};
mickie.greet(); //we got, 'hey undfined'

//do not use arrowFunction in a method

//arguments keyword
// const addExpr1 = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr1(2, 5);
// addExpr1(2, 5, 8, 12);

// var addArrow1 = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addExpr1(2, 5, 8);
//ARGUMENTS IS NO LONGER INMPORTANT IN MODERN JAVASCRIPT



// 99. Primitives vs. Objects (Primitive vs. Reference Types)
/*PRIMITIVES = numbers, booleans, strings, undefined, null, bigInt, symbol.  */

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//lets create another scenario that has object.
/*OBJECTS = object literal, Arrays, Functions, etc */
const mine = {
    name: 'Mickie',
    age: 30,
};
const friend = mine;
friend.age = 27;
console.log('Friend:', friend); //Friend: {name: 'mickie', age: 27}
console.log('Mine', mine);  //Mine: {name: 'mickie', age: 27} //this answer is weird
//lets find out why it works this way
// i will have to rewatch this particular tutorial to understand what went wrong



//100. Primitives vs. Objects in Practice
// primitive types 
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference type
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//copying object
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);