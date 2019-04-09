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
    const phrases = [new Phrase('phrase one'),
                     new Phrase('phrase two'),
                     new Phrase('phrase three'),
                     new Phrase('phrase four'),
                     new Phrase('phrase five')];
    return phrases;
    };



 }
