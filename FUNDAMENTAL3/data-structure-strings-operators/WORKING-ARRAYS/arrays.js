'use strict';

// 142. Simple Array Methods

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
  //  const account1 = {
  //   owner: 'Jonas Schmedtmann',
  //   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  //   interestRate: 1.2, // %
  //   pin: 1111,
  // };
  
  // const account2 = {
  //   owner: 'Jessica Davis',
  //   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  //   interestRate: 1.5,
  //   pin: 2222,
  // };
  
  // const account3 = {
  //   owner: 'Steven Thomas Williams',
  //   movements: [200, -200, 340, -300, -20, 50, 400, -460],
  //   interestRate: 0.7,
  //   pin: 3333,
  // };
  
  // const account4 = {
  //   owner: 'Sarah Smith',
  //   movements: [430, 1000, 700, 50, 90],
  //   interestRate: 1,
  //   pin: 4444,
  // };
  
  // const accounts = [account1, account2, account3, account4];

  // DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-11-27T17:01:17.194Z',
    '2023-12-01T23:36:17.929Z',
    '2023-12-05T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
  
  /////////////////////////////////////////////////
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');

  const formatMovementDate = function(date, locale) { //locale
     // 177. Operations With Dates
        // here will tell us days we make use of the bankist eg, you withdrew yesterday
        const calcDaysPaassed = (date1, date2) =>  
        Math.round(Math.abs(date2 -date1) / (1000 *60 * 60 * 24));

        const daysPassed = calcDaysPaassed(new Date(), date);
        
        // numbers of days you withdrew
        if (daysPassed === 0) return 'Today';
        if(daysPassed === 1) return 'Yesterday';
        if (daysPassed <= 7) return `${daysPassed} days ago`;
        // else {
        //    // 176. Adding Dates to "Bankist" App
        // const day = `${date.getDate()}`.padStart(2, 0);
        // const month = `${date.getMonth() + 1}`.padStart(2, 0);
        // const year = date.getFullYear();
        //  return `${day}/${month}/${year}`;
        // }
        return new Intl.DateTimeFormat(locale).format(date);
  };

       // 179. Internationalizing Numbers (Intl)
  const formatCur = function(value, locale, currency) {
     return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);

  }

