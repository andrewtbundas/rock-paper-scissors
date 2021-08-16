const OPTIONS = ['rock', 'paper', 'scissors']

let playerWins = 0;
let computerWins = 0;
let result;
const playButtons = document.querySelectorAll('.play-button')

const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

function computerPlay() {
    return OPTIONS[Math.floor(Math.random() * 3)]
}

/* function playerPlay() {

    let userInput = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    while (true) {
        if (
            userInput == 'rock' ||
            userInput == 'paper' ||
            userInput == 'scissors'
        ) {
            return userInput
        }

        else {
            userInput = prompt("invalid input, please enter rock, paper, or scissors")

        }

    }
    return
} */

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log(`Tie! You both threw ${computerSelection}`)
    }

    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        console.log(`You win this round, ${playerSelection} beats ${computerSelection}!`)
        playerWins++
        console.log(playerWins);
    }

    else {
        console.log(`You lose this round, ${playerSelection} loses to ${computerSelection}!`)
        computerWins++
        console.log(computerWins);
    }

    scoreUpdate();
    checkWinner();
}

function scoreUpdate() {
    playerScore.textContent = `Player Score: ${playerWins}`
    computerScore.textContent = `Computer Score: ${computerWins}`
}

function checkWinner() {

    if (!(playerWins == 5 || computerWins == 5)) {
        console.log("No Winner yet!")
        return
    }

    else {

        if (playerWins == 5) {
            console.log("Player Wins!")

        }

        else {
            console.log("Computer Wins!")

        }
        playerWins = 0
        computerWins = 0
        scoreUpdate()

    }

}


function game() {

    playButtons.forEach((button) => button.addEventListener('click', () => {
        playRound(button.id, computerPlay())
    }))

}

// const playButtons = document.querySelectorAll('.play-button')

// playButtons.forEach((button) => button.addEventListener('click', () => {
//     console.log(`Pressed ${button.id}`)
//     playRound()
// }))

//Add event listener to buttons that calls playRound(playerSelection)

game()