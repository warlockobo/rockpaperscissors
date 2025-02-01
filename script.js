
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    document.getElementById("rock").addEventListener("click", ()=> { playRound("r") });
    document.getElementById("paper").addEventListener("click", ()=> { playRound("p") });
    document.getElementById("scissors").addEventListener("click", ()=> { playRound("s") });

    function playRound(humanChoice){
        function getComputerChoice(){
            const choices = ["r", "p", "s"];
            const index = Math.floor(Math.random() * 3);
            return choices[index];
        }
        const computerChoice = getComputerChoice();

        if (computerChoice === humanChoice) {
            console.log("You both chose the same thing. It's a tie!");
        }
        else if (humanChoice === "r" && computerChoice === "p") {
            console.log("You chose rock and the computer chose paper. You lose!")
            computerScore++;
        }
        else if (humanChoice === "p" && computerChoice === "r" ) {
            console.log("You chose paper and the computer chose rock. You win!")
            humanScore++;
        }
        else if (humanChoice === "p" && computerChoice === "s") {
            console.log("You chose paper and the computer chose scissors. You lose!")
            computerScore++;
        }
        else if (humanChoice === "r" && computerChoice === "s") {
            console.log("You chose rock and the computer chose scissors. You win!")
            humanScore++;
        }
        else if (humanChoice === "s" && computerChoice === "p") {
            console.log("You chose scissors and the computer chose paper. You win!")
            humanScore++;
        }    
        else if (humanChoice === "s" && computerChoice === "r") {
            console.log("You chose scissors and the computer chose rock. You lose!")
            computerScore++;
        }
    }

}
playGame();