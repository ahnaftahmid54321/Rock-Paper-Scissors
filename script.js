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
else if (/*PlayerMe is "Rock" and PlayerThem is "Scissors"*/
    playerMe = "Rock" && playerThem = "Scissors"
    console.log("You Win!!"));

else if (/*PlayerMe is "Scissors" and PlayerThem is "Rock")*/
    playerMe = "Scissors" && playerThem = "Rock"
    console.log("You Lose"));

else if (/*PlayerMe is "Paper" and PlayerThem is "Scissors")*/
    playerMe = "Paper" && playerThem = "Scissors"
    console.log("You Lose"));

else if (/*PlayerMe is "Rock" and PlayerThem is "Scissors")*/
    playerMe = "Scissors" && playerThem = "Scissors"
    console.log("You Lose"));

