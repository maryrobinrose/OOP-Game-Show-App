/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor () {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
  createPhrases() {
    const phrases = [new Phrase('Can I Steal You for a Second'),
                     new Phrase('She Isnt Here For the Right Reasons'),
                     new Phrase('Im Not Here to Make Friends'),
                     new Phrase('Will You Accept This Rose'),
                     new Phrase('I Have So Many Emotions')];
    return phrases;
    };

    /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * 5);
    return this.phrases[randomPhrase];
  };

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    //Hide initial overlay
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    //Select a Phrase object from the list of phrases
    this.activePhrase = this.getRandomPhrase();
    //Add phrase to the gameboard
    this.activePhrase.addPhraseToDisplay();
  };

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button) {
    //Disable the selected letter’s onscreen keyboard button
    button.setAttribute('disabled', 'disabled');
    //If the phrase does not include the guessed letter, remove life
    if (this.activePhrase.checkLetter(button.innerHTML) === false) {
      button.classList.add('wrong');
      this.removeLife();
      //If the phrase does include the gussed letter
    } else if (this.activePhrase.checkLetter(button.innerHTML) === true) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(button.innerHTML);
      if (this.checkForWin === true) {
        this.gameOver(true);
      }
    }
  };

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    //Select letters that are not matched
    const notMatched = document.getElementsByClassName('hide');
      //If there are no unmatched letters
      if (notMatched.length === 0) {
        return true;
      } else {
        return false;
      }
  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    //Select live hearts
    const lives = document.querySelector("img[src='images/liveHeart.png']");
    //Use missed property to add a lost heart
    this.missed += 1;
    lives.src = 'images/lostHeart.png';
    //If five tries are missed, game ends
    if (this.missed === 5) {
      this.gameOver();
    }
  };

  /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

//This method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay `h1` element with a friendly win or loss message, and replaces the overlay’s `start` CSS class with either the `win` or `lose` CSS class.
  gameOver(gameWon) {
    //Select overlay
    const overlay = document.querySelector('#overlay');
    //Select game over message
    const message = document.querySelector('#game-over-message');
    //If game is won
    if (gameWon) {
      overlay.style.display = '';
      message.textContent = 'You won!';
      overlay.className = 'win';
    } else {
      overlay.style.display = '';
      message.textContent = 'You lose!';
      overlay.className = 'lose'
;    }


  };

}
