'use strict';

let score = 0;

// Todo: get users name - prompt and alert greeting back to user

let userName = prompt('Hello! What is your name?');{
// while (userName === false) {
//   prompt('Please enter your name, I need it!');

// } if (userName === true) {
  alert(`Welcome to my site ${userName}. You will now be asked a series of questions about me! Good luck!`);
}



// todo: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect

let qOneGuess = prompt('Do I own dogs?').toLowerCase();

if (qOneGuess === 'yes' || qOneGuess === 'y') {
  score++;
  // console.log(qOneGuess);
  alert('You are correct! I have two dogs, Zelda and Link.');
} else if (qOneGuess === 'no' || qOneGuess === 'n') {
  alert('Sorry, that was incorrect!');
} else {
  alert('That was not a yes or no response! However, I do own dogs!');
}

let qTwoGuess = prompt('Do I have a degree?').toLowerCase();

if (qTwoGuess === 'yes' || qTwoGuess === 'y') {
  score++;
  // console.log(qTwoGuess);
  alert('You are correct, I have a degree in Psychology!');
} else if (qTwoGuess === 'no' || qTwoGuess === 'n') {
  alert('Sorry, that was incorrect!');
} else {
  alert('That was not a yes or no response! However, I do have a degree.');
}

let qThreeGuess = prompt('Do I have any tattoos?').toLowerCase();
if (qThreeGuess === 'yes' || qThreeGuess === 'y') {
  score++;
  // console.log(qThreeGuess);
  alert('You are correct!');
} else if (qThreeGuess === 'no' || qThreeGuess === 'n') {
  alert('Sorry, that was incorrect!');
} else {
  alert('That was not a yes or no response! However, I do have tattoos!');
}

let qFourGuess = prompt('Do I ride motorcycles?').toLowerCase();
if (qFourGuess === 'yes' || qFourGuess === 'y') {
  score++;
  // console.log(qFourGuess);
  alert('You are correct! I have a Honda Rebel 1100.');
} else if (qFourGuess === 'no' || qFourGuess === 'n') {
  alert('Sorry, that was incorrect!');
} else {
  alert('That was not a yes or no response! However, I do ride motorcycles.');
}

let qFiveGuess = prompt('Do I have a beard?').toLowerCase();
if (qFiveGuess === 'yes' || qFiveGuess === 'y') {
  score++;
  // console.log(qFiveGuess);
  alert('You are correct!');
} else if (qFiveGuess === 'no' || qFiveGuess === 'n') {
  alert('Sorry, that was incorrect!');
} else {
  alert('That was not a yes or no response! However, I do have a beard!');
}
// todo: create a feedback loop of too high or too low until user guesses correct numeric value answer, convert answer to number from string, allow 4 chances to get correct answer, after all attempts tell user correct answer
// let myCodeTime = 3;
// let numOfAttempts = 4;

// let qSixGuess = prompt('How many hours do I spend coding outside of the classroom every day?');

// // any text input results in correct answer, need to fix
// for(let i=0; i < numOfAttempts; i++){
//   if(qSixGuess < 5 || qSixGuess < 1 ){
//     qSixGuess = prompt ('Try guessing between 1 and 5!');
//   }else if(i === myCodeTime){
//     alert (`Good try, ${userName}! The correct answer was 3`);
//   } else if (qSixGuess < myCodeTime){
//     qSixGuess = prompt('That guess was too low! Try again.');
//   } else if (qSixGuess > myCodeTime){
//     qSixGuess = prompt ('That guess was too high! Try again.');
//   } else {
//     alert('Congrats 3 was correct!');
//     score++;
//     break;
//   }
// }

// todo: 7th question has multiple correct answers stored in an array, give user 6 attempts, guessing ends on correct guess or run until out of attempts, display all possible answers to user
let favFoods = ['american', ' mexican', ' chinese', ' thai', ' indian', ' korean', 'japanese', 'french'];
// let numOfGuesses = 6;
// let qSevenGuess = prompt ('What is my favorite type of food? The choices are ' + favFoods).toLowerCase();
// for(let i=0; i<6; i++){
//   if(i === 5){
//     alert(`Good try ${userName}, but the correct answer was american`);
//   }else if(qSevenGuess === 'american' || 'thai'){
//     alert('Congrats, american was correct!');
//     score++;
//   } else if {
//     qSevenGuess = prompt ('That was incorrect! Please try selecting another option in ' + favFoods);
//   }
// }


// todo: give them a final message with their name in the alert

alert(`Thanks for playing my game ${userName}, you scored ${score} out of 7!`);
