let humanScore = 0;
let computerScore = 0;
let rounds = Number(prompt("How many rounds do you want to play?"));

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);

    return computerChoice[random];
};



function getHumanChoice() {
    const arrayHumanChoice = [];
    const humanChoice = prompt("Choose 'Rock, Paper, Scissors'");
    arrayHumanChoice.push(humanChoice.toLowerCase());

    return arrayHumanChoice[arrayHumanChoice.length - 1]; 
};



function playRound(human, computer) {
    if(human == computer) {
        console.log(`It is a tie! ${human} ties with ${computer}`);
        console.log("Human = " + humanScore);
        console.log("Computer = " + computerScore);
        console.log("");
        
    } else if(human == "rock" && computer == "paper" || human == "paper" && computer == "scissors" || human == "scissors" && computer == "rock") {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}`);
        console.log("Human = " + humanScore);
        console.log("Computer = " + computerScore);
        console.log("");

    } else if(human == "rock" && computer == "scissors" || human == "paper" && computer == "rock" || human == "scissors" && computer == "paper") {
        humanScore++;
        console.log(`You win! ${human} beats ${computer}`);
        console.log("Human = " + humanScore);
        console.log("Computer = " + computerScore);
        console.log("");

    } else {
        console.log("Impossible to play, you haven't selected either rock, paper, scissors.");
        console.log("");
    }


};

function playGame(round) {
    if(typeof round == "number") {
        for(let i = 0; i < round; i++) {
            let computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
    } else {
        console.log("Impossible to play, the number of rounds are not numbers");
    }
};



let humanSelection = getHumanChoice();
playGame(rounds);

console.log("N° rounds: " + rounds);
let tiesNumber = rounds - humanScore - computerScore;
console.log("Ties: " + tiesNumber);