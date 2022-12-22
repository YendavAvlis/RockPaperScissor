let playerScore = 0;
let computerScore = 0;

const rockSelection = document.querySelector('#rock')
const paperSelection = document.querySelector('#paper')
const scissorSelection = document.querySelector('#scissor')


const test = rockSelection.addEventListener('click', () => {
    console.log('I am Rock')
})

console.log(test)



scissorSelection.addEventListener('click', () => {
    console.log('I am Scissor')
})

function getComputerChoice(computerChoice) {
  const randomValue = Math.floor(Math.random() * 3 + 1);

    if (randomValue === 1) {
    computerChoice = "rock";
    } else if (randomValue === 2) {
    computerChoice = "paper";
    } else if (randomValue === 3){
    computerChoice = "scissor";
    }

    return computerChoice;
}


function playRound(computerSelection) {
  // your code here!
    
  const test = paperSelection.addEventListener('click', () => {
    if(computerSelection === "paper"){
        computerScore ++;
        console.log("You Lose! Paper beats Rock") 
}})
 console.log(test)
}

playRound()
// function Game(){
    
    
//     for (let i = 0; i < 5; i++) {
//     // your code here!
//     const playerSelection = prompt("Choose Rock, Paper or Scissor");
//     const computerSelection = getComputerChoice();
    
//     console.log(playRound(playerSelection, computerSelection))
    
//     }
//     console.log(`The final score is:
//     Player - ${parseInt(playerScore)}
//     Computer - ${parseInt(computerScore)}`)

//     if(playerScore > computerScore){
//         console.log("YOU WIN THE GAME!!! :D")
//     } else if(playerScore < computerScore){
//         console.log("YOU LOSE THE GAME!!! :(")
//     } else {
//         console.log("IT IS A TIE... :|")
//     }

// }

