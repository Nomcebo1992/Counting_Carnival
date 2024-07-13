let currentNumber = 1;

const numberDisplay = document.getElementById('numberDisplay');
const countUpButton = document.getElementById('countUp');
const countDownButton = document.getElementById('countDown');
const clickSound = new Audio('sounds/click.mp3');

countUpButton.addEventListener('click', () => {
  if (currentNumber < 100) {
    currentNumber++;
    numberDisplay.textContent = currentNumber;
    clickSound.play();
  }
});

countDownButton.addEventListener('click', () => {
  if (currentNumber > 1) {
    currentNumber--;
    numberDisplay.textContent = currentNumber;
    clickSound.play();
  }
});

function generateAdditionProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
}

const additionProblem = document.getElementById('additionProblem');
const userAnswer = document.getElementById('userAnswer');
const checkAnswerButton = document.getElementById('checkAnswer');
const resultDisplay = document.getElementById('result');

let currentProblem = generateAdditionProblem();
additionProblem.textContent = `${currentProblem.num1} + ${currentProblem.num2} = ?`;

checkAnswerButton.addEventListener('click', () => {
  clickSound.play();
  const userResponse = parseInt(userAnswer.value, 10);
  if (userResponse === currentProblem.answer) {
    resultDisplay.textContent = "Correct!";
    resultDisplay.style.color = "green";
  } else {
    resultDisplay.textContent = "Try again!";
    resultDisplay.style.color = "red";
  }
  currentProblem = generateAdditionProblem();
  additionProblem.textContent = `${currentProblem.num1} + ${currentProblem.num2} = ?`;
  userAnswer.value = '';
});

