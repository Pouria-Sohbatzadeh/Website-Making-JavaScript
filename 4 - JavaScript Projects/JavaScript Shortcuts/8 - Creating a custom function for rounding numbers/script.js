document.querySelector(`body`).style.backgroundColor = `red`

// The Function
function rounder(decimal){
    if(decimal - Math.trunc(decimal) < Math.trunc(decimal + 1) - decimal){
        return Math.trunc(decimal);
    } 
    else {
        return Math.abs(Math.trunc(decimal + 1));
    }
}

// Example
console.log(rounder(7.3));
