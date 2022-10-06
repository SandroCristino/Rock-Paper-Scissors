
let playerSelection;
let comScore = 0;
let playerScore = 0;

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



function game() {
    let result;
    let check = 0;
    for (i=1;i<=5;i++) {
        while (check == 0) {
        playerSelection = prompt("Paper, Scissors or Rock");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == 'paper' || playerSelection == 'scissors' || playerSelection == 'rock') {
            check++;
        } else {
            alert('Word have nothing to do with Paper, Scissors or Rock. Please choose correct');
        }
        }

        result = play(playerSelection);
        if (result == 'lose') {
            comScore++;
            console.log('You lose');
        } else if (result == 'win') {
            playerScore++;
            console.log('You win');
        } else {
            console.log('Its a draw');
        }
        check--;
    }
    result = (comScore > playerScore) ? 
        'Computer WINS' : (comScore < playerScore) ?
        'Player WINS' : 'Its a DRAW';

    
    return result;
    
}

game();


