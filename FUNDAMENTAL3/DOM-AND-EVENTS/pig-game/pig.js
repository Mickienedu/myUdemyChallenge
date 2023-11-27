'use strict'

//selecting elements
const player0El = document.querySelector('.player--0'); //to change the bcolor of current player
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //this is how to use getElementById
// CURRENT SCORE for player 0 and 1
const current0El = document.getElementById('current--0'); 
const current1El = document.getElementById('current--1'); 

const diceEl = document.querySelector('.dice');
// the buttons
const btnNew = document.querySelector('.btn--new'); //for newGame
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// setting the initial conditions 

let scores, currentScore, activePlayer, playing;
//init=initialisation. for starting a new game
const init = function() {  //86. Resetting the Game
     scores = [0, 0]; // the two zeroes that display when the game is yet to start
     currentScore = 0;  //giving the variable for currentscore
     activePlayer = 0; //active player
     playing = true; //to know if the game is playing or not.


    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden'); //hide the dice

    //removing the color that indicate that someone has won
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

// Switch to next player FUNCTION to be called
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0; //the current score backs to 0 when it hits 1
    activePlayer = activePlayer === 0 ? 1 : 0; //when a player hits 1, the second player start playing and the previous player score goes back to zero

    // the active player will have a brighter view 
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// 83. Rolling the Dice
//rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {

    
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    //2. Display dice(removing the hidden class)
    diceEl.classList.remove('hidden');
    // to get other imgs, we use src 
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // Add dice to current
        currentScore += dice; 
        // selecting the active player and their score 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        // current0El.textContent = currentScore; //it adds whatever dice number to the current score
    }else {
        // // 84. Switching the Active Player
        // // Switch to next player
       switchPlayer(); //calling the function
    }
}
});
//85. Holding Current Score
btnHold.addEventListener('click', function() {
    if(playing) {


    //1. ADD current score to active players's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. check if player's score is >= 100. to make it really obvous that the player has won
    if(scores[activePlayer] >= 100) {
        //finish the game
        playing = false;
        //to hide the dice when the game is over
        diceEl.classList.add('hidden');

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else {
//Switch to the next player
switchPlayer();   
 }
}
});
//86. Resetting the Game
btnNew.addEventListener('click', init);
   



// 84. Switching the Active Player
//85. Holding Current Score
//86. Resetting the Game