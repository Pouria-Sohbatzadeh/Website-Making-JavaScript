'use strict';

// What you have to do is :
// 1 - Make it so that the tag with the .number class name has a random value between 1 and 20 (But keep the number hidden)[Done]
// 2 - Make it so that IF the guess that the user puts into the form is wrong, Then:
// 2.1 - They lose a score, And if the score reaches 0, They lose, With the massage of you lose, Replacing "Start guessing...", "Too high" or "Too low"[Done]
// 2.2 - The "Start guessing..." changes to either "too high" or "too low" to clarify whether the now was big or small[Done]
// 3 - If their guess is right, Then:
// 3.1 - 1 is added to their high score[Done]
// 3.2 - the background of the webpage transforms to green.[Done]
// 3.3 - The randomly generated number, Takes the place of the question mark[Done]
// 4 - Make it so that by clicking the "Again!" button:
// 4.1 - The random number is changed
// 4.2 - The background color of the website goes back to normal.

// Our Number
var guess_number = Math.trunc(Math.random() * 20 + 1)

// Revealing the genrated number (for testing)
document.querySelector(`.number`).textContent = guess_number

// Recognizing the number that the user put in the form
document.querySelector(`.check`).addEventListener(`click`, function(){

    // The starting high score
    var high_score = Number(document.querySelector(`.highscore`).textContent)

    // The starting score general
    var score = Number(document.querySelector(`.score`).textContent)

    // Storing The number that the user put into the form
    var user_number = Number(document.querySelector(`.guess`).value)

    // If the user guessed the right number
    if (user_number === guess_number){

        // Revealing the genrated number
        document.querySelector(`.number`).textContent = guess_number

        // Changing the text "Start guessing..." when the user guesses the right number
        document.querySelector(`.message`).textContent = `Correct Number!`

        // Changing the background color of the body
        document.querySelector(`body`).style.backgroundColor = `#60b347`

        // If the high_score is smaller than the score
        if(high_score < score){
            high_score = score
            document.querySelector(`.highscore`).textContent = high_score
        }        
    }
    // If the user didn't put any numbers in
    else if(Boolean(user_number) === false && user_number !== 0){

        document.querySelector(`.message`).textContent = `You didn't enter a Number`

    }
    // If the user put 0 0r Negative Numbers in
    else if(user_number <= 0){
        document.querySelector(`.message`).textContent = `The guessing game is between 1 and 20`
        
        // Reducing the score (If the number is smaller)
        score--
        
        // Showing the reduced score (In both scenarios)
        document.querySelector(`.score`).textContent = score
    }
    // If the user guessed the wrong number from 1 to 20
    else if (user_number !== guess_number && user_number >= 1){        

        // If the number that the user guessed is smaller than the actual number, And the score isn't 0 yet
        if(user_number < guess_number && 0 < score){
            // Changing the text "Start guessing..." when the user's guess is smaller than the right number
            document.querySelector(`.message`).textContent = `Too low!`
        }
        // If the number that the user guessed is bigger than the actual number, And the score isn't 0 yet
        else if(user_number > guess_number && 0 < score){
            // Changing the text "Start guessing..." when the user's guess is smaller than the right number
            document.querySelector(`.message`).textContent = `Too high!`
        }

        // Reducing the score, When the user guesses wrong
        score--

        // Showing the reduced score (In both scenarios)
        document.querySelector(`.score`).textContent = score

        // If the score reaches 0
        if(score === 0){
            // Announcing the loss of the Player
            document.querySelector(`.message`).textContent = `You lost`
        }

    }
})

// Resetting the game back to normal
document.querySelector(`.again`).addEventListener(`click`, function(){

    // Resetting the number that the user has to guess
    guess_number = Math.trunc(Math.random() * 20 + 1)

    // Setting the background color of the website back to normal  
    document.querySelector(`body`).style.backgroundColor = `#222`

    // Hiding the genrated number
    document.querySelector(`.number`).textContent = `?`

    // Resetting the massage to the user
    document.querySelector(`.message`).textContent = `Start guessing...`

    // Resetting the number that the user put into the form
    document.querySelector(`.guess`).value = ``

})