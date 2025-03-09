// Write a code that listens for a click event on a <div> with an initial tag of <p>. When the div is
// clicked, apply a style change that changes the text color increases the font size of the <p> tag

// Storing the <div> tag
const div = document.querySelector(`.div`)

// Storing the <div> tag's <p> tag
const p = document.querySelector(`.div__p`)

// Setting up the button
div.addEventListener(`click`, function(){
    // Changing the font size of the <p> tag.
    p.style.fontSize = `20px`
    p.style.color = `red`
})