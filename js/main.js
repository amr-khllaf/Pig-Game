"use strict";

//! Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); //! This is a liittle bit faster than query selector()
const diceEl = document.querySelector(".dice");

score0El.textContent = 0;
console.log(typeof score0El.textContent); //^ String ==> cause js will convert them to string to show them in screen
score1El.textContent = 0;
diceEl.classList.add("hidden"); //! To hide Dice at the start of game beginning
