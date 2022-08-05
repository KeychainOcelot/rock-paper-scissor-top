//a complete do-over of the rock paper scissor Odin Project assignment

const intro = function() {
    window.alert(`Welcome to Rock, paper, scissor!
        Click okay to start!`);

}
//prompts players for a choice
const playerTurn = function() {
    let playerChoice;
    let player = prompt("Rock, paper or scissor?");
    player = player.toLowerCase;
    //code for player turn input
    if(player === 'rock') {
        playerChoice = 0;
    } else if(player === 'paper') {
        playerChoice = 1;
    } else if(player === 'scissor') {
        playerChoice = 2;
    } else {
        window.alert("That is not a valid choice. Try again");
        playerTurn();
    }
    return playerChoice;
}

//returns 0, 1 or 2 randomly
const computerTurn = function() {
    let computerChoice;
    computerChoice = Math.floor(Math.random() * 3); 
    return computerChoice;
}

const turn = function(playerChoice, computerChoice){
    
}

const gameLoop = function() {
    let playerScore = 0, computerScore = 0;
    
    //decide turn
    //player turn
    //computer turn
    //decide winner
    //keep going until playerScore || computerScore === 5
}

const getWinner = (playerScore = 0, computerScore = 0) => {
    if(playerScore === 5) {
        return true;
    } else {
        return false;
    }
}


const game = function() {
    intro();
}

game();
