

// connect JS variables to document
let press = document.getElementById("pressDiv");
let wins = document.getElementById("winsDiv");
let currentWord = document.getElementById("currentWordDiv");
let numberGuesses = document.getElementById("numberGuessesDiv");
let lettersGuessed = document.getElementById("lettersGuessedDiv");

// Set currentWins to 0 to start
let currentWins = 0;

// Set up page that will show on load
press.textContent = ("Press any key to start!");
wins.textContent = ("wins: " + currentWins);

// When any key is pressed game starts
document.onkeyup = function() {
    press.textContent = ("Press any letter for your first guess");
    let guessNumber = 13;
    numberGuesses.textContent = ("Remaining guesses: " + guessNumber);
    lettersGuessed.textContent = ("Letters already guessed: ");

    // make an array of 5 words to be used for the game
    let gameWords = ["bonham", "pert", "moon", "grohl", "krupa"]
    // randomly choose one of gameWords to use as current word
    let randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
    console.log(randomWord);

    currentWord.textContent = ("Current word: " + "- ".repeat(randomWord.length));

    document.onkeyup = function(event) {
        // capture userInput
        let userInput = event.key;
        // decrement guessNumber by 1 and display
        guessNumber--
        numberGuesses.textContent = ("Remaining guesses: " + guessNumber);
        // show letter in LettersGuessed
        lettersGuessed.textContent = ("Letters already guessed: " + userInput);
        // do an append here to show all letters guessed

        
        for (var i=0; i< randomWord.length; i++) {
            if (userInput === randomWord[i]);
                currentWord[i] = userInput;
                return currentWord.textContent = ("Current word: " + currentWord[i]);
                console.log(currentWord[i]);
        }
        
        // does userInput match any letters from randomWorld?
            // if userInput === randomWord[0 - randomWord.length],
                // do loop here to run through all characters of currentWord
                // if first letter matches output currentWord.textContent = ("Current word: " + userEntry + "- ".repeat(randomWord.length - 1)
                    // if not then move to the second letter
                    

    }

    
    // make an array of 26 letters of alphabet
    let alphabet = [("abcdefghijklmnopqrstuvwxyz").split("")];


    

}
