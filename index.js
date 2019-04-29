const Word = require('./word.js')
const Letter = require('./letter.js')
const inquirer = require('inquirer')

let character
let randomNumber
let wordToGuess

//variables blocking repetition of letters and ensuring repetition does not affect number of chances
let preventRepetition
let chances = 5

//mLetters detects repeated letter in word
let mLetters

//Variables accounting for letters used
let alreadyUsed = []

wordBank = [
    'Eric Cartman'.toUpperCase(),
    'Kenny McCormick'.toUpperCase(),
    'Stan Marsh'.toUpperCase(),
    'Kyle Broflovski'.toUpperCase(),
    'Chef'.toUpperCase(),
    'Towelie'.toUpperCase(),
    'Officer Barbrady'.toUpperCase(),
    'Ike'.toUpperCase(),
    'Wendy'.toUpperCase(),
    'Butters'.toUpperCase(),
    'Randy'.toUpperCase()

]

//This function randomly selects a character to guess.
const genCharacter = () => {

    randomNumber = Math.floor(Math.random() * wordBank.length)

    //selecting a character
    character = wordBank[randomNumber]
    console.log(character)

    wordToGuess = new Word(character)

    wordToGuess.populateWord()
    console.log(wordToGuess.displayWord())
}

const reset = () => {
    wrongList = []
    chances = 5
    alreadyUsed = []
    totalCorrect = 0
    genCharacter()
    playGame()
}


const playGame = () => {
    //Begin by generating a random character

    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Guess a letter!'
        }
    ])

        .then(({ guess }) => {

            //Looking at whether the key pressed is in the array of letters that are already pressed. If not, continue
            if (alreadyUsed.indexOf(guess.toUpperCase()) === -1) {
                //add the letter I just pressed to the array of already used letters
                alreadyUsed.push(guess.toUpperCase())

                if (chances > 0) {

                    wordToGuess.guessWord(guess.toUpperCase())
                    console.log(wordToGuess.displayWord())

                    if (!character.includes(guess.toUpperCase())) {
                        chances -= 1
                        console.log(chances > 0 ? `Sorry, guess again. You have ${chances} tries left` : 'Sorry, guess again. This is your last try.')
                        playGame()
                    } else {

                        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#Using_arrow_functions
                        if (!wordToGuess.word.every(letter => letter.correctGuess===true)){
                            console.log("Correct! Let's keep going.")
                            playGame()
                        }else{
                            console.log('Awesome, you solved it! Time for another one.')
                            reset()
                        }
                    }
                } else {
                    console.log('GAME OVER...you ran out of tries.')
                }
            } else {
                //If you click on a letter you already used, you get this message
                console.log("Letter Already Used")
                playGame()
            }

        })
        .catch(e => console.log(e))
}

genCharacter()
playGame()