function computerPlay() {
  const play = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * play.length);
  return play[random];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
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

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let playerSelection, computerSelection, result;

//   for (var i = 0; i < 5; i++){
//   playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors': ");
//   playerSelection = playerSelection.toLowerCase()[0];
//   computerSelection = computerPlay();

//   result = playRound(playerSelection, computerSelection);

//   if (result.includes('win')) {
//     playerScore++;
//   } else if (result.includes('lose')) {
//     computerScore++;
//   }

//   console.log(`
//       ${result}\nPlayer: ${playerScore}\nComputer: ${computerScore}
//   `);
//   }
// }

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let round;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id.toLowerCase()[0];
    computerSelection = computerPlay();

    round = playRound(playerSelection, computerSelection);

    if (round.includes('win')) {
      playerScore++;
    } else if (round.includes('lose')) {
      computerScore++;
    }

    result.textContent = `${round}\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
  });
});
