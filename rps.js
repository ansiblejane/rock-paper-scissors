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
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". It's a tie!"), [1,1]]
        } else if (computerSelection=="paper") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You lose!"), [0,1]]
        } else if (computerSelection=="scissors") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You win!"), [1,0]]
        } else {
            return "Huh..."
        }
    }
    if (playerSelection=="paper") {
        if (computerSelection=="paper") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". It's a tie!"), [1,1]]
        } else if (computerSelection=="scissors") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You lose!"), [0,1]]
        } else if (computerSelection=="rock") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You win!"), [1,0]]
        } else {
            return "Huh..."
        }
    }
    if (playerSelection=="scissors") {
        if (computerSelection=="scissors") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". It's a tie!"), [1,1]]
        } else if (computerSelection=="rock") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You lose!"), [0,1]]
        } else if (computerSelection=="paper") {
            return [("You played " + playerSelection + ". The computer played " + computerSelection + ". You win!"), [1,0]]
        } else {
            return "Huh..."
        }
    }
}


function game(rounds) {
    let score = [0,0]

    for(let i = 0; i < rounds; i++) {
        let roundResults = playRound(prompt("Enter your shape: "), getComputerChoice())
        let roundMessage = roundResults[0]
        let roundScore = roundResults[1]
        score = [(score[0] + roundScore[0]), (score[1] + roundScore[1])]
        console.log(roundMessage + " The score is " + score[0] + "-" + score[1] + ".")
    }

    if (score[0] > score[1]) {
        console.log("The final score is " + score[0] + "-" + score[1] + ". You win!")
    } else if (score[1] > score[0]) {
        console.log("The final score is " + score[0] + "-" + score[1] + ". You lose!")
    } else {
        console.log("The final score is " + score[0] + "-" + score[1] + ". It's a tie!")
    }
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))

game(5)