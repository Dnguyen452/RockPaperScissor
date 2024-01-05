document.getElementById(start).addEventListener('click', startGame() {
    console.log('success');
    startGame();
});





// function computerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomNumber = Math.floor(Math.random() * 3); // Random number between 0 and 2
//     return choices[randomNumber];
// }

// function playerChoice(choice) {
//     // The choice parameter is passed from the button click event
//     const compChoice = computerChoice();
//     playGame(choice, compChoice);
// }

// function playRound(playerChoice, compChoice) {
//     // Display icons (implementation depends on how you plan to show icons)

//     if ((playerChoice === 'rock' && compChoice === 'scissors') ||
//         (playerChoice === 'paper' && compChoice === 'rock') ||
//         (playerChoice === 'scissors' && compChoice === 'paper')) {
//         console.log('Player wins!!!');
//     } else if (playerChoice === compChoice) {
//         console.log('It\'s a tie!');
//     } else {
//         console.log('Computer wins!!!');
//     }
// }

// function game () {
    
// }

// // Example of attaching the playerChoice function to buttons
// document.querySelectorAll('.gamechoices li').forEach(button => {
//     button.addEventListener('click', function() {
//         playerChoice(this.innerText.toLowerCase());
//     });
// });



