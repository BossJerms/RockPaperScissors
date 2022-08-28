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
        userprompt = window.prompt("Please type only either Rock, Paper, or Scissors");
        userprompt = userprompt.charAt(0).toUpperCase() + userprompt.toLowerCase().slice(1);
    }
    return userprompt
}

/* function that plays a round of rock paper scissors using computer and player inputs */
function playRound(playerSelection, computerSelection){
    console.log("Player Choice: " + playerSelection);
    console.log("Computer Choice: " + computerSelection);
    if (playerSelection == computerSelection){
        return "It\'s a tie for this Round! You both chose "+ playerSelection;
    }else if ((playerSelection == "Rock" && computerSelection == "Scissors")
    || (playerSelection == "Paper" && computerSelection == "Rock")
    || (playerSelection == "Scissors" && computerSelection == "Paper")){
        return "You Win this Round! " + playerSelection + " beats " + computerSelection;
    }else {
        return "You Lose this Round! " + computerSelection + " beats " + playerSelection;
    }
}

/* function that calls on playRound function to play 5 rounds and report the results */
function game(){
    console.log("Starting game.. Good luck!")
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = playerInput();
        let computerSelection = computerInput();
        console.log("Round " + parseInt(i + 1));
        roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("Win") == true){
            playerScore++;
        }else if (roundResult.includes("Lose") == true){
            computerScore++;
        }
        console.log("Current Score (Player - Computer)");
        console.log(playerScore + " - " + computerScore);    
    }
    console.log(" ");
    if (playerScore > computerScore){
        console.log("You win this game! Congratulations!");
    }
    else if (playerScore < computerScore){
        console.log("You lose this game! Better luck next time!");
    }
    else {
        console.log("It\'s a tie for this game! No one wins!");
    }
    console.log("Want to play again?, click the button to start another game");
}

/* When button is pressed, game is started */
const startGame = document.getElementById("startGame");
startGame.addEventListener("click", game);