/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('#btn__reset');

//Add click event listener to start button
startButton.addEventListener('click', () => {
  //Instantiate a new Game object
  game = new Game;
  //Call startGame() method on new Game object
  game.startGame();
});
