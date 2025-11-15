function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const index = Math.floor(Math.random() * choices.length)
    console.log(choices[index]);
    return choices[index];
}
const playerMe = "Rock";
const playerThem = getComputerChoice();

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
else if (playerMe === "Scissors" && playerThem === "Scissors") {
    console.log("You Lose");
}
/*PlayerMe is "Scissors" and PlayerThem is "Rock")*/
else if (playerMe === "Scissors" && playerThem === "Rock") {
    console.log("You Lose");
}