//   147. Creating DOM Elements
const displayMovements = function(acc, sort = false) { //163. Sorting Arrays

    containerMovements.innerHTML = '';

    //163. Sorting Arrays
    const movs = sort ? acc.movements.slice().sort((a, b) =>
     a - b) : acc.movements;

    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

                // 176. Adding Dates to "Bankist" App
        const date = new Date(acc.movementsDates[i]);
        const displayDate = formatMovementDate(date, acc.locale); //locale 

        // 179. Internationalizing Numbers (Intl)
        const formattedMov = formatCur(mov, acc.locale, acc.currency); // Intl
      

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}</div>
            <div class="movements__date">${displayDate}</div> 
            <div class="movements__value">${formattedMov}</div>  
        </div> 
        `;   // Intl

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

//153. The reduce Method
// claculating and printing balance 
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);  // Intl
};

//155. The Magic of Chaining Methods
const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0)             
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);  // Intl

  const out = acc.movements.filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency) // Intl

  const interest = acc.movements.filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate / 100)
  .filter((int, i, arr) => {
    console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
};

// 151. Computing Usernames
// ONE USER 
// const createUsernames = function (user) {
//     const username = user.toLowerCase().split(' ').map(name => name[0])
// .join('');
// return username;
// };
//  createUsernames('Steven Thomas Williams');  

// console.log(createUsernames('Steven Thomas Williams'));

// ALL THE ACCOUTNS 
const createUsernames = function (accs) {

    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ')
        .map(name => name[0]).join('');
    })
};
 createUsernames(accounts);  

 const updateUI = function(acc) {
    // display movements
    displayMovements(acc);

    // display balance
    calcDisplayBalance(acc);

    // display summary
    calcDisplaySummary(acc);
 };

// 181. Implementing a Countdown Timer
 const startLogOutTimer = function() {
  const tick = function() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
      // in each call, print the remaining time to UI
      labelTimer.textContent = `${min};${sec}`;

    
        // when 0 seconds, stop timer and log out user
        if(time === 0) {
          clearInterval(timer);
          //display ui and message
    labelWelcome.textContent = 'Log in to get started'
    containerApp.style.opacity = 0;
        }

       // decrease Is
      time--;
  }
  // set time to 5 minutes
  let time  = 120;

  // call the timer every second
  tick();
 const timer = setInterval(tick, 1000);
 return timer;
 };

//  158. Implementing login
// event handler
let currentAccount, timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


btnLogin.addEventListener('click', function (e) {
  // prevent forn from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);  //making use of 'find' method
  console.log(currentAccount);
  // THE PIN 
  if (currentAccount?.pin === +inputLoginPin.value) {

    //display ui and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    // 176. Adding Dates to "Bankist" App
    // CREATE CURRENT DATE AND TIME
    // Experimenting API 
    const now = new Date();
    // displaying our date under current balance
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    const locale = navigator.language;

// 178. Internationalizing Dates (Intl)
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount
      .locale, options).format(now);
    // google iso language
    // day/month/year
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;


    // clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // 181. Implementing a Countdown Timer
    if (timer) clearInterval(timer);
   timer = startLogOutTimer();

    
    // update UI 
    updateUI(currentAccount);

    // Reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

// 159. Implementing Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  
  // to clear the transfer after it is done 
  inputTransferAmount.value = inputTransferTo.value = '';


  if(amount > 0 && receiverAcc && currentAccount.balance >= amount &&
     receiverAcc?.username !== currentAccount.username ) {

      // DOING THE TRANSFER
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount)

      // ADD TRANSFER DATE
      currentAccount.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date());

      // update UI 
      updateUI(currentAccount);
     }

});

// 161. some and every
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); //we use 'floor' to round the loan amount number

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    // 180. Timers: setTimeout and setInterval
    setTimeout(function() {
    //ADD MOVEMENT
    currentAccount.movements.push(amount);
    
    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

  
    //UPDATE UI
    updateUI(currentAccount);

     // Reset the timer
     clearInterval(timer);
     timer = startLogOutTimer();
  }, 2500);  // timeout, when request a loan
  }
  // clearing the input field 
  inputLoanAmount.value = '';

})

// 160. The findIndex Method
btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username &&
    // the '+' represents 'Number()'
    /* Number*/ +inputClosePin.value === currentAccount.pin
   ) {

    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
   }
   inputCloseUsername.value = inputClosePin.value = '';

});
//163. Sorting Arrays
let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// 172. The Remainder Operator
// to style the bankApp label when click on the balance
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')]
  .forEach(function(row, i) {
  if (i % 2 === 0) row.style.backgroundColor = 'orangered';
// every third row changes to blue 
  if (i % 3 === 0) row.style.backgroundColor = 'blue';
});
});

//////////////////////////////////////
/////////////////////////////////////
//LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*let arr = ['a', 'b', 'c', 'd', 'e'];

arr.slice(2);
console.log(arr.slice(2)); //c, d, e
console.log(arr.slice(2, 4)); //c, d
console.log(arr.slice(-2)); // d, e
console.log(arr.slice(1, -2)); // b, c
console.log(arr.slice()); // a, b, c, d, e
console.log(...arr); // a b c d

//SPLICE
console.log(arr.splice(2)); //c, d, e
console.log(arr); //a, b


//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());  //'f', 'g', 'h', 'i', 'j' 
console.log(arr2);  //'f', 'g', 'h', 'i', 'j' 

//CONCAT METHOD
const letters = arr.concat(arr2);
console.log(letters);  //'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' 
console.log([...arr, ...arr2]); //'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' 

//JOIN METHOD
console.log(letters.join('-'));  //a-b-c-d-e-f-g-h-i-j



// 143. The new 'at' Method
const arrNew = [23, 11, 64];
console.log(arrNew[0]);   //23
console.log(arrNew.at(0));  //23

//getting last array element
console.log(arrNew[arrNew.length - 1]); //64
console.log(arrNew.slice(-1)[0]); //64
console.log(arrNew.at(-1));  //64

console.log('Mickie'.at(0));  //M
console.log('Mickie'.at(-1));  //e


//144. Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    }else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('----DEMACATION----');
//FOREACH METHOD
movements.forEach(function(mov, i, arr) {
    if(mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    }else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});
//BREAK STATEMENT DO NOT WORK IN FOREACH LOOP


// 145. forEach With Maps and Sets
// USD, EUR, GBP are the keys while other arrays are the value

//MAP
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
    console.log(`${value}: ${value}`);
});*/



// 146. PROJECT: "Bankist" App

// 147. Creating DOM Elements

// 149. Data Transformations: map, filter, reduce
/*
1. MAP is a method we can use to loop through over arrays.
2.FILTER is use to filter for element in the original array
3.REDUCE METHOD reduces all array elements down to one single value

*/


//150. The map Method

/*const eurToUsd = 1.1;
// const movementsUSD = movements.map(function(mov) {
//     return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// modern way of doing it with for of method
const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// with arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);

////////////
const movementsDescriptions = movements.map((mov, i) =>

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} 
    ${Math.abs(mov)}`
);
console.log(movementsDescriptions);


