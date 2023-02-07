'use strict';

// Todo: get users name - prompt and alert greeting back to user
let userName = prompt ('Hello! What is your name?');

alert (`Welcome to my site ${userName}. We will now begin a guessing game into what you think you can figure out about me!`)

// todo: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect

let qOneGuess = prompt ('Do I own dogs?').toLowerCase();

if(qOneGuess === 'yes' || qOneGuess === 'y') {
  alert('You are correct!');
} else {
  alert ('Sorry, that was incorrect!')
}

// todo: give them a final message with their name in the alert
alert(`Thanks for playing my game ${userName}!`)