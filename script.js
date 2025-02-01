
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
        const container = document.getElementById("container");
        const results = document.getElementById("results")
        const score = document.getElementById("score");



        if (computerChoice === humanChoice) {
            results.textContent = "You both chose the same thing. It's a tie!";
            score.textContent = "User score: " + humanScore + " Computer Score: " + computerScore;
        }
        else if (humanChoice === "r" && computerChoice === "p") {
            results.textContent = "You chose rock and the computer chose paper. You lose!";
            computerScore++;
            score.textContent = "User score: " + humanScore + " Computer Score: " + computerScore;
        }
        else if (humanChoice === "p" && computerChoice === "r" ) {
            results.textContent = "You chose paper and the computer chose rock. You win!"
            humanScore++;
            score.textContent = "User score: " + humanScore + " Computer Score: " + computerScore;
        }
        else if (humanChoice === "p" && computerChoice === "s") {
            results.textContent = "You chose paper and the computer chose scissors. You lose!"
            computerScore++;
            score.textContent = "User score: " + humanScore + " Computer Score: " + computerScore;
        }
        else if (humanChoice === "r" && computerChoice === "s") {
            results.textContent = "You chose rock and the computer chose scissors. You win!"
            score.textContent = "User score: " + humanScore + " Computer Score: " + computerScore;
            humanScore++;
            score.textContent = "User score: " + humanScore + " Computer Score: " + computerScore;

        }
        else if (humanChoice === "s" && computerChoice === "p") {
            results.textContent = "You chose scissors and the computer chose paper. You win!"
            humanScore++;
            score.textContent = "User score: " + humanScore + " Computer Score: " + computerScore;

        }    
        else if (humanChoice === "s" && computerChoice === "r") {
            results.textContent = "You chose scissors and the computer chose rock. You lose!"
            computerScore++;
            score.textContent = "User score: " + humanScore + " Computer Score: " + computerScore;

        }
    }
}
playGame();