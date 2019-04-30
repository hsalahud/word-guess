const Letter = require('./letter.js')


//Word constructor
function Word (word) {
    this.word = []
    this.populateWord = _ => {
        word.split('').forEach(letter => {
            this.word.push(new Letter (letter))
        })
      return this.word
    }
    this.displayWord = _ => {
        let wordDisplay = []
        this.word.forEach(wordObject => {
            wordObject.checkSpace()
            wordDisplay.push(wordObject.displayLetter)
        })
        return wordDisplay.join(' ')
    }
    this.guessWord = (guess) => {
        this.word.forEach(wordObject => {
            wordObject.checkGuess(guess)
        })

    }
    
  
}

module.exports = Word