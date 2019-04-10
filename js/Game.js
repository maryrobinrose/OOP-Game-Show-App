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

 }
