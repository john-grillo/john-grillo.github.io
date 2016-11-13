'use strict';










console.log('Hello from app2.js!');
//var NULL = null;
String.prototype.wordSearch = function(arg) {
  return this.toLowerCase().indexOf(arg);
};

var answerCount = 0;

//first question bloc

function firstQuestion() {
var firstQ = prompt("Do you like icecream? Type 'Y/N' or 'YES/NO' ").toLowerCase();
console.log(firstQ);
console.log( (firstQ === ('yes' || 'y') ) );
if (firstQ === 'yes' || firstQ === 'y') {
  alert('Of course you do! Everyone loves ice cream. You gain a point!');
  answerCount += 1;
}
else if (firstQ === 'no' || firstQ === 'n' ) {
  alert("Gordon Bennet! What's wrong with you if you don't like ice cream?");
}
else {
  alert("Oh my god, what is this, I don't even...");
}
console.log("John Grillo's favorite flavor is Chocolate Mudslide from the Tillamook Cheese factory");
console.log("User answered with: " + firstQ);
};

firstQuestion();

//2nd question block


function secondQuestion() { var secondQ = prompt("But seriously, what is John Grillo's favorite Laika film?");
console.log("User answered with: " + secondQ);
if (secondQ.wordSearch("kubo") >= 0) {
  alert('Good, you paid attention. Have a victory point!');
  answerCount += 1;
}
else if (secondQ == -1) {
  alert(secondQ + '; Good guess, but the answer was Kubo & The Two Strings');
}
else {
   alert("Gordon Bennet, that's not the right answer!");
}
// end of function
}

secondQuestion();

//third question bloc
function thirdQuestion() { var thirdQ = prompt('So who another superhero that John Grillo likes?');
console.log("User answered with: " + thirdQ);
console.log(thirdQ.wordSearch('mr. miracle'));
if (thirdQ.wordSearch('mr. miracle') >= 0 ) {
  alert('That is right! Mr. Miracle should get a movie. Have another point.');
  answerCount += 1;
} else {
  alert('No, ' + thirdQ + ' does not need a movie.');
}
// end of function
};

thirdQuestion();




//fourth question bloc
function fourthQuestion() { var fourthQ = prompt('What country in Africa has John Grillo been to?');
console.log("User answered with: " + fourthQ);
if (fourthQ.wordSearch('egypt') >= 0 ) {
  alert('Good catch! Not a lot of people think of Egypt as an African country.');
  answerCount += 1;
} else {
  alert('Buyao. It was Egypt.');
}
// end of function
}

fourthQuestion();

// fifth question bloc -- changed on 11/10/16 to be only allow 4 tries.
// User guesses a number between one and 10.

function fifthQuestion() { var attempts = 1;
console.log("User has started guessing game; must guess between 1 and 10, inclusive");
while ( attempts < 5 ) {
  var fifthQ = prompt("Ahoy there! You have started the number guessing game. Must guess a number between 1 and 10, inclusive. Oh, and you only have 4 attempts.");
  if (fifthQ >= 5) {
    console.log("User makes a guess of " + fifthQ);
    alert("You guessed " + fifthQ + ". Your guess was too high. You now only have " + (4 - attempts) + " remaining");
    attempts++;
  }
  else if (fifthQ < 5 && fifthQ >= 2) {
    console.log("User makes a guess of " + fifthQ);
    alert("You guessed " + fifthQ + ". Your guess wasn't low enough. You now only have " + (4 - attempts) + " remaining");
    attempts++;
  }
  else if (fifthQ == 1 ){
    console.log("User makes correct guess of 1.");
    alert('Good catch! 1 is the answer! The word "inclusive" throws people off. Take your point and be gone!');
    attempts = 10;
    answerCount++;
  }
  else {
    console.log("That was not a correct value. Please enter a real number, not letters or special characters");
    alert("That was not a correct value. Please enter a real number, not letters or special characters");
  }

//end of while loop
}
// end of function
}

fifthQuestion();


// Sixth question bloc

