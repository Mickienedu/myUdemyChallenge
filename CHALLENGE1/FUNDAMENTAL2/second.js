//32. Activating Strict Mode

//strict mode is special mode that we can activate in js to make it easier for us to write secure code
//this is how to activate it at the begining of your script. it void accidental errors
'use strict';



//33. Functions
//function is symply a piece of code that we can reuse over and over again in our code

function logger() {
    //all the codes here are called function body
    console.log('my name is mickie')
}
//calling, running or invoking the function
logger(); //each time we call the function like this, the code in the function body will be executed
logger();

//when we write function, we also pass data into a function. it can also return a data too.
//The function is just like fruit processor. when you put fruit in a processor, it does something to the food and return it back for example a juice

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and  ${oranges} oranges.`;
    return juice
}
const appleJuice = fruitProcessor(5, 0); //calling the function
console.log(appleJuice)
console.log(fruitProcessor(5, 0))
// these function are called function Declarations



// 34. Function Declarations vs. Expressions
//FUNCTION DECLARATION
//you can call function declaration at the begining of your code before declaring it and it will still work.
//but you can not do that with function expression
// const age1 = calAge1(1992)
function calAge1(birthYear) {
    return  2023 - birthYear;
}
const age1 = calAge1(1992)

console.log(age1);


//FUNCTION EXPRESSION
//essentially a function vlue stored in a variable
const calAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calAge2(1992);
console.log(age2)


//35. Arrow Functions
//it is a form of function expression that is shorter and faster to write. it has no this keyword

//ARROW FUNCTION
const calAge3 = birthYear => 2023 - birthYear;  //you dont need the curly bracket nor return keyword
const age3 = calAge3(1992);
console.log(age3);

// to calculate how many years a person have until retirement
const yearsUntilRetirement1 = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement1(1992, 'Mickie'));



// 36. Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {  
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apples,  ${orangePieces} pieces of oranges.`;
    return juice
}
console.log(fruitProcessor(2, 3));


//37. Reviewing Functions

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
//TO CONVERT THE CODES ABOVE FROM ARROW FUNCTION TO NORMAL FUNCTION
const calAge4 = function (birthYear) {
    return 2023 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calAge4(birthYear);
    const retirement = 65 - age;
    //lets take a decision here base on the retirement value
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1992, 'Mickie'));   
console.log(yearsUntilRetirement(1960, 'Jones'));   


// breaking the function down
function calAge5 /*function name*/(birthYear, firstName /*parameters; placeholders to receive input values, like local variables of a function*/) {
    const age =  2023 - birthYear; //function body; block of code that we want to reuse. processes the function's input data
    console.log(`${firstName} is ${age} years old`); 
    return age; //return statement to output a value from the function and terminate execution
}
const age/*variable to save returned value(function output)*/ = calAge5(/*arguments; actual values of function parameters, to input data*/1992, 'Ndowa') //calling, running or invoking the function, using ()

console.log(age1);





// 39. Introduction to Arrays
// ARRAY IS LIKE A BIG CONTAINER IN WHICH WE CAN THROW VARIABLE AND LATER REFFERRENCE THEM

// instead of doing this 
const friend1 = 'michael';
const friend2 = 'steve';
const friend3 = 'peter';

// DO THIS 
const friends = ['Michael', 'Steve', 'Peter'];
console.log(friends);


// ANOTHER WAY TO CREATE AN ARRAY 
const years = new Array(1991, 1992, 1994, 2000, 2020); //you must use the 'new' keyword
console.log(years);
console.log(friends[0]) //it picks the first element 'michael'
console.log(years[4])
console.log(friends.length) //the total number of the element which is 3
console.log(friends[friends.length - 1]); //it picks element number 2 which is peter

friends[2] = 'jay'; //to change one of the friends
console.log(friends);


// ARRAYS CAN ACTUALLY HOLD  VALUES WITH DIFFERENT TYPES ALL AT THE SAME TIME 
const firstName = 'jonas';
const jonas = [firstName, 'okorie', 2023 - 1992, 'teacher', friends]
console.log(jonas)

