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
     //Select the phrases ul
     const phraseList = document.querySelector('#phrase ul');
     for (let i = 0; i < phrase.length; i += 1) {
       let li = document.createElement('li');
       //If the the li isn't a space
       if (phrase[i] !== ' ') {
         li.className = `hide letter ${phrase[i]}`;
         li.textContent = phrase[i];
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
   checkLetter(letter) {
     //Loop through letters in the phrase
     for (let i = 0; i < this.phrase.length; i += 1) {
     //If selected letter matches letter in the phrase
     if (this.phrase[i] === letter) {
         return true;
       }
     }
      return false;
   };

   /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
   showMatchedLetter(letter) {
     //Select letters in phrase
      let matchedLetters = document.querySelectorAll('ul li');
      //Loop over letters
      for (let i = 0; i < matchedLetters.length; i += 1) {
        //If a letter in the list matches a selected letter
        if (matchedLetters[i].textContent === letter) {
          //Show letter
          matchedLetters[i].classList.remove('hide');
          matchedLetters[i].classList.add('show');
        }
      }
   };



  }
