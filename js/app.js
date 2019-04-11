/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

//Add click event listener to start button
startButton.addEventListener('click', () => {
  //Instantiate a new Game object
  game = new Game;
  //Call startGame() method on new Game object
  game.startGame();
});

//Add click event listener to each letter
keyboard.addEventListener('click', (event) => {
  if (event.target.className === 'key') {
    game.handleInteraction(event.target);
  }
});
