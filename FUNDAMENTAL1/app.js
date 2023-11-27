// alert("Hello world!");
let js = "amazing";
if (js === "fun") {
    console.log("Javascript is fucking FUN!")
}else console.log("javascript bores me!");

// Values and Variables
let country = "Nigeria";
let continent = "Africa";
let population = 200000000;
let result = country + " " + continent + " "+ population ;
console.log(result);


// DATA TYPES
// THE 7 PRIMITIVE DATA TYPES ARE:
/* 1: NUMBER; example; let age = 23;
   2:   String; example; let firstName = "Jonas";
   3:    Boolean; example; let fullAge = true;*/
// we will focus on these three for now. there are four others. others are;
// 4: UNDEFINED; example; let children;
// 5:  NULL; it also means 'empty value'
// 6:  Symbol
// 7: BIGINT

let firstName = "Mickie";
let age = 30;
let fullAge = true;
let children; //empty variable

if (fullAge === false) {
    console.log("he is 30");
}else console.log("he lied!");

console.log(firstName)

console.log(typeof age )
console.log(typeof "Mickie" )
console.log(typeof fullAge )
console.log(typeof children); //undefined

// TO ASSIGN A NEW VALUE TO ALREADY EXISTING VARIABLE, do this below
fullAge ="YES!";
console.log(fullAge);
console.log(typeof fullAge); //the data type has changed from boolean to string

// assigning a value to the undefined variable
children = 12;
console.log(children);
console.log(typeof children);

// // CODE CHALLENGE
// let isIsland = true;
// let language;

// console.log(typeof isIsland)
// console.log(typeof language)



//  let, CONST AND VAR

// LET
let herAge = 30;
herAge = 34; //it can be changed once redeclared

//CONST
// const birthYear = 1992;
// birthYear = 1994; //it can never change if you tries to redclare it

// const jobb; // this is also not acceptable

// BY default, ALWAYS USE CONST


// BASIC OPERATOR 
// Math OPERATOR
// const now = 2023;
// const ageMickie = now - 1992;
// const ageSarah = now - 2000;
// console.log(ageMickie, ageSarah);

// console.log(ageMickie * 2, ageMickie / 10, 2 ** 3);
// //2 ** 3 MEANS 2 TO THE POWER OF 3 = 2 * 2 * 2

// const myName = "michael";
// const lastName = "okorie";
// console.log(myName + " " + lastName)


// // ASSIGNMENT OPERATORS
// let x = 10 + 5; //15
// x += 10; //x = x + 10 result is 25
// x *= 4; // x = x * 4 result is 100
// x++; // x = x + 1 result is 101
// x--; // x = x - 1 result is 100
// console.log(x);


// COMPARISON OPERATOR
// console.log(ageMickie > ageSarah); // >, <, >=, <=
// console.log(ageSarah <= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

// console.log(now - 2002 >= now - 2004);



//14; OPERATOR PRECEDENCE 
//BROWSE MDN
const now = 2023;
const ageMickie = now - 1992;
const ageSarah = now - 2000;

console.log(now - 2002 > now - 2004);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); //answer is 10 10

const averageAge = (ageMickie + ageSarah) / 2
console.log(ageMickie, ageSarah, averageAge);



// 18; Strings and Template Literals

const myName = "Mickie";
const job = "Teacher";
const birthYear =  1992;
const year = 2023;

const mickie = "I'm " + " "  + myName + "," + " " + "a "+ (year - birthYear) + " 0ld" + "!";
console.log(mickie);

//WITH TEMPLATE LITERAL, WE CAN WRITE A STRING IN A NORMAL WAY AND THEN
//BASICALLY INSERT A VARIABLE  DIRECTLY INTO THE STRING.

const mickieNew  = ` I'm ${myName}, a ${year - birthYear} year old ${job}!`; //this back tick tells javascript that we are writing a template literals
console.log(mickieNew); 
//the example above is how TEMPLATE LITERAL works 

console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lines'); // we achieved this by using single quote and \n\

console.log(`String with
multiple 
lines`); //we did the same by using only the back tick
//always use template literal whenever you need a multiple lines



// 19; Taking Decisions: if / else Statements

const yourAge = 15;

if (yourAge >= 18) {
    console.log('Sarah can start driving license 😎');
}else {
    const yearsLeft =  18 - yourAge;
    console.log(`Sarah is too young, wait another ${yearsLeft} years 😢`);
};


// ANOTHER EXAMPLE
const bornYear = 1992;
let century; //defining the variable with empty value
if(bornYear <= 2000) {
     century = 20; //assigning the century
}else {
     century = 21;
};
console.log(century)




// Type Conversion and Coercion
//type conversion is when you manually convert from one type to another
//lets assume we have this inputYear from our input

//TYPE CONVERSION
let inputYear =  '1992';
console.log(Number(inputYear), inputYear); //one is a Number, the other is STRING

