function Letter (letter) {
    this.correctLetter = letter
    this.displayLetter = '__'
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
    this.checkSpace = _ => {
        if (this.correctLetter === ' '){
            this.correctGuess = true
            this.guess()
        }
    }


}

// const testLetter = new Letter (' ')
// testLetter.checkSpace()
// console.log(testLetter.displayLetter)

// const testDisplay = (guess) => {
// testLetter.checkGuess(guess)
// console.log(testLetter.guess())
// }

// testDisplay(' ')
// console.log(testLetter)



module.exports = Letter
