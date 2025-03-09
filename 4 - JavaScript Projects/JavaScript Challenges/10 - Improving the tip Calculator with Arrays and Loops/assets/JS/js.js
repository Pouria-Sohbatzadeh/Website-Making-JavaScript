// Create an Array called bill, That contains all 10 test bill balues
// Create empty Arrays for the total and tips. ("total", "tips")
// Create a function called calcTip to calculate the tips and total values for EVERY bill value in the
// bills Array, Use a loop to perform the calculations, The function gives you a 15 percent tip IF the bill is 
// between 50 and 300 (Or 50 and 300), And gives you a 20 percent tip if it's not those values.

// 1 Test Data: 22, 295, 176, 440, 37, 105, 10, 110, 86, 52

function calTip(bill){

    var tip;

    if(50 <= bill && bill <= 300){
        return tip = bill / 100 * 15
    }
    else {
        return tip = bill / 100 * 20
    }
}

var total = []
var tips = []
const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52]

for(var i = 0; i <= bills.length - 1; i++){
    tips[i] = calTip(bills[i])

    total[i] = bills[i] + calTip(bills[i])
}

console.log(tips)

console.log(total)

// Optional: Create a function that calculates the average of every value in the Array.

const numbers = [4, 44, 53, 35]

function average(arr){
    // var sum;
    // You created an undefined variable, Which can't have Mathematic Operators applied to it, You 
    // should instead write:
    var sum = 0
    // So the math equation happens
    
    for(var i = 0; i <= arr.length - 1; i++){
        sum += arr[i]
    }

    const average = sum / numbers.length

    return average
}

console.log(average(numbers))