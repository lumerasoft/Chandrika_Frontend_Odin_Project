let playerScore=0;
let computerScore=0;
let playerScoreupd;
let computerScoreupd;
function getComputerChoice() {
    const arr=["rock","paper","scissors"];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random]
}

function playRound(playerSelection,computerSelection){
    updateScore()
    if(playerSelection==computerSelection) {
        return("tied!")
    }
    else if(playerSelection=="rock"&&computerSelection=="paper")
    {
        computerScore++
        return("computer won this turn")
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors")
    {
        playerScore++
        return("player won this turn")
    }
    else if(playerSelection=="paper"&&computerSelection=="rock") {
        playerScore++
        return("player won this turn")
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors") {
        computerScore++
        return("computer won this turn")
    }
    else if(playerSelection=="scissors"&&computerSelection=="rock") {
        computerScore++
        return("computer won this turn")
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper") {
        playerScore++
        return "player won this turn"
    }
    else {
        return ("invalid")
    }
}
function updateScore() {
    playerScoreupd = playerScore;
    computerScoreupd = computerScore
}

function game() {
    for(let i=0; i<5;i++) {
        const playerSelection = prompt("choose rock, paper, scissors");
        const computerSelection = getComputerChoice();
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        console.log(`playerScore: ${playerScore}`);
        console.log(`computerScore: ${computerScore}`)
    }
    if(playerScore>computerScore) {
        console.log(`player won with score ${playerScore}`)
    }
    else if(playerScore == computerScore){
        console.log(`no one won`)
    }
    else {
        console.log(`computer won with score ${computerScore}`)
    }
}
game()