//151. Computing Usernames

// 152. The filter Method
const deposits = movements.filter(function(mov) {
    return mov > 0;
});
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); //[200, 450, 3000, 70, 1300]

// using the for loop 
const depositsFor = [];
for(const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); //[200, 450, 3000, 70, 1300]

// creating withdrawals
const withdrawals = [];
for(const mov of movements) if (mov < 0) withdrawals.push(mov);
console.log(withdrawals); // [-400, -650, -130]

// using filter and arrow function
const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal); // [-400, -650, -130]


//153. The reduce Method
console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0); 
console.log(balance);

// using for loop
let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

// getting the maximum value of movements here 
const max = movements.reduce((acc, mov) => {
  if (acc > mov)
  return acc;
else
return mov;
}, movements[0]);
console.log(max);

//154. Coding Challenge #2

//155. The Magic of Chaining Methods
const eurToUsds = 1.1;

//PIPELINE
const totalDepositsUSD = movements.filter(mov => mov > 0)
.map((mov, i, arr) => {
  // console.log(arr);
  return mov * eurToUsds})
// .map(mov => mov * eurToUsds)
.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);


//157. The find Method
const firstWithrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithrawal);

// console.log(accounts);
// const account = accounts.find(acc.owner === 'Jessica Davis');
// console.log(account);

//158. Implementing Login

// 159. Implementing Transfers

//160. The findIndex Method


// 161. some and every
console.log(movements);

//checking equality
console.log(movements.includes(-130));  //true

// SOME: condition
console.log(movements.some(mov => mov === -130)); //true

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); ///true

//EVERY method
console.log(movements.every(mov => mov > 0));  //false
console.log(account4.movements.every(mov => mov > 0));  //true

//SEPARATE CALLBACK
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); //true   */



//162. flat and flatMap
/* const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());  // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());  //[1, 2], 3, 4, [5, 6], 7, 8 
//flat() method only goes one level deep when flattening the array
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

//FLAT
const overalBalance = accounts.map(acc => acc.movements)
.flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);   //17840

//FLATMAP
const overalBalance2 = accounts.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);  //17840 */


//163. Sorting Arrays

//STRINGS
const owners = ['Mickie', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort()); // ['Adam', 'Martha', 'Mickie', 'Zack'
console.log(owners);  // ['Adam', 'Martha', 'Mickie', 'Zack'

// NUMBERS
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

//ASCENDING
// movements.sort((a, b) => {
//   if(a > b) return 1;
// if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);


//DESCENDING
// movements.sort((a, b) => {
//   if(a > b) return -1;
// if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);


//164. More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //[1, 2, 3, 4, 5, 6, 7]

//empty arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
x.fill(1);
console.log(x); // [1, 1, 1, 1, 1, 1, 1]

arr.fill(23, 2, 6);
console.log(arr);  // [1, 2, 23, 23, 23, 23, 7]


//Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);  // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({length: 7}, (_, i) => i + 1); //_ is a throwaway parametre
console.log(z);  // [1, 2, 3, 4, 5, 6, 7]



  
  labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(document.
      querySelectorAll('.movements__value'), el => Number(el.textContent.replace('💲', ''))
      );
      console.log(movementsUI);

  });

  
// 165. Summary: Which Array Method to Use?
/*
WHAT DO YOU WANT?
..do you want to mutate original array?
..to add to original array, use .push(end) and .unshift(start)

..to remove from original, use .pop(end), .shift(start), .splice(any)

..others, use .reverse, .sort, .fill

/////////////
A NEW ARRAY?
..computed from original: .map (loop)
...filtered using condition: .filter
...portion of original: .slice
...adding original to other: .concat
...flattening the original: .flat .flatMap

///////
AN ARRAY INDEX?
..based on value: .indexOf
..based on test condition: .findIndex

///////
AN ARRAY ELEMENT
..based on test condition: .find

////////
KNOW IF ARRAY INCLUDES
..based on value: .includes
...based on test condition: .some, .every

///////
A NEW STRING
..based on separator string: .join

/////
TO TRANSFORM TO VALUE
...based on accumulator: .reduce

////
TO JUST LOOP ARRAY
..based on callback: .forEach

*/

