/* function that chooses randomly between Rock, Paper, and Scissors to simulate the computer */
function computerInput(){
    const pool = ["Rock", "Paper", "Scissors"];
    return pool[Math.floor(Math.random()*pool.length)];
}

/* function that asks for player input, rejecting and asking for another input if it is not Rock, Paper, or Scissors */
function playerInput(){
    var userprompt = window.prompt("What do you choose? Rock, Paper, or Scissors?");
    userprompt = userprompt.charAt(0).toUpperCase() + userprompt.toLowerCase().slice(1);
    while (userprompt != "Rock" && userprompt != "Paper" && userprompt != "Scissors"){
        userprompt = window.prompt("Please choose only either Rock, Paper, or Scissors");
        userprompt = userprompt.charAt(0).toUpperCase() + userprompt.toLowerCase().slice(1);
    }
    return userprompt
}

/* function that plays a round of rock paper scissors using computer and player inputs */
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It\'s a tie! You both chose "+ playerSelection;
    }else if ((playerSelection == "Rock" && computerSelection == "Scissors")
    || (playerSelection == "Paper" && computerSelection == "Rock")
    || (playerSelection == "Scissors" && computerSelection == "Paper")){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

/* function that calls on playRound function to play 5 rounds and report the results */
function game(){
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = playerInput();
        let computerSelection = "Rock";
        /*let computerSelection = computerInput();*/
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("Win") == true){
            playerScore++;
        }else if (roundResult.includes("Lose") == true){
            computerScore++;
        }
        console.log("Score: " + playerScore + "-" + computerScore);    
    }

}

game()



