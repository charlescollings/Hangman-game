$(document).ready(function() {
    
// variables
// array of word options
let wordList = ['ghost', 'skeleton', 'pumpkin', 'bat', 'witch']
let dashWord = []
let chosenWord = "";
let userWins = 0;


// functions
function createDashWord(word) {
      // create the dashboard array
    let tmpDashboard = [];
    for (var i=0; i< word.length; i++) {
        tmpDashWord.push = ("_");
    }
    return tmpDashboard;
}

function startGame() {

}



// events
//    page load

// init event
//    key up
chosenWord = wordList[Math.floor(Math.random()*wordList.length)];
dashWord = createDashWord(chosenWord);

document.onkeyup = function(event) {
    let letterGuessed = event.key.lowercase();
    $('#hintDiv').text(chosenWord);
    // check if letter in word
    for (var i=0; i< chosenWord.length; i++) {
        if (letterGuessed === chosenWord[i]) {
            dashWord[i] = letterGuessed;
        }
    }

    // if dashWOrd = chosenWord you win
    if (dashWord.join("") === chosenWord) {
        userWins++;
        // start new game here


    }

    // display dashword
    $('#hintDiv').text(dashWord.join(' '));
    $('#winSPan').text(userWins);  
       
        } 
});