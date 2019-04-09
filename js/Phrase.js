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
         li.className = 'hide letter ${phrase[i]}';
       } else {
         li.className = 'space';
       }
       phraseList.appendChild(li);
     }
   };

   //<li class="hide letter ${phrase[i]}"></li>

  }
