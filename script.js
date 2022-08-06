//a complete do-over of the rock paper scissor Odin Project assignment

let playerWinRound = false;
let playerScore = 0;
let computerScore = 0;

const intro = function() {
    window.alert(`Welcome to Rock, paper, scissor!
        Click okay to start!`);

}

//prompts player for a choice
const playerTurn = function() {
    let player = prompt("Rock, paper or scissor?");
    if(player === 'rock') {
        return playerChoice = 0;
    } else if(player === 'paper') {
        return playerChoice = 1;
    } else if(player === 'scissor') {
        return playerChoice = 2;
    }
}

//returns 0, 1 or 2 randomly for computer's input
const computerTurn = function() {
    let computerChoice;
    computerChoice = Math.floor(Math.random() * 3); 
    return computerChoice;
}

//this has to be done better somehow
//compares playerChoice and computerChoice
const turn = function(playerChoice, computerChoice){
    const playerSelection = playerChoice;
    const computerSelection = computerChoice;
    let playerWin = false;
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
    if(playerWin === true) {
        window.alert('You win!');
    } else if(playerWin === false) {
        window.alert('You lose!');
    }
    return playerWin;
}

//literally loops the game
const gameLoop = function() {
    while(playerScore !== 5 && computerScore !== 5) {
        playerWinRound = turn(playerTurn(), computerTurn());
        score(playerWinRound);
        window.alert(`Your score: ${playerScore}
Computer's score: ${computerScore}`);
    }
    getWinner();
}

//does maths for the score
const score = (playerWin) => {
    if(playerWin === true) {
        playerScore++;
    } else {
        computerScore++;
    }
}

//decides the winner
const getWinner = function() {
    if(playerScore === 5) {
        window.alert(`You won the best of 5!`);
    } else {
        window.alert(`You lost the best of 5!`);
    }
}

//the game function.
const game = function() {
    intro();
    gameLoop();
}

//this is how JS works I guess
game();
