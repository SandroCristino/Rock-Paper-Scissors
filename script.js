
let start = document.querySelector('#start');

let playerSelection;
let comScore = 0;
let playerScore = 0;
let scoreCounter = 0;

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

function updateBar() {
  switch (scoreCounter) {
    case 0:
      comBar.style.width = '50%';
      playerBar.style.width = '50%';
    case 1:
      comBar.style.width = '40%';
      playerBar.style.width = '60%';
    case 2:
      comBar.style.width = '25%';
      playerBar.style.width = '75%';
    case 3:
      comBar.style.width = '0%';
      playerBar.style.width = '100%';
    case -1:
      comBar.style.width = '60%';
      playerBar.style.width = '40%';c
    case -2:
      comBar.style.width = '75%';
      playerBar.style.width = '25%';
    case -3: 
      comBar.style.width = '100%';
      playerBar.style.width = '0%';
  }
}

function endResult() {
  if (scoreCounter == -4) {
    defeated.style.display = 'flex';
    defeated.style.animation = 'slideIn 2s';
  } else {
    winner.style.display = 'flex';
    winner.style.animation = 'slideInR  2s';
  }
}

start.addEventListener('click',() => {
    start.style.display = 'none';
    container.style.display = 'flex';
  })







