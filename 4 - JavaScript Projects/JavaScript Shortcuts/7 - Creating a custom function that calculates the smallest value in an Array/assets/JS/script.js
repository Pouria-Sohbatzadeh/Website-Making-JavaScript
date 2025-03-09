// The Function
function min(arr){
    let smallest_number = arr[0]

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] < smallest_number){
            smallest_number = arr[i]
        }
    }

    return smallest_number;
}

// Example
console.log(min([1, 2, 3]));