const Letter = require('./letter.js')

function Word (word) {
    this.word = []
    //this.wordDisplay = []
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

// const testWord = new Word ('why did you do this')

// testWord.populateWord()
// console.log(testWord.displayWord())
// testWord.guessWord('d')
// console.log(testWord.displayWord())

module.exports = Word