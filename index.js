function computerPlay() {
  const play = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * play.length);
  return play[random];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()[0]) {
    case 'r': // Rock
      switch (computerSelection) {
        case 'rock':
          return 'Tie!';
        case 'paper':
          return 'Paper beats rock! You lose!';
        case 'scissors':
          return 'Rock beats scissors! You win!';
      }
    case 'p': // Paper
      switch (computerSelection) {
        case 'rock':
          return 'Paper beats rock! You win!';
        case 'paper':
          return 'Tie!';
        case 'scissors':
          return 'Scissors beats paper! You lose!';
      }
    case 's': // Scissors
      switch (computerSelection) {
        case 'rock':
          return 'Rock beats scissors! You lose!';
        case 'paper':
          return 'Scissors beats paper! You win!';
        case 'scissors':
          return 'Tie!';
      }
  }
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let round;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = computerPlay();

    round = playRound(playerSelection, computerSelection);

    if (round.includes('win')) {
      playerScore++;
    } else if (round.includes('lose')) {
      computerScore++;
    }

    if (playerScore >= 5) {
      result.innerText = `${round}\n You beat the computer!`;
    } else if (computerScore >= 5) {
      result.innerText = `${round}\n The computer beat you!`;
    } else {
      result.innerText = `${round}\n Player: ${playerScore} Computer: ${computerScore}`;
    }
  });
});
