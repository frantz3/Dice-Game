'use strict';
// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    // generate a random dice roll
const dice = Math.trunc(Math.random() * 6) + 1

    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check if 1 is rolled
    if (dice !== 1) {
    // add to current score
    currentScore += dice;
    current0El.textContent = currentScore //change to current player
    }else if(dice === 1) {
        player0El.classList.remove('player--active')
        player1El.classList.add('player--active')
  
    }
})
