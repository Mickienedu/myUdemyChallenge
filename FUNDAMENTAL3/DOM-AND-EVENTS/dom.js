// 70. PROJECT #1: Guess My Number!
'use strict';
//HOW TO SELECT ELEMENT IN HTML TO JAVASCRIPT
// console.log(document.querySelector('.message'/*if it was a classname */).textContent /*as we added this .textContent, only the content in the tag will show */ );


// 71. What's the DOM and DOM Manipulation
//DOM stands for DOCUMENT OBJECT MODEL
/*this section, we are going to make javascript interact with the webpage. 
the technical term for that is doing DOM Manipulation */
//the DOM allows us to use js to access html elements and styles in order to manipulate them
//the DOM is a connection point btw html documents and js code
/*the DOM and DOM methods are not part of js but they are part of
something called the web APIs. the web APIs are like libraries that browsers
implement and that we can access from our js code. API stands for 
APPLICATION PROGRAMMING INTERFACE*/
/*apart from DOM, There are other tons of APIs, such as timers, the fetch etc */


//72. Selecting and Manipulating Elements
// console.log(document.querySelector('.message').textContent ); //you will see start guessing..
// document.querySelector('.message').textContent = 'Correct Number!'; //the start guessing is changed to correct number

// console.log(document.querySelector('.message').textContent ); //its now 'correct number!'

// document.querySelector('.number').textContent = 13; //the number changes
// document.querySelector('.score').textContent = 20; 

// // the input field will require value 
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


// 73. Handling Click Events
//we will use eventListener. 
/*in order to listen for events, we first need to select the element where
the event should happen. on this case, we want to listen to the event on the
BUTTON ELEMENT, THE 'check' btn*/

//74. Implementing the Game Logic
//defining the secret number. generating the random number.
/* number 2*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
/*the score */
let score = 20;
//77. Implementing Highscores
let highScore = 0;

// reducing the .message content and puting it in a function 
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

/*number 1*/
document.querySelector('.check').addEventListener('click',
    /*passing the
type of the event */
    function () {
        /* remember, whenever we get an input from a user, its always a string */
        const guess = /* to convert the string to a number add 'Number'() */
            Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // to implement the game logic
        //when there is no input
        if (!guess) {
            displayMessage('No number!🤦‍♂️'); //calling the function var of .message
            // document.querySelector('.message').textContent = 'No number!🤦‍♂️'; //i.e, if you did not put any number in the input field
            //to compare the secret number to user's guess, use 'else if' statement
        } else if (guess === secretNumber) {
            // document.querySelector('.message').textContent = 'Correct Number!👌';
            displayMessage('Correct Number!👌');

            // to display the secret number when the player wins, otherwise it keeps showing '?' 
 /*num 2 */    document.querySelector('.number').textContent = secretNumber;


            // 75. Manipulating CSS Styles
            /*styling the bg-color so that when you wins, the color changes */
            document.querySelector('body').style.backgroundColor = '#60b347';

            /*to increase the width of the number you won */
            document.querySelector('.number').style.width = '30rem';

            //77. Implementing Highscores2
            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }




            //when the guess is greater or less than the secretnumber, too high
            //using refractoring on our code; the DRY principle.
        }else if(guess !== secretNumber) {
              if (score > 1) {
                // document.querySelector('.message').textContent =
                //  guess > secretNumber ? 'Too high!😁' : 'Too low😉';
                displayMessage( guess > secretNumber ? 'Too high!😁' : 'Too low😉');
                
                /* decrease the score for wrong guess, score = score -1; or*/
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = 'You lost the game!😢';
                displayMessage('You lost the game!😢'); //calling the function var of .message
                document.querySelector('.score').textContent = 0; //once it gets to 0, you lost displays

            }
        }
        //  else if (guess > secretNumber) {
        //     //if the score is abovet '0'
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too high!😁';
        //         /* decrease the score for wrong guess, score = score -1; or*/
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'You lost the game!😢';
        //         document.querySelector('.score').textContent = 0; //once it gets to 0, you lost displays

        //     }; //we only implement this when the guess is above the secret number


        //     //when the guess is lower than the number, too low
        // } else if (guess < secretNumber) {
        //     //if the score is abovet '0'
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too low!😁';
        //         /* decrease the score for wrong guess, score = score -1; or*/
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'You lost the game!😢';
        //         document.querySelector('.score').textContent = 0; //once it gets to 0, you lost displays

        //     }; 
        // }
    });
    
/*JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK � */

 // making the again to function 
 /*to restore all the innitial conditions which will then make it possible
 to play the game again without reloading the browser*/
/*num 1 */ document.querySelector('.again').addEventListener('click', 
    function() {
/*num2 */   score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;

//  /*num3 */ document.querySelector('.message').textContent = 'Start guessing...';
displayMessage('Start guessing...'); //calling the function var of .message

 document.querySelector('.score').textContent = score;
 document.querySelector('.number').textContent = '?';
 document.querySelector('.guess').value = ''; //the value will turn empty

 /*num4 */
 document.querySelector('body').style.backgroundColor = '#222';

 /*to increase the width of the number you won */
 document.querySelector('.number').style.width = '15rem';

    }
);

//77. Implementing Highscores

// 78. Refactoring Our Code: The DRY Principle

//79. PROJECT #2: Modal Window