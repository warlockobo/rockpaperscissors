
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const options = document.querySelector("#options");
    const rock = document.getElementById("rock");
    rock.addEventListener("click", ()=> { playRound("r") });
    const paper = document.getElementById("paper");
    paper.addEventListener("click", ()=> { playRound("p") });
    const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", ()=> { playRound("s") });

    const playAgain = document.createElement("button")
    playAgain.setAttribute("id", "playAgain");
    playAgain.textContent = "Play Again?";
    playAgain.addEventListener("click", ()=> {window.location.reload()});


    function playRound(humanChoice){
        function getComputerChoice(){
            const choices = ["r", "p", "s"];
            const index = Math.floor(Math.random() * 3);
            return choices[index];
        }
        const computerChoice = getComputerChoice();
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

        if (humanScore === 5) {
            results.textContent = "Congratulations, you got to 5 points first! You win the game!";
            options.removeChild(rock);
            options.removeChild(paper);
            options.removeChild(scissors);
            options.appendChild(playAgain);
            return;
        }

        if (computerScore === 5){
            results.textContent = "The computer got to 5 points first. You lose the game!"
            options.removeChild(rock);
            options.removeChild(paper);
            options.removeChild(scissors);
            options.appendChild(playAgain);
            return;
        }
    }
}
playGame();