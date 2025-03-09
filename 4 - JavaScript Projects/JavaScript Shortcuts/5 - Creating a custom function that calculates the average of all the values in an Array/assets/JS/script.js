// The Function
function average(arr){
    let sum = 0;

    for(let i= 0; i <= arr.length - 1; i++){
        sum+= arr[i]
    }

    const average = sum / arr.length

    return average;
}

// Example
console.log(average([1,2]));