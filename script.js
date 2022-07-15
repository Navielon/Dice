'use strict';
// Элементы игры
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
// Изначальные условия игры
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

//  Текущие очки
const totalScores = [0, 0]; // Для двух игроков
let currentScore = 0;
let activePlayer = 0;

// Переменная процесса игры
let isPlaying = true;

// Функция переключения активного игрока
const switchActivePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};
// Бросок кубика
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // Генерация случайного числа
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    // Вывод числа на кость
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;
    // Если выпала единица, переход к следующему игроку
    if (diceNumber !== 1) {
      currentScore += diceNumber; // currentScore = currentScore + diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
   if (isPlaying) {
  // Добавить очки к текущим очкам активного игрока
  totalScores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScores[activePlayer];

  // Если очки активного игрока >= 100 то игрок выиграл, если нет, переходит к другому игроку
  if (totalScores[activePlayer] >= 10) {
    isPlaying = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
   diceElement.classList.add('hidden');
   } else {
    switchActivePlayer();
  }
}
});
