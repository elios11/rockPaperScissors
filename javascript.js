let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let winningScore;
const options = ["rock", "paper", "scissors"];

//Create a function that randomly returns between Rock Paper and Scissors for the computer
function computerPick(){
    return (options[Math.floor(Math.random()*options.length)]);
}

//Create a function that plays a single round of the game
function playRound(){
    computerSelection = computerPick();
        if (computerSelection == playerSelection) {
        console.log("It's a tie!");
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You Lose! Rock beats Scissors!");
        computerScore++;
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You Lose! Paper beats Rock!");
        computerScore++;
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You Lose! Scissors beat Paper!");
        computerScore++;
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You Win! Paper beats Rock!");
        playerScore++;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You Win! Scissors beat Paper!");
        playerScore++;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You Win! Rock beats Scissors!");
        playerScore++;
    }
}

//Create a function called game that plays the game 5 times, and calls the winner of the whole game
// function playGame(){
// for (winningScore = 0; winningScore < 5; winningScore++){
// playerSelection = window.prompt("Pick your play: ").toLowerCase();
// playRound();
// console.log("Player Score: " + playerScore);
// console.log("Computer Score: " + computerScore);
// }
// if (playerScore > computerScore){
// console.log("Congratulations! You won.");
// }
// else if (computerScore > playerScore){
// console.log("You lost :(. Better luck next time!");
// }
// else {console.log("It's a tie!");}
//}
playGame();