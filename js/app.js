'use strict';

let score = 0;

// Todo: get users name - prompt and alert greeting back to user

let userName = prompt('Hello! What is your name?'); {

  alert(`Welcome to my site ${userName}. You will now be asked a series of questions about me! Good luck!`);
}



// todo: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect
function questionOne() {
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
}
questionOne();


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
// DONE: create a feedback loop of too high or too low until user guesses correct numeric value answer, convert answer to number from string, allow 4 chances to get correct answer, after all attempts tell user correct answer
// DONE: MAKE THE PROMPT ONLY ACCEPT NUMERICAL VALUES, THIS THING IS A JERK

let myCodeTime = 3;

for (let i = 0; i < 4; i++) {
  let qSixGuess = +prompt('How many hours do I spend coding outside of the classroom every day?');
  if(qSixGuess < myCodeTime) {
    alert('That guess was too low! Try again.');
  }else if(qSixGuess > myCodeTime) {
    alert('That guess was too high! Try again.');
  }else if (qSixGuess === myCodeTime) {
    score++;
    alert(`Nice job, ${userName}! The correct answer was 3`);
    i = 5;
    break;
  }if (i === 3){
    alert('Sorry, no more tries! The answer was 3!');
  }
}



// todo: I made this stupid thing work and I am proud, don't touch this.
// todo: 7th question has multiple correct answers stored in an array, give user 6 attempts, guessing ends on correct guess or run until out of attempts, display all possible answers to user
let favFoods = ['american', ' mexican', ' chinese', ' thai', ' korean', ' japanese', ' french'];
let numOfGuesses = 0;
let corrAns = false;
while(numOfGuesses < 6 && corrAns === false){
  let qSevenGuess = prompt ('What is my favorite type of food? Hint: Think of country names').toLowerCase();
  for(let i = 0; i < favFoods.length; i++){
    if(qSevenGuess === favFoods[i]){
      alert(`Congrats ${userName} you got one of them right! All of my favorites are ` + favFoods);
      score++;
      corrAns = true; // dum dum way to break while loop
      break;
    }
    if(i === favFoods.length - 1){
      numOfGuesses++;
      alert('Incorrect, try again!');
    }
  }
}

if(numOfGuesses === 6){
  alert(`Sorry ${userName} you didn't guess any of my favorites! My favorites are ` + favFoods);
}




// todo: give them a final message with their name in the alert

alert(`Thanks for playing my game ${userName}, you scored ${score} out of 7!`);
