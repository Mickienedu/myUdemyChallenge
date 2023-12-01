'use strict';

// 142. Simple Array Methods

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
   const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];
  
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

//   147. Creating DOM Elements
const displayMovements = function(movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}</div>
            <div class="movements__value">${mov}💲</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

//153. The reduce Method
// claculating and printing balance 
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} 💲`;
};

//155. The Magic of Chaining Methods
const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0)             
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}💲`;

  const out = acc.movements.filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}💲`;

  const interest = acc.movements.filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate / 100)
  .filter((int, i, arr) => {
    console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}$`;
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
    displayMovements(acc.movements);

    // display balance
    calcDisplayBalance(acc);

    // display summary
    calcDisplaySummary(acc);
 }

//  158. Implementing login
// event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent forn from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);  //making use of 'find' method
  console.log(currentAccount);
  // THE PIN 
  if (currentAccount?.pin === Number(inputLoginPin.value)) {

    //display ui and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    // clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    
    // update UI 
    updateUI(currentAccount);
  }
});

// 159. Implementing Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  
  // to clear the transfer after it is done 
  inputTransferAmount.value = inputTransferTo.value = '';


  if(amount > 0 && receiverAcc && currentAccount.balance >= amount &&
     receiverAcc?.username !== currentAccount.username ) {

      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount)

      // update UI 
      updateUI(currentAccount);
     }

});




/////////////////////////////////////////////////
  // Functions
  
 /* const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
  
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
  
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
  
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };
  
  const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
  };
  
  const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;
  
    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;
  
    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
  };
  
  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };
  createUsernames(accounts);
  
  const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements);
  
    // Display balance
    calcDisplayBalance(acc);
  
    // Display summary
    calcDisplaySummary(acc);
  };
  
  ///////////////////////////////////////
  // Event handlers
  let currentAccount;
  
  btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();
  
    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
  
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
  
      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
  
      // Update UI
      updateUI(currentAccount);
    }
  });
  
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';
  
    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
    ) {
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
  
      // Update UI
      updateUI(currentAccount);
    }
  });
  
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
  
    const amount = Number(inputLoanAmount.value);
  
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
      // Add movement
      currentAccount.movements.push(amount);
  
      // Update UI
      updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
  });
  
  btnClose.addEventListener('click', function (e) {
    e.preventDefault();
  
    if (
      inputCloseUsername.value === currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      console.log(index);
      // .indexOf(23)
  
      // Delete account
      accounts.splice(index, 1);
  
      // Hide UI
      containerApp.style.opacity = 0;
    }
  
    inputCloseUsername.value = inputClosePin.value = '';
  });
  
  let sorted = false;
  btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
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