`use strict`

// The buttons
const buttons = document.querySelectorAll(`.buttons`)

// The div
const div = document.querySelector(`.div--border`)

console.log(getComputedStyle(div).border);

// We use for(){} to go over every selected tag and turn them into a button
for(let i = 0; i < buttons.length; i++){

    // Now when we click on ANY of the buttons, They change the border color
    buttons[i].addEventListener(`click`, function(){

        div.style.border = `1px solid  rgb(0, 45, 141)`

    })

}