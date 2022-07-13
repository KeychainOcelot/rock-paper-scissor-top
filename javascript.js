//currently goes into infinite loop

const RPS = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

function playerPlay() {
    //get player input
    let playerSelection = 0;
    const choice = prompt("Please enter 'rock', 'paper', or 'scissor'");
    for(let i = 0; i < 3; i++) {
        if(choice == RPS[i]) {
            playerSelection = i;
            break;
        }
    }
    return playerSelection;
}

function computerPlay() {
    //randomiser to make computer pick from RPS array
    let computerSelection = 0;
    computerSelection = Math.floor(Math.random() * RPS.length);
    return computerSelection;
}

function gameLoop(playerSelection, computerSelection) {
    let playerWin = false;
    if(playerSelection == RPS[0] && computerSelection == RPS[1]) {
        playerWin = false;
    } else if (playerSelection == RPS[0] && computerSelection == RPS[2]) {
        playerWin = true;
    } else if (playerSelection == RPS[1] && computerSelection == RPS[0]) {
        playerWin = true;
    } else if (playerSelection == RPS[1] && computerSelection == RPS[2]) {
        playerWin = false;
    } else if (playerSelection == RPS[2] && computerSelection == RPS[0]) {
        playerWin = false;
    } else if (playerSelection == RPS[2] && computerSelection == RPS[1]) {
        playerWin = true;
    } else if (playerSelection == computerSelection) {
        playerWin = false;
    }
    return playerWin;
}

function getScore() {
    let thisTurn = false;
    playerSelection = playerPlay;
    computerSelection = computerPlay;
    thisTurn = gameLoop(playerSelection, computerSelection);
    if(thisTurn == false) {
        computerScore += 1;
    } else if(thisTurn == true) {
        playerScore += 1;
    }
}

function game() {
    const letsPlay = prompt("Press enter to play Rock, Paper, Scissor");
    while(playerScore + computerScore != 5) {
        const player = playerPlay();
        const computer = computerPlay();
        gameLoop(playerPlay(), computerPlay()); //this should work
        getScore();
    }
}

game();