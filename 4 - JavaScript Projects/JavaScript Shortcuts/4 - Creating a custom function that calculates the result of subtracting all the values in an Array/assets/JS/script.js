// The Function
function subtract(arr){
    let subtract = 0;

    for(let i= 0; i <= arr.length - 1; i++){
        subtract-= arr[i]
    }

    return subtract;
}

// Example
console.log(subtract([2, 3, 4]));