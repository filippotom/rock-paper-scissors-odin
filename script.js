let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);

    return computerChoice[random];
};



const result = document.getElementById("result");
const human_score = document.getElementById("human");
const computer_score = document.getElementById("computer");


function playRound(human, computer) {
    if(human == computer) {
        result.style.color = "black";
        result.style.display = "block";
        result.innerHTML = `It's a tie! ${human} ties with ${computer}`;

        human_score.style.display = "block";
        human_score.innerHTML = `Human: ${humanScore}`;

        computer_score.style.display = "block";
        computer_score.innerHTML = `Computer: ${computerScore}`;
        
    } else if(human == "rock" && computer == "paper" || human == "paper" && computer == "scissors" || human == "scissors" && computer == "rock") {
        result.style.display = "block";
        result.style.color = "red";
        result.innerHTML = `You lose! ${computer} beats ${human}`;
        
        human_score.style.display = "block";
        human_score.innerHTML = `Human: ${humanScore}`;
        
        computer_score.style.display = "block";
        computerScore++;
        computer_score.innerHTML = `Computer: ${computerScore}`;

    } else if(human == "rock" && computer == "scissors" || human == "paper" && computer == "rock" || human == "scissors" && computer == "paper") {
        result.style.display = "block";
        result.style.color = "green";
        result.innerHTML = `You won! ${human} beats ${computer}`;
        
        human_score.style.display = "block";
        humanScore++;
        human_score.innerHTML = `Human: ${humanScore}`;

        computer_score.style.display = "block";
        computer_score.innerHTML = `Computer: ${computerScore}`;
    }
};



function endGame() {
    if(humanScore == 5) {
        winner.style.display = "block";
        winner.innerHTML = `The human player won. Game ends!`;
    } else if(computerScore == 5) {
        winner.style.display = "block";
        winner.innerHTML = `The computer player won. Game ends!`;
    }   
};



// const rounds = Number(document.getElementById("rounds").value);
// console.log(rounds)
const rock_button = document.getElementById("rock-button");
const paper_button = document.getElementById("paper-button");
const scissors_button = document.getElementById("scissors-button");


rock_button.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    endGame();
});

paper_button.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    endGame();
});

scissors_button.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    endGame();
});