// The Function
function sum(arr){
    let sum = 0;

    for(let i= 0; i < arr.length; i++){
        sum+= arr[i]
    }

    return sum;
}

// Example
console.log(sum([2, 3, 4]));