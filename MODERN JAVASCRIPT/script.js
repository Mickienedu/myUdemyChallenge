// 'use strict';

// 270. An Overview of Modern JavaScript Development

// 271. An Overview of Modules in JavaScript
/* --Module is a reusable piece of code that encapsulates implementation details
 --Usually a standalone File, but it doesn't have to be.
 --Compose software: Modules are small building blocks that we put together to build
 complex application.
 --Isolate components: Modules can be developed in isolation without thinking about
 the entire codebase.
 --Abstract code: Implement low level code in modules and import these abstractions into
 other modules.
 --Organized code: Modules naturally lead to a more organized codebase.

 import { rand } from '.math.js';
 import { showDice } from '.dom.js';
 const dice = rand(1, 6, 2);
 showDice(dice);  //parsing index.js i.e math.js and dom.js are imported to index.js
 */

//  272. Exporting and Importing in ES6 Modules

// importing module
// import { addToCart, tottalPrice as price, tq } from "./shoppingCart.js";
// addToCart('bread', 5)
// console.log(price, tq);

console.log('Importing module');  

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.tottalPrice);

// default
import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 10);
add('apple', 3);

console.log(cart);



/* // 273. Top-Level await (ES2022)
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');  //jsonPlaceholder

// const data = await res.json();
// console.log(data);


const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // console.log(data);

    return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();

// lastPost.then(last => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/



/* // 274. The Module Pattern
const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const tottalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity){
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart (shipping cost is 
            ${shippingCost})`);
    };
    const orderStock = function (product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        tottalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/


// 275. CommonJS Modules
// require()


// 276. A Brief Introduction to the Command Line
/* 
--OPEN TERMINAL
--BASH
--'ls' for vscode. 'dir' for windows
--cd ..
--ls (to check the files or folders you have)
--cd (the folder you wanna open and put '/' at the end) 
-- ls or dir on windows
--cd img
--ls
--cd ../.. (it moves us back to the desktop)
--clear (to clear the console)

TO CREATE FOLDER: 
--mkdir (folder name and hit ENTER)

TO CREATE FILES IN THE FOLDER:
--touch (index.html), if window(edit(index.html))

YOU CAN CALL THE LIVE SERVER THERE:
--live-server (hit enter and it will open up a browser tab)

TO CANCEL THE TERMINAL:
--control c

TO GO BACK TO YOUR PREVIOUS COMMANDS:
--arrow-up and arrow-down(for next command)

TO DELETE THE FILES:
--rm(on the vscode, del (on windows) then the file name, like index.html)

TO MOVE A FILE TO A PARENT FOLDER:
--mv script.js ../ (hit enter)

TO DELETE FOLDER:
--rmdir (the empty folder name). opposite of it is mkdir
--rm -R (the folder name, it will delete both the folder and its files)
*/


// 277. Introduction to NPM
/*
 NODE PACKAGE MANAGER 

 TO CHECK IF NPM IS INSTALLED IN YOUR WINDOW:
 --npm -v

 TO INNITIALISE THE PROJECT WE WANT TO USE THE NPM ON:
 --npm init (continue to click enter. after we get a file called 'package.json')
 package.json is the file is what stores the entire configuration of our project

 TO INSTALL LEAFLET.JS:
 --npm install leaflet

 TO INSTALL LODASH
 --npm install (lodash-es)

 TO INSTALL ANY DELETED PACKAGE:
 --npm install (without any name. any deleted package will be installed back)
*/

import cloneDeep from '/node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);




// 278. Bundling With Parcel and NPM Scripts
/*
TO INSTALL PARCEL:
--npm install parcel --save-dev

TO UNINSTALL PARCEL:
--npm uninstall parcel

TO MAKE USE OF PARCEL:
--npx parcel index.html
--npm run start

*/

// 279. Configuring Babel and Polyfilling
/*
Google Babel, click the first result, click on Presets
--npm run start

TO INSTALL CORE-JS:
--npm install core-js

TO INSTALL REGENERATOR-RUNTIME:
--npm install regenerator-runtime
*/

// 280. Review: Writing Clean and Modern JavaScript

// 281. Let's Fix Some Bad Code: Part 1


// 282. Declarative and Functional JavaScript Principles
