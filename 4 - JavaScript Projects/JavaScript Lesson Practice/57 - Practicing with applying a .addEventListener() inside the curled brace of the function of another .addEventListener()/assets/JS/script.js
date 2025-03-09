`use strict`

const hello = document.querySelector(`.hello`)

const greeting = document.querySelector(`.greeting`)

hello.addEventListener(`click`, function(){

    hello.style.color = `rgb(220, 20, 60)`

    // Applying a .addEventListener() while inside te curled brace of the function of another .addEventListener() makes it so that you have to do the expected action of the 
    // parent .addEventListener() on its tag first, Before doing the expected action, And the subsequent running of code, Of .addEventListener() can be considered
    // In this instance, If you were to try and click on "greeting" first, Its color will not change
    greeting.addEventListener(`click`, function(){
        greeting.style.color = `rgb(210, 105, 30)`
    })

})