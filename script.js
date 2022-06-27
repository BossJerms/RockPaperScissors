function computerPlay(){
    const pool = ["Rock", "Paper", "Scissors"];
    return pool[Math.floor(Math.random()*pool.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    if (playerSelection == computerSelection){
        return "It\'s a tie! You both chose "+ playerSelection
    }else if ((playerSelection == "Rock" && computerSelection == "Scissors")
    || (playerSelection == "Paper" && computerSelection == "Rock")
    || (playerSelection == "Scissors" && computerSelection == "Paper")){
        return "You Win! " + playerSelection + " beats " + computerSelection
    }else {
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
}


const playerSelection = "PaPeR"
const computerSelection = "Rock"


console.log(playRound(playerSelection, computerSelection))



/*let playerPoint = 0;
let computerPoint = 0;

for (let i = 0; i < 5; i++){

}

console.log(computerPlay())*/

/* 
Best out of 5
make sure to capitalize only first letter of input
input accepts only rock paper or scissors
*/

