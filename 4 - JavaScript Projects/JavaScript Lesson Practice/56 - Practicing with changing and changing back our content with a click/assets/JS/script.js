`use strict`

// Button
const button = document.querySelector(`.button`)

// All texts
const texts = document.querySelector(`.texts`)

// Changing the color of the texts upon the button being clicked and then back to normal
button.addEventListener(`click`, function(){

    getComputedStyle(texts).color !== `rgb(255, 0, 0)` ? texts.style.color = `rgb(255, 0, 0)` : texts.style.color = `rgb(0, 0, 0)`

})