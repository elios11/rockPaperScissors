let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let winningScore;
let gameEnded = false;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const options = ["rock", "paper", "scissors"];

const computerSelectionBox = document.getElementById("computerSelection");
const results = document.getElementById("results");
const restartBtn = document.getElementById("restartBtn");
const gameText = document.querySelector("#gameText");

//Add playing event listeners to the game buttons
allowPlaying();

//Create a function that randomly returns between Rock Paper and Scissors for the computer
function computerPick(){
    return (options[Math.floor(Math.random()*options.length)]);
}

//Create a function that plays a single round of the game
function playRound(playerSelection) {
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
        gameText.textContent = "You Win! Rock beats Scissors!";
        playerScore++;
    }
    computerSelectionBox.textContent = `Computer Selection: ${computerSelection}`;
    results.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    playGame();
}

//Creates a function that plays the game until the player or computer reaches 5 points
function playGame() 
{
    if (playerScore == 5) 
    {
        gameText.textContent = "Congratulations! You won.";
        gameEnded = true;
    }
    else if (computerScore == 5)
    {
        gameText.textContent = "You lost... Better luck next time!";
        gameEnded = true;
    }
}

//Add and remove event listener for playing a round with user choice
function allowPlaying() {
    rockButton.addEventListener("click", function handler() {
        if (gameEnded) {
            this.removeEventListener("click", handler);
            return false;
        }
        playRound("rock");
    });

    paperButton.addEventListener("click", function handler() {
        if (gameEnded) {
            this.removeEventListener("click", handler);
            return false;
        }
        playRound("paper");
    });

    scissorsButton.addEventListener("click", function handler() {
        if (gameEnded) {
            this.removeEventListener("click", handler);
            return false;
        }

        playRound("scissors");
    });
}

function restartGame() {
    computerScore = 0;
    playerScore = 0;
    gameEnded = false;
    computerSelectionBox.textContent = "";
    gameText.textContent = "The game has been restarted!";
    results.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    allowPlaying();
}

restartBtn.addEventListener("click", () => {
    restartGame();
})