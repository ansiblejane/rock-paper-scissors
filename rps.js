function getComputerChoice() {
 const shapes = ["rock","paper","scissors"]
 const random = Math.floor(Math.random() * shapes.length)

 return shapes[random]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection=="rock") {
        if (computerSelection=="rock") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". This round is a tie!"), [1,1]]
        } else if (computerSelection=="paper") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You lose this round!"), [0,1]]
        } else if (computerSelection=="scissors") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You win this round!"), [1,0]]
        } else {
            return "Huh..."
        }
    }
    if (playerSelection=="paper") {
        if (computerSelection=="paper") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". This round is a tie!"), [1,1]]
        } else if (computerSelection=="scissors") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You lose this round!"), [0,1]]
        } else if (computerSelection=="rock") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You win this round!"), [1,0]]
        } else {
            return "Huh..."
        }
    }
    if (playerSelection=="scissors") {
        if (computerSelection=="scissors") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". This round is a tie!"), [1,1]]
        } else if (computerSelection=="rock") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You lose this round!"), [0,1]]
        } else if (computerSelection=="paper") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You win this round!"), [1,0]]
        } else {
            return "Huh..."
        }
    }
}

let totalScore = [0,0];

const body = document.querySelector("body");
const roundMessage = document.createElement("div");
const scoreboard = document.createElement("div");
const gameMessage = document.createElement("div");

body.appendChild(roundMessage);
body.appendChild(scoreboard);
body.appendChild(gameMessage);

scoreboard.textContent = "The player score is " + totalScore[0] + " and the computer score is " + totalScore[1] + ".";
gameMessage.textContent = "The first to 5 wins!";

/* FUNCTIONS */

function updateScoreboard(totalScore){
    scoreboard.textContent = "The player score is " + totalScore[0] + " and the computer score is " + totalScore[1] + ".";
}

function resetGame(){
    totalScore = [0,0];
}

function updateGameMessage(totalScore) {
    if (totalScore[0] == 5 && totalScore[1] == 5){
        gameMessage.textContent = "It's a tie!";
    } else if (totalScore[0] == 5){
        gameMessage.textContent = "The player wins!";
    } else if (totalScore[1] == 5){
        gameMessage.textContent = "The computer wins!";
    } else {
        gameMessage.textContent = "The first to 5 wins!";
    }
}

/* BUTTONS */

const btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener('click', () => {
    resetGame();
    roundMessage.textContent = "";
    updateScoreboard(totalScore);
});

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    if (totalScore[0] >= 5 || totalScore[1] >= 5){
        alert("Click Reset to keep playing!");
    } else {
        let results = playRound("rock", getComputerChoice());
        totalScore = [totalScore[0] + results[1][0], totalScore[1] + results[1][1]];
    
        roundMessage.textContent = results[0];
        updateScoreboard(totalScore);
        updateGameMessage(totalScore); 
    }
});

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    if (totalScore[0] >= 5 || totalScore[1] >= 5){
        alert("Click Reset to keep playing!");
    } else {
        let results = playRound("paper", getComputerChoice());
        totalScore = [totalScore[0] + results[1][0], totalScore[1] + results[1][1]];
    
        roundMessage.textContent = results[0];
        updateScoreboard(totalScore);
        updateGameMessage(totalScore); 
    }
});

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    if (totalScore[0] >= 5 || totalScore[1] >= 5){
        alert("Click Reset to keep playing!");
    } else {
        let results = playRound("scissors", getComputerChoice());
        totalScore = [totalScore[0] + results[1][0], totalScore[1] + results[1][1]];
    
        roundMessage.textContent = results[0];
        updateScoreboard(totalScore);
        updateGameMessage(totalScore); 
    }
});