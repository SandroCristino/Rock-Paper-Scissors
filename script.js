function getComputerChoice () {
    let result;
    let random = Math.floor(Math.random()*10);
    if (random >= 0 && random <= 3) {
        result = "Rock";
    } else if (random >= 4 && random <= 6) {
        result = "Paper";
    } else {
        result = "Scissors";
    }
    return result;
}

