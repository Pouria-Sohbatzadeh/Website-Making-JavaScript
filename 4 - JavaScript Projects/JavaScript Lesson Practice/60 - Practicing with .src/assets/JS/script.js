`use strict`

// The img tag
const img = document.querySelector(`.img`)

// The initial value of the .src
console.log(img.src);


// Changing, And changing back, the image the tag shows when the user clicks on the tag
img.addEventListener(`click`, function(){

    // ensuring the condition is correct
    console.log(img.src === `http://127.0.0.1:5500/assets/img/Anfang.png`);

    // If the selected image is the initial one
    if(img.src === `http://127.0.0.1:5500/assets/img/Anfang.png`){
        img.src = `assets/img/hajime_no_ippoStyle.jpeg`
    }
    // If the select image is the changed one
    else {
        img.src = `assets/img/Anfang.png`
    }

    // Refactored looks like this:
    // img.src === `http://127.0.0.1:5500/assets/img/Anfang.png` ? img.src = `assets/img/hajime_no_ippoStyle.jpeg` : img.src = `assets/img/Anfang.png`;

})