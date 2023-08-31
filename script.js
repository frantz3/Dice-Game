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
let scores, currentScore, activePlayer, playing;
 scores = [0, 0];
 currentScore = 0;
 activePlayer = 0;
 playing = true;
 
function init() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  diceEl.classList.add('hidden');
}
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  // generate a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check if 1 is rolled
    if (dice !== 1) {
      // add to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      //change to next player
    } else {
      switchPlayer();
    }
  }
});

// when a player wants to hold at their current score

btnHold.addEventListener('click', function () {
  // add current score to active player's score
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //If at 100 end the game
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //else Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
