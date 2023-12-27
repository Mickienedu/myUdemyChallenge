'use strict';

// 103. Destructuring Arrays
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // destructuring the order 
    orderDelivery: function ({
        starterIndex= 1, 
        mainIndex = 0, 
        time = '20:00',
         address, }) {
        console.log(`order recieved! ${this.starterMenu[starterIndex]}
        and ${this.mainMenu[mainIndex]} will be delivered to ${address}
        at ${time}`
        );
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, 
        ${ing2} and ${ing3}`
        );
    },
    //rest example in our restaurant app
    orderPizza: function(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
    
};

//114. Looping Objects: Object Keys, Values, and Entries
// for (const day of Object.keys(openingHours)) {
//     console.log(day);
// }

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del solo, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });


//107. Short Circuiting (&& and ||)
/*console.log(3 || 'jonas'); //3
console.log('' || 'jonas'); //jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;  //setting a default value if the num doesn't exist
console.log(guests1);  //10. because the numGuest doesn't exist

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('..... AND ......');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');*/




//1. DESTUCTURING [REST]
//SPREAD, because on RIGHT side of =
/*const arrr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//OBJECT [REST]
const {sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2. FUNCTIONS [REST]
const add = function(...numbers) {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');*/




//DESTRUCTURING ARRAYS
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; //destructuring
// console.log(x,y,z);

// const[first, /*if you use , coma, itll pick the 3rd element */ second] = restaurant.categories; //destructuring
// console.log(first, second)

// // to switch statement 
// let [main, , secondary] = restaurant.categories; //destructuring
// console.log(main, secondary)

// SWITCHING VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// using destructuring to switch 2 variable 
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// restaurant.order(2, 0); //num 2 from starterMenu and num 0 from mainMenu
// console.log(restaurant.order(2, 0));  //['Garlic Bread', 'Pizza']

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);  //Garlic Bread Pizza

// NESTED DESTRUCTURING
// const nested = [2, 4, [5, 6]];
// // const [i, j] = nested;
// // console.log(i, j);
// const [i, , [j,k]] = nested;
// console.log(i, j, k);


// //DEFAULT VALUES
// const [p = 1, q = 1, r = 1] = [8,9];
// console.log(p, q, r);


//104. Destructuring Objects
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// if you want the variable name to be different from the property name 

const {
    name: restaurantName,
     openingHours: hours,
      categories: tags,
 } = restaurant;
 console.log(restaurantName, hours, tags);


 //SETTING A DEFAULT VALUE
 const { menu = [], starterMenu: starters = [] } =
 restaurant;
 console.log(menu, starters);


 //MUTATING VARIABLES WHILE DESTRUCTURING
//  let a = 111;
//  let b = 999;
//  const obj = {a: 23, b: 7, c: 14}; //overriding the variables
// ({ a, b } = obj); //wrap it into ()
// console.log(a, b);


//NESTED OBJECTS
// const {
//      fri: {open: o,  close: c },
//  } = openingHours;
//  console.log(o, c);


//105. The Spread Operator (...)
//we use spread operator to write multiple values separated by commas
/*const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr1]; 
console.log(newArr);

console.log(...newArr); //using the spread operator to log on to the console

// LET'S CREATE A NEW MENU 
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

//COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

//JOIN 2 ARRAY
const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu ];
console.log(allMenu);

//ITERABLES are arrays, strings, maps, sets, NOT objects
const str = 'mickie';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str); // m i c k i e


//REAL WORLD EXAMPLE
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), 
// prompt('Ingredient 2?'), prompt('Ingredient 3')];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients); //spread operator

//OBJECTS
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guisappe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);*/

//114. Looping Objects: Object Keys, Values, and Entries
/*const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days`;

for (const day of properties) {
    openStr += '${day}, '
}
console.log(openStr);

//property values
const values = Object.values(openingHours);
console.log(values);

//Entries object
const entries = Object.entries(openingHours);
// console.log(entries);

// DESTRUCTURING: [key, value]. YOU CAN USE ANY NAME. IT MUSTN'T BE 'key'
for(const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`); 
}; //on thu we open at 12 and close at 22. fri and sat own too*/


//106. Rest Pattern and Parameters
//the rest pattern looks like spread operator but it does the opposite
//the spread operator is use to unpack an arrays, but rest operator is use to pack elements in an array
//the spread expand, the rest compressed


//107. Short Circuiting (&& and ||)

//108. The Nullish Coalescing Operator (??)

//109. Logical Assignment Operators
/*const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};
const rest2 = {
    name: 'La Piazza',
    owner: 'Glovanni Rossi',
};
//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator(null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);*/


//111. Looping Arrays: The for-of Loop
/*const forMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of forMenu) console.log(item);*/


//112. Enhanced Object Literals
/*In Es6 you can enter both object and variable key at once
let name1="two"
let age1=26
let salary1=5500

let emp1={
    name1,
    age1,
    salary1
}
console.log(emp1)*/
//https://medium.com/@narenss/es6-enhanced-object-literals-bbae848e1750#:~:text=ES6%20enhanced%20object%20literals%20is,%22Enhanced%20Object%20Literals%2D%2D%2D%22)




//113 OPTIONAL CHAINING(?.)
//114. Looping Objects: Object Keys, Values, and Entries



//116. Sets
/* const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet); //the duplicated 'pizza' did not show

console.log(new Set('mickie'));  //'m', 'i', 'c', 'k', 'e'

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new 
    Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

    console.log(new Set('mickienedu').size);*/
    //WHEN YOU NEED TO WORK WITH UNIQUE VALUES, KEEP SET IN MIND.


    // 117. Maps: Fundamentals
   /* const rest = new Map();
    rest.set('name', 'Classico Italiano');
    rest.set(1, 'Firenze, Italy');
    console.log(rest.set(2, 'Lisbon, Portugal'));

    rest.set('categories', 
    ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11)
    .set('close', 23).set(true, 'We are open').set(false, 'We are closed');

    console.log(rest.get('name'));
    console.log(rest.get(true));
    console.log(rest.get(1));

    const time = 21;
    console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

    console.log(rest.has('categories'));
    rest.delete(2);

    const arr = [1, 2];
    rest.set(arr, 'Test');
    rest.set(document.querySelector('h1'), 'Heading');
    console.log(rest);
    console.log(rest.size);*/



    // 118. Maps: Iteration
    //this is just like an arrays structure
    const question = new Map([
        ['question', 'What is the best programming language in the world?'],
        [1, 'C'],
        [2, 'Java'],
        [3, 'Javascript'],
        ['correct', 3],
        [true, 'Correct 🎉'],
        [false, 'Try again!'],
    ]);
    console.log(question);

    //convert object to map
    console.log(Object.entries(openingHours));
    const hoursMap = new Map(Object.entries(openingHours));
    console.log(hoursMap);
    
    //Quiz app
    console.log(question.get('question'));
    for (const [key, value] of question) {
        if (typeof key === 'number')
         console.log(`Answer ${key}: ${value}`);
    }
    // const answer = Number(prompt('Your answer'));
    const answer = 3;
    console.log(answer);

    console.log(question.get(question.get('correct') === answer));
    //Maps and Objects are pretty  similar


    
// 119. Summary: Which Data Structure to Use?

/* 
ARRAYS
tasks = ['code', 'Eat', 'code'];
//ans ['code', 'Eat', 'code']
1. Use ARRAYS when you need ORDERED list of values(might contain duplicate).

SETS
tasks = new Set(['code', 'Eat', 'code']);
//ans ['code', 'Eat']
1. use SETS when you need to work with UNIQUE values.

ARRAYS
2. use arrays when you need to manipulate data

SETS
2. use sets when high-perfomance is really important
... use sets to REMOVE DUPLICATES from arrays. */

/* 
OBJECTS
task = {
    task: 'Code',
    date: 'today',
    repeat: true
};
1. More 'traditional' key/value store ('abused' objects)
2. Easier to write and access values with, and [].
3. Use when you need to include Functions (methods).
4. Use when working with JSON (can convert to map)

MAPS
task = new Map([
    ['task', 'Code'],
    ['date', 'today'],
    [false, 'Start coding']
]);
1. Better performance
2. keys can have any data type
3. easy to iterate
4. Easy to compute size

5. Use when you simply need to map key to values
6. Use when you need keys that are not strings
*/

//CHALLENGE


//121. Working With Strings - Part 1
/*const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[1]); // 3
console.log(airline.length); //16
console.log('B737'.length); //4
console.log(airline.indexOf('r')); //6 (it gives us the first occurrence of 'R')
console.log(airline.lastIndexOf('r')); //10 (last alphabet)

//searching for words
console.log(airline.indexOf('portugal')); //-1 (it is case sensitive)

console.log(airline.slice(4)); // Air Portugal (the slice(4) is the begin parameter. after counting upto 4, the result starts. start the counting from 0)
console.log(airline.slice(4, 7));  // Air (end value)

console.log(airline.slice(0, airline.indexOf(' '))); //TAP (GETTING THE FIRST WORD)

console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal (the last word)

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


const checkMiddleSeat = function(seat) {
    // B and E are the middle seat
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') console.log('You got the middle seat 😊');
    else console.log('You got lucky 😎');
};

checkMiddleSeat('118');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('mickie'));*/


//122. Working With Strings - Part 2
/*const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase);
console.log(airline.toUpperCase);

//fix capitalisation in name
const passenger = 'MicKIe'; 
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + 
passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails 
const email = 'hello@mickie.com';
const loginEmail = ' Hello@Mickie.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '#' ).replace(',', '.');
console.log(priceUS); //288.97#

const announcement = 'All passengers come to barding door 23, Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW ARirbus fsmily');
}

// practice exercise 
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');*/



//123. Working With Strings - Part 3

// split and join 
console.log('a+very+nice+string'.split('+')); //a very nice string
console.log('Mickie Okorie'.split(' '));

const [firstName, lastName] = 'Mickie Okorie'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);


//*************** */
const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for(const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('mickie okorie');

//padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));  //++++++++Go to gate 23+++++
console.log('Mickie'.padStart(25, '+')); //+++++++++++++Mickie

// masking credit card 
const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}
maskCreditCard(385964864839);
maskCreditCard('28958589494478589209')

console.log(maskCreditCard(385964864839));
console.log(maskCreditCard('28958589494478589209')
);

// repeat method. it allows us repeat the same string all the time
const message2 = 'Bad weather ... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInline = function(n) {
    console.log(`There are ${n} planes in line ${'🐱‍🏍'.repeat(n)}`)
}
planesInline(4);
planesInline(7);
planesInline(12);



//125. String Methods Practice
// const flights = 
// '_Delayed_Departure;fao9023377458u4;txl21iy8763888;11:25+_Arrival';