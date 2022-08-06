//a complete do-over of the rock paper scissor Odin Project assignment


//TO-DO: Show player immediate result

let playerWin = false;
let playerScore = 0;
let computerScore = 0;

const intro = function() {
    window.alert(`Welcome to Rock, paper, scissor!
        Click okay to start!`);

}
//prompts players for a choice
const playerTurn = function() {
    //this part is going into infinite loop and player is null
    let player = prompt("Rock, paper or scissor?");
    //code for player turn input
    if(player === 'rock') {
        return playerChoice = 0;
    } else if(player === 'paper') {
        return playerChoice = 1;
    } else if(player === 'scissor') {
        return playerChoice = 2;
    }
}

//returns 0, 1 or 2 randomly
const computerTurn = function() {
    let computerChoice;
    computerChoice = Math.floor(Math.random() * 3); 
    return computerChoice;
}

//this has to be done better somehow
const turn = function(playerChoice, computerChoice){
    const playerSelection = playerChoice;
    const computerSelection = computerChoice;
    if (playerSelection === computerSelection) {
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
}
const gameLoop = function() {
    while(playerScore !== 5 && computerScore !== 5) {
        const playerWin = turn(playerTurn(), computerTurn());
        score(playerWin);
    }
    getWinner();
}

const score = (playerWin) => {
    if(playerWin === true) {
        playerScore++;
    } else {
        computerScore++;
    }
}

const getWinner = function() {
    if(playerScore === 5) {
        window.alert(`You win!`);
    } else {
        window.alert(`You lose.`);
    }
}


const game = function() {
    intro();
    gameLoop();
}

game();
