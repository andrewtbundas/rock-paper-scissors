const OPTIONS = ['rock','paper','scissors']

function computerPlay(){
    return OPTIONS[Math.floor(Math.random() *3)]
}

function playerPlay(){

    let userInput = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    while(true){
        if (
            userInput == 'rock'||
            userInput == 'paper'||
            userInput == 'scissors'
        ){
            return userInput
        }

        else{
            userInput = prompt("invalid input, please enter rock, paper, or scissors")

    }
    
}
    return 
}

function playRound(playerSelection,computerSelection){

    if (playerSelection == computerSelection){
        console.log(`Tie! You both threw ${computerSelection}`)
        return 'tie'
    }

    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
        )
    {
        console.log(`You win this round, ${playerSelection} beats ${computerSelection}!`)
        return 'player'
    }

    else{
        console.log(`You lose this round, ${playerSelection} loses to ${computerSelection}!`)
        return 'computer'
    }
}


function game(len=5){

    let playerWins = 0;
    let computerWins = 0;
    let result;
    for(i=0;i<len;i++){
        computerSelection = computerPlay()
        playerSelection = playerPlay()
        console.log(`You selected ${playerSelection}`)
        console.log(`Computer selected ${computerSelection}`)

        result = playRound(playerSelection,computerSelection)

        if (result == 'player'){
            playerWins++
        }
        if (result=='computer'){
            computerWins++
        }
    }

    if (playerWins > computerWins){
        console.log(`You did it! You beat the computer ${playerWins} to ${computerWins}`)
    }

    else if (computerWins > playerWins){
        console.log(`You lost! The computer beat you ${playerWins} to ${computerWins}`)
    }

    else{
        console.log(`You tied ${playerWins} to ${computerWins}`)
    }

}