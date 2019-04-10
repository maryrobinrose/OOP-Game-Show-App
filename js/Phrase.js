/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   /**
   * Display phrase on game board
   */
   addPhraseToDisplay() {
     const phrase = this.phrase;
     const phraseList = document.querySelector('#phrase ul');
     for (let i = 0; i < phrase.length; i += 1) {
       let li = document.createElement('li');
       if (phrase[i] !== '') {
         li.className = `hide letter ${phrase[i]}`;
       } else {
         li.className = 'space';
       }
       phraseList.appendChild(li);
     }
   };

   /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
   //Checks to see if the letter selected by the player matches a letter in the phrase.
   checkLetter(letter) {
     if () {

     }
   };

   /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
   //Reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's `hide` CSS class with the `show` CSS class.
   showMatchedLetter(letter) {

   };

  }
