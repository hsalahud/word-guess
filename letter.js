//This is the Letter Constructor

function Letter (letter) {
    this.correctLetter = letter
    this.displayLetter = '_'
    this.correctGuess = false
    this.guess = _ => {
        if (this.correctGuess){
            this.displayLetter = this.correctLetter
            return this.displayLetter   
        }else {
            return this.displayLetter
        }
    }
    this.checkGuess = (guessLetter) => {
        if (guessLetter === this.correctLetter){
            this.correctGuess =true
            this.guess()
        }

    }
    //Added an additional function to handle spaces presented as a letter which indicates a two word phrase.
    //In this case, a space is always shown and it is defaulted to correctGuess = true indicating it is correctly guessed.
    //This is done because if all correctGuess values are true, then we have guessed the word correctly.
    this.checkSpace = _ => {
        if (this.correctLetter === ' '){
            this.correctGuess = true
            this.guess()
        }
    }


}

module.exports = Letter
