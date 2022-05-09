function computerPlay() {
    const play = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * play.length); 
    return play[random];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "r": // Rock
            switch (computerSelection) {
                case "rock":
                    return "Tie!";
                case "paper":
                    return "Paper beats rock! You lose!";
                case "scissors":
                    return "Rock beats scissors! You win!";
            }
        case "p": // Paper
            switch (computerSelection) {
                case "rock":
                    return "Paper beats rock! You win!";
                case "paper":
                    return "Tie!";
                case "scissors":
                    return "Scissors beats paper! You lose!";
            }
        case "s": // Scissors
            switch (computerSelection) {
                case "rock":
                    return "Rock beats scissors! You lose!";
                case "paper":
                    return "Scissors beats paper! You win!";
                case "scissors":
                    return "Tie!";
            }
    }
}
