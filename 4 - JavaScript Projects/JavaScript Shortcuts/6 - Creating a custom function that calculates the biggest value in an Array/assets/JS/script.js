// The Function
function max(arr){
    let biggest_number = arr[0]

    for(let i = 0; i <= arr.length - 1; i++){
        if(biggest_number < arr[i]){
            biggest_number = arr[i]
        }
    }

    return biggest_number;
}

console.log(max([3, 4, 10]));