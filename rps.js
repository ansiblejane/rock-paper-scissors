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
            return "The computer played " + computerSelection + ". It's a tie!"
        } else if (computerSelection=="paper") {
            return "The computer played " + computerSelection + ". You lose!"
        } else if (computerSelection=="scissors") {
            return "The computer played " + computerSelection + ". You win!"
        } else {
            return "Huh..."
        }
    }
    if (playerSelection=="paper") {
        if (computerSelection=="paper") {
            return "The computer played " + computerSelection + ". It's a tie!"
        } else if (computerSelection=="scissors") {
            return "The computer played " + computerSelection + ". You lose!"
        } else if (computerSelection=="rock") {
            return "The computer played " + computerSelection + ". You win!"
        } else {
            return "Huh..."
        }
    }
    if (playerSelection=="scissors") {
        if (computerSelection=="scissors") {
            return "The computer played " + computerSelection + ". It's a tie!"
        } else if (computerSelection=="rock") {
            return "The computer played " + computerSelection + ". You lose!"
        } else if (computerSelection=="paper") {
            return "The computer played " + computerSelection + ". You win!"
        } else {
            return "Huh..."
        }
    }
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))