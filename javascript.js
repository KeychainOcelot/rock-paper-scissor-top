const RPS = ["Rock", "Paper", "Scissor"];

function computerPlay() {
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
