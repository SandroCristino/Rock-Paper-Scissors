
let start = document.querySelector('#start');
let box = document.querySelector('#box');
let rockBtn = document.querySelector('.r');
const paperBtn = document.querySelector('.p');
const scissorsBtn = document.querySelector('.s');
let gameStatus = document.querySelector('#results');
let enemyBtn = document.querySelector('.enemy');

let computerChoice;
let playerSelection;
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
    rockBtn.style.animationPlayState = 'paused';
    paperBtn.style.animationPlayState = 'paused';
    scissorsBtn.style.animationPlayState = 'paused';

    let result;
    computerChoice = getComputerChoice();

    switch (computerChoice) {
        case 'rock':
          enemyBtn.textContent = '✊'
            if (playerSelection == "paper") {
                result = 'win';
                scoreCounter++;
                gameStatus.textContent = 'Point for you. Paper beats Rock!';
             } else if (playerSelection == 'rock') {
                result = 'draw';
                gameStatus.textContent = 'Ahhh a draw.';
            } else if (playerSelection == 'scissors') {
                result = 'lose';
                scoreCounter--;
                gameStatus.textContent = 'Daimn. Rock beats Scissors!';
            }
            break;
        case 'paper':
          enemyBtn.textContent = '✋'
            if (playerSelection == "paper") {
                result = 'draw';
                gameStatus.textContent = 'Unfortunaly a drawww.';
            } else if (playerSelection == 'rock') {
                result = 'lose';
                scoreCounter--;
                gameStatus.textContent = 'You lost. Paper beats Rock!';
            } else if (playerSelection == 'scissors') {
                result = 'win';
                scoreCounter++;
                gameStatus.textContent = 'Nice. Scissors beats Paper!';
            }
            break;
        case 'scissors':
          enemyBtn.textContent = '✌️'
            if (playerSelection == "paper") {
                result = 'lose';
                scoreCounter--;
                gameStatus.textContent = 'Noop. Scissors beats Paper!';
            } else if (playerSelection == 'rock') {
                result = 'win';
                scoreCounter++;
                gameStatus.textContent = 'Good Job. Rock beats Scissors!';
            } else if (playerSelection == 'scissors') {
                result = 'draw';
                gameStatus.textContent = 'How bad. A Draw.'
            }
            break;
        default:
            result = "undefined";
    }
    updateBar();
    endResult();
    setTimeout(wait, 1000);


function updateBar() {
  switch (scoreCounter) {
    case 0:
      comBar.style.width = '50%';
      playerBar.style.width = '50%';
      break;
    case 1:
      comBar.style.width = '40%';
      playerBar.style.width = '60%';
      break;
    case 2:
      comBar.style.width = '25%';
      playerBar.style.width = '75%';
      break;
    case 3:
      comBar.style.width = '0%';
      playerBar.style.width = '100%';
      break;
    case -1:
      comBar.style.width = '60%';
      playerBar.style.width = '40%';
      break;
    case -2:
      comBar.style.width = '75%';
      playerBar.style.width = '25%';
      break;
    case -3: 
      comBar.style.width = '100%';
      playerBar.style.width = '0%';
      break;
  }
}


function endResult() {
  if (scoreCounter == -3) {
    updateEndScene();
    gameStatus.textContent = 'YOU LOST';
    defeated.style.display = 'flex';
    defeated.style.animation = 'slideIn 2s';
  } else if (scoreCounter == 3) {
    updateEndScene();
    gameStatus.textContent = 'YOU WIN';
    winner.style.display = 'flex';
    winner.style.animation = 'slideInR  2s';
  }
}

function updateEndScene() {
  container.style.display = 'none';
  barContainer.style.display = 'none';
  start.textContent = 'Restart';
  start.style.display = 'block';
}

function wait() {    
rockBtn.style.animationPlayState = 'running';
paperBtn.style.animationPlayState = 'running';
scissorsBtn.style.animationPlayState = 'running';
enemyBtn.textContent = '';
}};


start.addEventListener('click',() => {
  winner.style.display = 'none';
  defeated.style.display = 'none';
  container.style.display = 'flex'
  barContainer.style.display = 'flex';
  start.style.display = 'none';
  scoreCounter = 0;
  gameStatus.textContent = '';
  comBar.style.width = '50%';
  playerBar.style.width = '50%';
  })

rockBtn.addEventListener('click', () => play('rock'));
paperBtn.addEventListener('click', () => play('paper'));
scissorsBtn.addEventListener('click', () => play('scissors'));








