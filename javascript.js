const RPS = ["rock", "paper", "scissor"]; //might delete this. not really used anywhere

let playerScore = 0;
let computerScore = 0;

function playerPlay() {
    //get player input
    let playerSelection = 0;
    let choice = prompt("Please enter '0' for rock, '1' for paper, or '2' for scissor");
    for (let i = 0; i < 3; i++) {
        if (choice == RPS[i]) {
            playerSelection = i;
            break;
        }
    }
    return playerSelection;
}

function computerPlay() {
    //randomiser to make computer pick from RPS array
    let computerSelection = 0;
    computerSelection = Math.floor(Math.random() * (3 + 1));
    return computerSelection;
}

function gameLoop(playerSelection, computerSelection) {
    let playerWin = false;
    let playerScore = 0;
    let computerScore = 0;
    if (playerSelection == computerSelection) {
        playerWin = false;
    } else if (playerSelection == 0 && computerSelection == 1) {
        playerWin = false;
    } else if (playerSelection == 0 && computerSelection == 2) {
        playerWin = true;
    } else if (playerSelection == 1 && computerSelection == 0) {
        playerWin = true;
    } else if (playerSelection == 1 && computerSelection == 2) {
        playerWin = false;
    } else if (playerSelection == 2 && computerSelection == 0) {
        playerWin = false;
    } else if (playerSelection == 2 && computerSelection == 1) {
        playerWin = true;
    }

    if (playerWin == true) {
        playerScore += 1;
        window.alert("You win!");
        window.alert(`Your points: ${playerScore}
Computer's points: ${computerScore}`);
    }
    else {
        computerScore += 1;
        window.alert("You lose!");
        window.alert(`Your points: ${playerScore}
Computer's points: ${computerScore}`);
    }
    return playerWin;
}

function game() {
    const letsPlay = prompt("Press enter to play Rock, Paper, Scissor");
    const player = playerPlay();
    const computer = computerPlay();
    gameLoop(playerPlay(), computerPlay()); //this should work
    getScore();
}

game();
