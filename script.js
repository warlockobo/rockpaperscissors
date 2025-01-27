console.log("Hello World!");

function getComputerChoice(){
   const computerchoice = Math.floor(Math.random() * 3);

   return computerchoice;
}

computerchoice = getComputerChoice();
console.log(computerchoice);