let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let winningScore;
const options = ["rock", "paper", "scissors"];

const gameText = document.querySelector("#gameText");

//Create a function that randomly returns between Rock Paper and Scissors for the computer
function computerPick(){
    return (options[Math.floor(Math.random()*options.length)]);
}

//Create a function that plays a single round of the game
function playRound(playerSelection){
    computerSelection = computerPick();
        if (computerSelection == playerSelection) {
        gameText.textContent = "It's a tie!";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        gameText.textContent = "You Lose! Rock beats Scissors!";
        computerScore++;
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        gameText.textContent = "You Lose! Paper beats Rock!";
        computerScore++;
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        gameText.textContent = "You Lose! Scissors beat Paper!";
        computerScore++;
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        gameText.textContent = "You Win! Paper beats Rock!";
        playerScore++;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        gameText.textContent = "You Win! Scissors beat Paper!";
        playerScore++;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        gameText.textContent ="You Win! Rock beats Scissors!";
        playerScore++;
    }
    results.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
}

//Button to play a round of the game with rock as playerSelection
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => playRound("rock"));

//Button to play a round of the game with paper as playerSelection
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => playRound("paper"));

//Button to play a round of the game with scissors as playerSelection
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => playRound("scissors"));

//Displays the current scores of the player and the computer
const results = document.querySelector("#results");
