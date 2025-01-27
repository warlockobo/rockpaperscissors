function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}
const computerchoice = getComputerChoice();
console.log(computerchoice)

function getHumanChoice(){
    const humanChoice = prompt("Choose rock, paper, or scissors.");

    return humanChoice.toLowerCase();
}

const humanChoice = getHumanChoice();
console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;