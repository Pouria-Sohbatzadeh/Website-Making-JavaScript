`use strict`

// The button for the menu
const button = document.querySelector(`.header__menuLabel`)

// The menu
const menu = document.querySelector(`.header__menu`)

// The overlay
const overlay = document.querySelector(`.overlay`)

// Making the overlay and menu appear when the user clicks on the button
button.addEventListener(`click`, function(){
    
    // Making the overlay appear and disappear
    getComputedStyle(overlay).display === `none` ? overlay.style.display = `flex` : overlay.style.display = `none`

    // Making the menu appear and disappear
    getComputedStyle(menu).display === `none` ? menu.style.display = `flex` : menu.style.display = `none`

})

// Making the overlay and the menu disappear when the user clicks on overlay
overlay.addEventListener(`click`, function(){

    if(getComputedStyle(overlay).display !== `none`){
        
        // Disappearing the overlay
        overlay.style.display = `none`

        // Disappearing the menu
        menu.style.display = `none`
        
    }

})

// Making the overlay and menu disappear if the user clicks on Escape when the over is present
document.addEventListener(`keydown`, function(k){

    if(getComputedStyle(overlay).display !== `none` && k.key === `Escape`){
        
        // Disappearing the overlay
        overlay.style.display = `none`

        // Disappearing the menu
        menu.style.display = `none`
        
    }

})