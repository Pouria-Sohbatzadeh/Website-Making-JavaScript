const numbers = [1, 2, 3, 4, 5];

function average(arr) {
  var sum = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(average(numbers)); // The average of all the values in the numbers Array
