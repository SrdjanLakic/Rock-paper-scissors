'use strict';
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    if (userChoice === 'rock') {
      userChoice = '✊';
    }
    if (userChoice === 'paper') {
      userChoice = '✋';
    }
    if (userChoice === 'scissors') {
      userChoice = '✌';
    }
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    console.log(userChoice);
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = '✊';
  }
  if (randomNumber === 2) {
    computerChoice = '✋';
  }
  if (randomNumber === 3) {
    computerChoice = '✌';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) result = 'It is draw';
  if (computerChoice === '✊' && userChoice === '✋') {
    result = 'You WIN 🏆';
  }
  if (computerChoice === '✊' && userChoice === '✌') {
    result = 'You lose ⛔';
  }
  if (computerChoice === '✋' && userChoice === '✌') {
    result = 'You WIN 🏆';
  }
  if (computerChoice === '✋' && userChoice === '✊') {
    result = 'You lose ⛔';
  }
  if (computerChoice === '✌' && userChoice === '✊') {
    result = 'You WIN 🏆';
  }
  if (computerChoice === '✌' && userChoice === '✋') {
    result = 'You lose ⛔';
  }
  resultDisplay.innerHTML = result;
}