// EXERCISE
const calAge = function (birthYear) {
    return 2023 - birthYear;
}
calAge(1992);
console.log(calAge(1992));
//.......

const yearss = [1999, 1992, 1990, 2020];

const age4 = calAge(yearss[0])
const age5 = calAge(yearss[1])
const age6 = calAge(yearss[yearss.length - 1])
console.log(age4, age5, age6);

// another way to place the result 
const ages = [calAge(yearss[0]), calAge(yearss[1]), calAge(yearss[yearss.length - 1])];
console.log(ages)




//40. Basic Array Operations (Methods)
// some useful array method

const friend = ['Michael', 'Steve', 'Peter'];

//add element
const newLenght = friend.push('jay'); //'jay' is added to the friend list. the push() is to add element at the end of the arrays
console.log(friend);
console.log(newLenght);

//to add ellement at the beginning of the arrays, use unshift()
friend.unshift('john');
console.log(friend);

// REMOVE Element
friend.pop(); //the last element is gone
console.log(friend)
const popped = friend.pop();
console.log(popped)
console.log(friend)

// the first Element will be removed
friend.shift();
console.log(friend);

// this method tells us the position in which a certain element is in the array 
console.log(friend.indexOf('Steve')); //1
console.log(friend.indexOf('Bob')); //-1


// ANOTHER METHOD CALLED 'includes';
// so includes, instead of returning the index of the element will simply
// return true if the element is in the array and false if it's not.

console.log(friend.includes('Steve')); //true
console.log(friend.includes('Bob')); //false

//we can also use the includes method to write conditionals
if (friend.includes('peter')) {
    console.log('you have a friend called peter')
}else {
    console.log('there is no such name please')
};



//42. INTRODUCTION TO OBJECTS
//in object, we actually define key value pairs and then you can give each
//of the values, a name.
//USING THE CURLY BRACKET LIKE THIS TO CREATE AN OBJECT IS THE SIMPLEST ONE. AND IT IS CALLED 'the object literal syntax' because we are literally writing down the entire object content
// const okoro = {
//     //properties
//     firstName: 'Okoro',
//     lastName: 'steven',
//     age: 2023-1992,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Brown']
// };
// console.log(okoro)
/*the big different between objects and arrays, is that in objects, the
order of these values does not matter at all when we want to retrieve them.
and that's important to keep in mind.
so in arrays, the order in which we specify the elements matters a lot bcoz
that's how we access these elements.*/



// HOW DO WE GET/RETRIEVE DATA FROM OBJECT 
//43. DOT VS. BRACKET NOTATION

const okoro = {
    //properties
    firstName: 'Okoro',
    lastName: 'steven',
    age: 2023-1992,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Brown']
};
console.log(okoro.lastName); //using dot notation to get an
console.log(okoro['lastName']); //using bracket notation to get an

// how to get properties that has the same keywords in them, eg, firstName and lastName
const nameKey = 'Name';
console.log(okoro['first' + nameKey]);
console.log(okoro['last' + nameKey]);
//THE CODE ABOVE IT WILL NOT WORK WITH DOT NOTATION



// IN WHAT SITUATION SHOULD WE USE THE DOT NOTATION AND WHEN DO WE HAVE TO USE THE BRACKET NOTATION 
// const interestedIn = prompt('What do you want to know about Okoro? Choose btw firstName, lastName, age, job and friends');
// console.log(interestedIn);
// console.log(okoro[interestedIn]); // you can only access here with bracket notation. dot notation won't work

// when user wants to access a property that dont exist
// if (okoro[interestedIn]) {
//     console.log(okoro[interestedIn]);
// }else {
//     console.log('Wrong request! Choose btw firstName, lastName, age, job and friends')
// };


// how to use both the dot and bracket notation
okoro.location = 'Nigeria';
okoro['twitter'] = '@okoroman';
console.log(okoro);

