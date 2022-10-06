function getComputerChoice () {
    let result;
    let random = Math.floor(Math.random()*10);
    if (random >= 0 && random <= 3) {
        result = "rock";
    } else if (random >= 4 && random <= 6) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
}

function play(playerSelection) {
    let result;
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection.toLowerCase();

    switch (computerChoice) {
        case 'rock':
            if (playerChoice == "paper") {
                result = 'win';
            } else if (playerChoice == 'rock') {
                result = 'draw';
            } else if (playerChoice == 'scissors') {
                result = 'lose';
            }
            break;
        case 'paper':
            if (playerChoice == "paper") {
                result = 'draw';
            } else if (playerChoice == 'rock') {
                result = 'lose';
            } else if (playerChoice == 'scissors') {
                result = 'win';
            }
            break;
        case 'scissors':
            if (playerChoice == "paper") {
                result = 'lose';
            } else if (playerChoice == 'rock') {
                result = 'win';
            } else if (playerChoice == 'scissors') {
                result = 'draw';
            }
            break;
        default:
            result = "undefined";
    }
    return result;
}

