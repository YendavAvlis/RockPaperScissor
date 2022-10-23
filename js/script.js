let playerScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
  const randomValue = Math.floor(Math.random() * 3 + 1);

    if (randomValue === 1) {
    computerChoice = "rock";
    } else if (randomValue === 2) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissor";
    }

    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
  // your code here!
    
    if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore ++;
        return "You Lose! Paper beats Rock"

    } else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore ++;
        return "You Win! Paper beats Rock"

    } else if(playerSelection === "scissor" && computerSelection === "rock"){
        computerScore ++;
        return "You Lose! Rock beats Scissor"

    } else if(playerSelection === "rock" && computerSelection === "scissor"){
        playerScore ++;
        return "You Win! Rock beats Scissor" 

    } else if(playerSelection === "paper" && computerSelection === "scissor"){
        computerScore ++;
        return "You Lose! Scissor beats Paper"

    } else if(playerSelection === "scissor" && computerSelection === "paper"){
        playerScore ++;
        return "You Win! Scissor beats Paper" 
    
    } else {
        return "It's a Tie!!!"
    }

}

function Game(){
    
    
    for (let i = 0; i < 5; i++) {
    // your code here!
    const playerSelection = prompt("Choose Rock, Paper or Scissor");
    const computerSelection = getComputerChoice();
    
    console.log(playRound(playerSelection, computerSelection))
    
    }
    console.log(`The final score is:
    Player - ${parseInt(playerScore)}
    Computer - ${parseInt(computerScore)}`)

    if(playerScore > computerScore){
        console.log("YOU WIN THE GAME!!! :D")
    } else if(playerScore < computerScore){
        console.log("YOU LOSE THE GAME!!! :(")
    } else {
        console.log("IT IS A TIE... :|")
    }

}

Game()