console.log(Number(inputYear) + 31);

console.log(Number('jonas'));
console.log(String(23), 23)

//TYPE COERCION
//
console.log('I am ' + 23 +  ' years old'); //whenever there is an operation b/w STRING and NUMBER, the number will be converted to strings
console.log('23' - '10' - 3); //here, the strings are converted to number

console.log('23' * '2'); //here, the strings are converted to number

let n = '1' + 1; // '11' we got 11 becoz we have one string here and the + operator will automatically convert the number to string
n = n - 1;
console.log(n)

let b = '10' - '4' - '3' - 2 + '5';
console.log(b)


// Truthy and Falsy Values
//falsy values are values that are not exactly false but will become false when you try to convert in to a boolean
//5 falsy values are; 0, "", undefined, null, NaN.
//EVERYOTHER THINGS ARE TRUTHY VALUES

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

// how type cohersion works in if else condition
const money = 0; 
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!') // it picks this one because '0' is falsy value
};

// another example
let height; //IT IS NOT DEFINED. EVEN IF YOU ASSIGN '0'  HERE, IT WILL STILL BE UNDEFINED
if (height) {
    console.log('Yay, height is defined')
}else {
    console.log('Height is not UNDEFINED') // WE DIDNT ASSIGN ANY VALUE TO IT
};



//22. Equality Operators: == vs. ===

// const hisAge = '18'; 
// if(hisAge == 18) console.log('You just became an adult')


// const hisAge1 = 18; 
// if(hisAge1 === 18) console.log('You just became an adult');

// //a very simple way to get a value from any webpage
//  const favourite = prompt("what is your favourite number?");
//  console.log(typeof favourite);

//  if (favourite === 23) { //'23'
//     console.log('cool! 23 is an amazing number')
//  }else if(favourite === 7) {
//     console.log('7 is also a cool number')
//  }else if(favourite === 9) {
//     console.log('cool, 9 is also a grreat number')
//  }else {
//     console.log('number is neither  23, 7 nor 9')
//  };

//  if(favourite !== 23) console.log('why not 23?');


//23. Boolean Logic
//BASIC BOOLEAN LOGIC: THE AND, OR & NOT OPERATORS

//  let hiAge = 16;
//  let a = hiAge > 20;
//  let c = hiAge < 30;

//  console.log(a)
//  console.log(c)

// let hiAge = 16;
// let a = hiAge != 20;
// // let c = hiAge   a ;

// console.log(a)
// console.log(b)
// I DONT UNDERSTAND ANYTHING HERE

 

//24. Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense);

//we can use these var to take a decision whether sarah should drive or not

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!');
}else {
    console.log('Someone else should drive..') //console picks this one coz Sarah do not have goodvision
};


const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
}else {
    console.log('Someone else should drive..')
};



//26. The switch Statement
let day = 'tuesday'; //what i put in the console about the day in this value is what will appear
switch(day) {
    case 'monday':  //day === 'monday' execute the following codes
        console.log('plan my course structure');
        console.log('go to coding meetup')
        break
    case 'tuesday':
        console.log('prepare theory videos');
        break
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break
    case 'friday':
        console.log('record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend')
        break
    default:
        console.log('not a valid day!')

        
}

// to use if else statement to change the switch statement. they are the same
 day = 'thursday';
if (day === 'monday') {
    console.log('plan my course structure');
    console.log('go to coding meetup')
}else if(day === "tuesday") {
    console.log('prepare theory videos');
}else if(day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
}else if(day === 'fryday') {
    console.log('record videos');
}else if(day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend')
}else {
    console.log('not a valid day!')
}



// 27. Statements and Expressions
//an expression is a peice of code that produces value. example; 3 + 4 is an expression becoz in the end, it produces a value

//a statements does not produce value. it is a very big piece of code. it is like a complete sentence while expression are words that made up the sentence
// EXAMPLE
if(23 > 10) {
    const str = '23 is bigger'; // '23 is bigger' IS EXPRESSION WHILE ALL THE LINE OF CODE IS STATEMENT
}




//28. The Conditional (Ternary) Operator
// THIS OPERTOR ALLOWS US TO WRITE SOMETHING SIMILAR to IF/ELSE STATEMENT BUT ALL IN ONE LINE
//ternary is important when we want to take a quick decision
const agee = 23;
agee >= 18 ? console.log('i like to drink wine') : 
console.log('i like to drink water');


// another way to do it
const drink = agee >= 18 ? 'wine' : 'water';
console.log(drink)


// another way to do it
let drink2;
if (agee <= 18) {
    drink2 = 'wine' ;
}else {
    drink2 = 'water';
}
console.log(drink2)


//another one
console.log(`i like to drink ${agee >= 18 ? 'wine' : 'water'}`);



// 30. JavaScript Releases: ES5, ES6+ and ESNext


// JAVASCRIPT FUNDAMENTAL 2

