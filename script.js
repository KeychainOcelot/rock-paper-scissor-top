//a complete do-over of the rock paper scissor Odin Project assignment
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
let playerScore = 0;
let computerScore = 0;
const playerDisplay = document.querySelector("#player");
const compDisplay = document.querySelector("#computer");


//prints player's and computer's choice
const gameState = function() {
    playerDisplay.innerText = playerScore;
    compDisplay.innerText = computerScore;
}

//returns player choice depending on button pressed
//This works!
rock.addEventListener("click", () => {
    return playerChoice = 0;
});
paper.addEventListener("click", () => {
    return playerChoice = 1;
});
scissor.addEventListener("click", () => {
    return playerChoice = 2;
});

//returns 0, 1 or 2 randomly for computer's input
const computerTurn = function() {
    return Math.floor(Math.random() * 3); 
}

//this has to be done better somehow
//compares playerChoice and computerChoice
const turn = function(playerChoice, computerChoice){
    const playerSelection = playerChoice;
    const computerSelection = computerChoice;
    let playerWin = false;
    if (playerSelection === computerSelection) {
        //window.alert(`It's a tie!`);
        gameLoop();
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
    gameState();
    return playerWin;
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
    if(playerScore === 5 || computerScore === 5) {
        window.alert(`You won the best of 5!`);
    } else {
        window.alert(`You lost the best of 5!`);
    }
}


