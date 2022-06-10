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
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'paper';
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) result = 'It is draw';
  if (computerChoice === 'rock' && userChoice === 'papper') {
    result = 'You WIN';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You lose';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You WIN';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You lose';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You WIN';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You lose';
  }
  resultDisplay.innerHTML = result;
}
