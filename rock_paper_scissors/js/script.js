let playerScore=0;
let computerScore=0;

const rock=document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getComputerChoice() {
    const arr=["rock","paper","scissors"];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random]
}

function playRound(playerSelection,computerSelection){
    console.log(`player selcted: ${playerSelection}`);
    console.log(`computer selected: ${computerSelection}`);
    // updateScore()
    if(playerSelection==computerSelection) {
        document.getElementById('result').innerHTML = "tied"
        document.getElementById('result').style.color = "blue"
        // return("tied!")
    }
    else if(playerSelection=="rock"&&computerSelection=="paper")
    {
        computerScore++
        document.getElementById('result').innerHTML = "computer won this turn"
        document.getElementById('result').style.color = "blue"
        // return("computer won this turn")
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors")
    {
        playerScore++
        document.getElementById('result').innerHTML = "player won this turn"
        document.getElementById('result').style.color = "blue"
        // return("player won this turn")
    }
    else if(playerSelection=="paper"&&computerSelection=="rock") {
        playerScore++
        document.getElementById('result').innerHTML = "player won this turn"
        document.getElementById('result').style.color = "blue"
        // return("player won this turn")
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors") {
        computerScore++
        document.getElementById('result').innerHTML = "computer won this turn"
        document.getElementById('result').style.color = "blue"
        // return("computer won this turn")
    }
    else if(playerSelection=="scissors"&&computerSelection=="rock") {
        computerScore++
        document.getElementById('result').innerHTML = "computer won this turn"
        document.getElementById('result').style.color = "blue"
        // return("computer won this turn")
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper") {
        playerScore++
        document.getElementById('result').innerHTML = "player won this turn"
        document.getElementById('result').style.color = "blue"
        // return "player won this turn"
    }
    else {
        document.getElementById('result').innerHTML = "invalid";
        document.getElementById('result').style.color = "red"
        // return ("invalid")
    }
}
// function updateScore() {
//     playerScoreupd = playerScore;
//     computerScoreupd = computerScore
// }

function game(playerChoice) {
    // for(let i=0; i<5;i++) {
        const playerSelection = playerChoice;
        const computerSelection = getComputerChoice();
        // console.log(computerSelection)
        playRound(playerSelection, computerSelection)
        if (playerScore == 5) {
            document.getElementById('computer-play-result').innerHTML = "You Won this game";
            document.getElementById('computer-play-result').style.color = "green"
        } else if(computerScore == 5) {
            document.getElementById('computer-play-result').innerHTML = "computer won this game";
            document.getElementById('computer-play-result').style.color = "green"
        }
        console.log(`playerScore: ${playerScore}`);
        console.log(`computerScore: ${computerScore}`)
};
rock.addEventListener('click',() => {
    game("rock");
});
paper.addEventListener('click',() => {
    game("paper");
});
scissors.addEventListener('click',()=> {
    game("scissors");
});