/*// 166. Array Methods Practice
//EXERCISE NUMBER 1
// calculating how much has been deposited into the bank
const bankDepositSum = accounts.flatMap(acc => acc.movements)
.filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum)  //25180

//EXERCISE NUMBER 2
// counting hw many deposit that has been in the bank with at at least 1000 $
const numDeposits1000 = accounts.flatMap(acc => acc.movements)
.filter(mov => mov >= 1000).length;
console.log(numDeposits1000);  //6

//EXERCISE NUMBER 3
// creating an object which contains the sum of deposit and withdrawal
const sums = accounts.flatMap(acc => acc.movements)
.reduce((sums, cur) => {
  cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
  return sums;
}, {deposits: 0, withdrawals: 0})
console.log(sums);  // 25180  -7340

//EXERCISE NUMBER 4
// creating a simple function to convert any string to a TITLE CASE 
const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase().split(' ')
  .map(word => (exceptions.includes(word) ? word : capitalize(word))).join(' ');
  return capitalize(titleCase);
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/


// 167. Coding Challenge #4
///////////////////////////////////////
////////////////////////////////////////
////////LECTURES/////////
// SECTION 12: SVGAnimatedNumberList, DATES, INTL AND TIMERS 

/*// 170. Converting and Checking Numbers
console.log(23 === 23.0);

// convert a string to a Number
console.log(Number('23'));  //23
console.log(+'23'); //23  use this method because it is easier

// parsing a number to a string 
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));


// checking if value is number 
console.log(Number.isFinite(20));  //true
console.log(Number.isFinite('20'));  //false
*/

// 171. Math and Rounding
console.log(Math.sqrt(25));  //5
console.log(25 ** (1 / 2));  //5
console.log(8 ** (1 / 3));  //2

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23

console.log(Math.min(5, 18, 23, 11, 2)); //2

console.log(Math.PI * Number.parseFloat('10px') ** 2);  //314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1); //random Numbers once reload

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1)
+ min;

// rounding integers 
console.log(Math.round(23.3));  //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3)); //23

// rounding decimals
console.log((2.7).toFixed(0));  //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35

/*
// 172. The Remainder Operator
console.log(5 % 2); //1
console.log(5 / 2);  //2.5

console.log(8 % 3); //2
console.log(8 / 3); //2.6

const isEven = n => n % 2 === 0;
console.log(isEven(0));
console.log(isEven(23));
console.log(isEven(514));

// to style the bankApp label when click on the balance
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')]
  .forEach(function(row, i) {
  if (i % 2 === 0) row.style.backgroundColor = 'orangered';
// every third row changes to blue 
  if (i % 3 === 0) row.style.backgroundColor = 'blue';
});
});
*/

// 173. Numeric Separators
const diameter = 287_460_000_000;
console.log(diameter);  //287460000000

const price = 345_99;
console.log(price);  //34599

const transferFee1 = 15_00;  //1500
const transferFee2 = 1_500; //1500
console.log(transferFee1, transferFee2);


// 174. Working with BigInt
console.log(2 ** 53 - 1);   //9007199254740991
console.log(Number.MAX_SAFE_INTEGER);  //9007199254740991

const huge = 202600328373867383737527n;
const num = 23;
console.log(huge * BigInt(num));


/*// 175. Creating Dates
// create a date 
// const now = new Date();
// console.log(now);

// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(0));

//working with date
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

future.setFullYear(2040);
console.log(future); */

// 176. Adding Dates to "Bankist" App


// // 177. Operations With Dates
// // converting date to a number 
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);  ///2142253380000


// // const calcDaysPaassed = (date1, date2) => Math.abs(date2 -date1) / (1000 *60 * 60 * 24)
// const days1 = calcDaysPaassed(new Date(2037, 3, 14),  new Date(2037, 3, 24));
// console.log(days1);  ///10



// 178. Internationalizing Dates (Intl)

// 179. Internationalizing Numbers (Intl)

const numm = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  
};


console.log('US:    ', new Intl.NumberFormat('en-US', options).format(numm));
console.log('Germany:  ', new Intl.NumberFormat('de-DE', options).format(numm));

console.log(navigator.language, new Intl.NumberFormat(navigator.language, options)
.format(numm));


// 180. Timers: setTimeout and setInterval
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log
(`Here is your pizza with ${ing1} and ${ing2} `), 3000, 'olives', 'spinach'); //it will show on the console after 3 seconds

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer)


//setInterval
// setInterval(function() {
//   const now = new Date();
//   console.log(now);  // time will be executing every seconds
// }, 1000)



// 181. Implementing a Countdown Timer