function sixthQuestion() { var sixthQ = prompt("Does John duel with lightsabers? Type 'Y/N' or 'YES/NO' ").toLowerCase();
console.log(sixthQ);
if (sixthQ === 'yes' || sixthQ === 'y') {
  alert('Yes. He makes videos with his friends, too. Have a victory point.');
  answerCount += 1;
}
else if (sixthQ === 'n' || sixthQ === 'no') {
  alert("Actually, he does enjoy lightsaber dueling");
}
else {
  alert("Oh my god, what is this, I don't even...");
}
console.log("John Grillo does, but he does not own his own");
console.log("User answered with: " + sixthQ);
// end of function
}

sixthQuestion();



function seventhQuestion() { var sevenQ = prompt("Does John look fresh? Type 'Y/N' or 'YES/NO' ").toLowerCase();
if (sevenQ === 'yes' || sevenQ === 'y') {
  alert('Yes. Yes he does. Take a point and stay fresh.');
  answerCount += 1;
}
else if (sevenQ === 'n' || sevenQ === 'no') {
  alert("You're a liar!");
}
else {
  alert("Oh my god, what is this, I don't even...");
}
console.log("John Grillo does, indeed, look fresh.");
console.log("User answered with: " + sevenQ);
// end of function
}

seventhQuestion();


//this is the array question. Eigth question bloc


function eightQuestion() {  var arrayAns = ['canada', 'mexico', 'japan', 'china', 'egypt', 'usa'];
var arrayLength = arrayAns.length;
var eightQ = prompt("John Grillo lists a few countries he has been to. Can you name one of them? Oh, and spelling counts").toLowerCase();
for(var index = 0; index <= arrayLength; index++) {

  if (eightQ === arrayAns[index]) {
    console.log("User guessed correctly at: ", index, " ; The user guessed: ", eightQ);
    alert("Bingo! You guessed a country he has been to! And USA does count as an answer.");
    answerCount += 1;
    break;
  }
  else {
    //alert(eightQ, " is the wrong answer");
    console.log("Wrong answer at ", index, "The user guessed, ", eightQ);
  }

//end of for loop
}
// end of function
}

eightQuestion();

//ninth question

function nineQuestion() {
var nineQ= prompt("Does John Grillo have a bachelor's degree? Type 'Y/N' or 'YES/NO' ").toLowerCase();
if (nineQ === 'yes' || nineQ === 'y') {
  alert('Yes. Yes he does. Most people can not read past "AAS".');
  answerCount += 1;
  console.log("User answered correctly with: ", nineQ);
}
else if (nineQ === 'n' || nineQ === 'no') {
  alert("Read harder. He has a bachelor's degree and an associate's degree as well.!");
  console.log("Wrong answer at ", nineQ)
}
else {
  alert("Oh my god, what is this, I don't even...");
  console.log("user gave invalid input.");
}
// end of function
}
nineQuestion();

//tenth question
function tenQuestion() {
var tenQ = prompt("Is John Grillo willing to relocate for work? Type 'Y/N' or 'YES/NO' ").toLowerCase();
if (tenQ === 'yes' || tenQ === 'y') {
  alert('Yes. "Have gun, will travel" is his motto And he can work remotely!');
  answerCount += 1;
}
else if (tenQ === 'n' || tenQ === 'no') {
  alert("John Grillo is willin to relocate for the right opportunity!");
}
else {
  alert("Oh my god, what is this, I don't even...");
}
console.log("John Grillo does, indeed, look fresh.");
console.log("User answered with: " + tenQ);
// end of function
};

tenQuestion();


function scorecard() {
  //scorecard
  alert("Ok, now we are tallying up your score.");
  console.log("Tallying score right now.");
  if (answerCount >= 9) {
    alert("Fantastic job! Your ability to read comprehensively puts you ahead of the average employer!");
    console.log("User scored above average at: " + answerCount);
  } else if (answerCount >= 6) {
    alert("Great job. Have a cookie. You earned it. You got " + answerCount);
    console.log("User scored above average at: " + answerCount);
  } else if (answerCount < 5 || answerCount > 3) {
    alert("You choose poorly. Your score was" + answerCount);
    console.log("User scored: ", answerCount);
  } else {
    alert("Feel free to read the answers and then try again. Your score was " + answerCount);
    console.log("User scored below average at: " + answerCount);
  }
}

scorecard();
