// connect JS variables to document
let press = document.getElementById("pressDiv");
let wins = document.getElementById("winsDiv");
let currentWord = document.getElementById("currentWordDiv");
let numberGuesses = document.getElementById("numberGuessesDiv");
let lettersGuessed = document.getElementById("lettersGuessedDiv");

// Set currentWins to 0 to start
let currentWins = 0;

press = "Press any key to start!"
press.textContent = (press);


// Set up page that will show on load
wins.textContent = ("wins: " + currentWins);

// make an array of 5 words to be used for the game
let gameWords = ["bonham", "pert", "moon", "grohl", "krupa"]


// make an array of 26 letters of alphabet



