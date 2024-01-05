document.addEventListener('DOMContentLoaded', function () {
    var startGameButton = document.getElementById('start');
    
    // checking if start button is not null
    if (startGameButton) 
    {
        startGameButton.addEventListener('click', function() {
        startGame(); // starts the game
    });
    } else {
        console.log('start button is null'); // debugging
    }
}); // end of DOMContentLoaded


function startGame() {
    
    // starts the game & hide the start button
    var startButton = document.getElementById('start');
    if (startButton) {
         startButton.style.display = 'none'; // hide the game button 
    } else {
        console.log('start button is null'); 
    }
    // display the options
    var gameOptions = document.getElementById('gameChoices');

    if (gameOptions) {
        gameOptions.style.display = 'block'; // show the options
    } else {
        console.log('game options is null');
    } 

    // get the users choice and then invoke the playRound function
    var rockButton = document.getElementById('rock');
    var paperButton = document.getElementById('paper');
    var scissorsButton = document.getElementById('scissors');

    if (rockButton) {
        rockButton.addEventListener('click', function() {
            playRound('rock', computerPlay());
        });
    } else {
        console.log('rock button is null');
    } 

    if (paperButton) {
        paperButton.addEventListener('click', function() {
            playRound('paper', computerPlay());
        })
    } else {
        console.log('paper button is null');
    }

    if (scissorsButton) {
        scissorsButton.addEventListener('click', function() {
            playRound('scissors', computerPlay());
        })
    } else {
        console.log('scissors button is null');
    }
};

// get the computer's choice
function computerPlay() {
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return 'rock';
        case 2: 
            return 'paper';
        case 3:
            return 'scissors';
    }
}


    
function playRound(playerSelection , computerSelection) {
    // play a round of rock paper scissors
    var playerChoice = playerSelection.toLowerCase();
    var computerChoice = computerSelection.toLowerCase(); 
    var result = '';

    if (playerChoice === computerChoice) {
        alert('It/s a tie!');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        alert('You win! Rock beats scissors');
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        alert('You lose! Paper beats rock'); 
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        alert('You win! Paper beats rock');
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        alert('You lose! Scissors beats paper');
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        alert('You win! Scissors beats paper');
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        alert('You lose! Rock beats scissors');
    } else {
        alert('Invalid input');
    }

}