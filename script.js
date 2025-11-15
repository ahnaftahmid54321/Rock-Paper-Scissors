function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const index = Math.floor(Math.random() * choices.length)
    console.log(choices[index]);
    return choices[index];
} 
const playerMe = prompt("Type Rock, Paper or Scissors");
const playerThem = getComputerChoice();
console.log("Me:", playerMe, "Them:", playerThem);

function playRound() {
    const playerMe = prompt("Type Rock, Paper or Scissors");
    const playerThem = getComputerChoice();
    console.log("Me:", playerMe, "Them:", playerThem);
}
if (playerMe === playerThem) {
    console.log("It's a Tie");
}
/*PlayerMe is "Rock" and PlayerThem is "Scissors"*/
else if (playerMe === "Rock" && playerThem === "Scissors") { 
    console.log("You Win!!");
}
/*PlayerMe is "Scissors" and PlayerThem is "Rock")*/
else if (playerMe === "Scissors" && playerThem === "Rock") {
    console.log("You Lose");
}
/*PlayerMe is "Paper" and PlayerThem is "Scissors")*/
else if (playerMe === "Paper" && playerThem === "Scissors") {
    console.log("You Lose");
}
/*PlayerMe is "Rock" and PlayerThem is "Scissors")*/
else if (playerMe === "Paper" && playerThem === "Rock") {
    console.log("You Win!!");
}
/*PlayerMe is "Scissors" and PlayerThem is "Rock")*/
else if (playerMe === "Scissors" && playerThem === "Rock") {
    console.log("You Lose");
}
/*PlayerMe is "Scissors" and PlayerThem is "Paper")*/
else if (playerMe === "Scissors" && playerThem === "Paper") {
    console.log("You Win!!");
}
const again = prompt("Play again? (yes/no)");
if (again && again.toLowerCase() === "yes") {
playRound();
}
