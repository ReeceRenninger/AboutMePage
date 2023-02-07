'use strict';

// Todo: get users name - prompt and alert greeting back to user

let userName = prompt ('Hello! What is your name?');

alert (`Welcome to my site ${userName}. You will now be asked a series of yes or no questions about me! Good luck!`);

// todo: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect

let qOneGuess = prompt ('Do I own dogs?').toLowerCase();

if(qOneGuess === 'yes' || qOneGuess === 'y') {
  // console.log(qOneGuess);
  alert('You are correct!');
} else if(qOneGuess === 'no' || qOneGuess === 'n') {
  alert ('Sorry, that was incorrect!');
} else {
  alert ('That was not a yes or no response!');
}

let qTwoGuess = prompt ('Do I have a degree?').toLowerCase();

if(qTwoGuess === 'yes' || qTwoGuess === 'y') {
  // console.log(qTwoGuess);
  alert('You are correct!');
} else if (qTwoGuess === 'no' || qTwoGuess === 'n'){
  alert ('Sorry, that was incorrect!');
} else {
  alert ('That was not a yes or no response!');
}

let qThreeGuess = prompt ('Do I have any tattoos?').toLowerCase();
if(qThreeGuess === 'yes' || qThreeGuess === 'y') {
  // console.log(qThreeGuess);
  alert('You are correct!');
} else if (qThreeGuess === 'no' || qThreeGuess === 'n') {
  alert ('Sorry, that was incorrect!');
} else {
  alert ('That was not a yes or no response!');
}

let qFourGuess = prompt ('Do I ride motorcycles?').toLowerCase();
if(qFourGuess === 'yes' || qFourGuess === 'y') {
  // console.log(qFourGuess);
  alert('You are correct!');
} else if (qFourGuess === 'no' || qFourGuess === 'n') {
  alert ('Sorry, that was incorrect!');
} else {
  alert ('That was not a yes or no response!');
}

let qFiveGuess = prompt ('Do I have a beard?').toLowerCase();
if(qFiveGuess === 'yes' || qFiveGuess === 'y') {
  // console.log(qFiveGuess);
  alert('You are correct!');
} else if (qFiveGuess === 'no' || qFiveGuess === 'n') {
  alert ('Sorry, that was incorrect!');
} else {
  alert ('That was not a yes or no response!');
}

// todo: give them a final message with their name in the alert

alert(`Thanks for playing my game ${userName}!`);
