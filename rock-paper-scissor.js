const rockBtn = document.querySelector('.rockbtn');
const paperBtn = document.querySelector('.paperbtn');
const scissorBtn = document.querySelector('.scissorbtn');
const playerOne = document.querySelector('.playerone');
const playerTwo = document.querySelector('.playertwo');
const playerOneImg = document.querySelector('.content-one img');
const playerTwoImg = document.querySelector('.content-two img');
let scoreOne = 0;
let scoreTwo = 0;

function randomChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function displayChoices(playerOneChoice, playerTwoChoice, scoreOne, scoreTwo) {
  playerOne.textContent = `You: ${scoreOne}`;
  playerTwo.textContent = `Player 2: ${scoreTwo}`;
  playerOneImg.setAttribute('src', `${playerOneChoice}.jpg`);
  playerTwoImg.setAttribute('src', `${playerTwoChoice}.jpg`);
}

function determineWinner(playerOneChoice, playerTwoChoice) {
  if (playerOneChoice === playerTwoChoice) {
    return 0;
  } else if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissor') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'scissor' && playerTwoChoice === 'paper')
  ) {
    scoreOne++;
    return 1;
  } else {
    scoreTwo++;
    return 2;
  }
}

function playGame(playerOneChoice) {
  const playerTwoChoice = randomChoice();
  const winner = determineWinner(playerOneChoice, playerTwoChoice);
  displayChoices(playerOneChoice, playerTwoChoice, scoreOne, scoreTwo);
  if (winner === 0) {
    alert('Tie');
  } else if (winner === 1) {
    alert('You win!');
  } else {
    alert('Player 2 wins!');
  }
}

rockBtn.addEventListener('click', function () {
  playGame('rock');
});

paperBtn.addEventListener('click', function () {
  playGame('paper');
});

scissorBtn.addEventListener('click', function () {
  playGame('scissor');
});
