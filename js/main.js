"use strict";

//* Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); //! This is a liittle bit faster than query selector()
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//* starting Condtitions
score0El.textContent = 0;
console.log(typeof score0El.textContent); //^ String ==> cause js will convert them to string to show them in screen
score1El.textContent = 0;
diceEl.classList.add("hidden"); //! To hide Dice at the start of game beginning

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//* ==> rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  //! 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //! 2. Display Dice
  diceEl.classList.remove("hidden");
  diceEl.src = `./imgs/dice-${dice}.png`; //^ Here is the trick to pick one img from the 6 img via src attribute using ``

  //! 3. Check for rolled ==> 1: if true
  if (dice !== 1) {
    //! Add The Dice To Current Score
    currentScore += dice;
    //* This a trick to build id dynamically
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    //! switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; //* Reassign the active player
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
