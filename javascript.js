const RPS = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

function playerPlay() {
    //get player input
    let playerSelection = 0;
    return playerSelection;
}

function computerPlay() {
    //randomiser to make computer pick from RPS array
    let computerSelection = 0;

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
    const thisTurn = false;
    playerSelection = playerPlay;
    computerSelection = computerPlay;
    thisTurn = gameLoop(playerSelection, computerSelection);
    if(thisTurn == false) {
        computerScore += 1;
    } else if(thisTurn == true) {
        playerScore += 1;
    }
    return playerScore;
}

function game() {

}