// EXERCISE
//okoro has 3 friends, and his best friend is called michael
console.log(`${okoro.firstName} has ${okoro.friends.length}, 
and his best friend is called ${okoro.friends[0]}`);



//44. OBJECT METHODS
const mickie = {
    //properties
    firstName: 'mickie', //string
    lastName: 'steven', //string 
    birthYear: 1992, //number
    job: 'teacher', //string value
    friends: ['Michael', 'Peter', 'Brown'], //array value
    hasDriversLicense: false,  //boolean value

    // calcAge: function(birthYear) {  //function value
    //     return 2023 - birthYear;
    // }
    
    // USING THE this KEYWORD 
    calcAge: function () {  //function value
        console.log(this);
        return 2023 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}
         -year old ${mickie.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'}
         driver's license.`
    }
};
console.log(mickie.calcAge());
// console.log(mickie.calcAge(1992));
// console.log(mickie['calcAge'](1992));
// console.log(mickie['friends'][1]);


// EXERCISE
// mickie is a 31 year old teacher and he has a drivers lincense
console.log(mickie.getSummary());



// 46. Iteration: The for Loop
// loops are fundamental aspect of every programming language bcoz they besically 
// allow us to atomate repetetive tasks

//INSTEAD OF DOING THIS
// console.log('Lifting weight repetition 1')
// console.log('Lifting weight repetition 2')
// console.log('Lifting weight repetition 3')
// console.log('Lifting weight repetition 4')
// console.log('Lifting weight repetition 5')
// console.log('Lifting weight repetition 6')
// console.log('Lifting weight repetition 7')
// console.log('Lifting weight repetition 8')
// console.log('Lifting weight repetition 9')
// console.log('Lifting weight repetition 10')


//DO THIS.
//  for loops keeps running while condition is TRUE

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}`)
};


// 47. Looping Arrays, Breaking and Continuing

const okoroArray = [
        //properties
         'Okoro',
         'steven',
        2023-1992,
        'teacher',
     ['Michael', 'Peter', 'Brown']
];
for(let i = 0; i < okoroArray.length; i++) {
    console.log(okoroArray[i], typeof okoroArray[i])
};


// ANOTHER EXAMPLE
const yeahs = [1991, 2002, 1980, 2020];
const theAge = [];

for(let i = 0; i < yeahs.length; i++) {
    theAge.push(2023 - yeahs[i]);
}
console.log(theAge);

// continue and break
// continue is to exit the current iteration of the loop and continue to the next one
// break is used to completely terminate the whole loop

// HOW 'CONTINUE' WORKS
console.log('---ONLY STRINGS---')
for(let i = 0; i < okoroArray.length; i++) {
    if(typeof okoroArray[i] !== 'string') continue;

    console.log(okoroArray[i], typeof okoroArray[i])
};

// HOW 'BREAK' WORKS 
console.log('---BREAK WITH NUMBER---')
for(let i = 0; i < okoroArray.length; i++) {
    if(typeof okoroArray[i] === 'number')  break;

    console.log(okoroArray[i], typeof okoroArray[i])
};



// 48. Looping Backwards and Loops in Loops
const mikeArray = [
    //properties
     'mike',
     'steven',
    2023-1992,
    'teacher',
 ['Michael', 'Peter', 'Brown'],
 true
];
for(let i = mikeArray.length - 1; i >= 0; i--) {
    console.log(mikeArray[i])
};

// loops in loops 
for(let i = mikeArray.length - 1; i >= 0; i--) {
    console.log(mikeArray[i])
};
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`----starting exercise ${exercise}`);
    
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
};



// 49. The while Loop
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`)
// };

// while loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`)
    rep++;
};
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
//WHILE LOOP DOES REALLY NOT HAVE TO DEPEND ON ANY COUNTER VARIABLE
//WHENEVER YOU NEED A LOOP WITHOUT THE COUNTER, YOU CAN REACH OUT TO WHILE LOOP




