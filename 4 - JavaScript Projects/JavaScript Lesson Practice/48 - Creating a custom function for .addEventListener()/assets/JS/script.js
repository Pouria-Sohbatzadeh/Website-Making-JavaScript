// In order to create a custom function for .addEventListener() you must do 2 things:
// 1 - DON'T set a parameter for the custom function
// 2 - DON'T glue a brace|()|to the right of the custom function when you're putting it in the brace|()|of .addEventListener()

// The <body> tag
const body = document.querySelector(`body`)

// The button tag
const button = document.querySelector(`.textButton--color`)

// Creating the function
function turnBg_red(){
    body.style.backgroundColor = `red`
}

// Making it so that clicking the button changes the background color of body
button.addEventListener(`click`, turnBg_red)