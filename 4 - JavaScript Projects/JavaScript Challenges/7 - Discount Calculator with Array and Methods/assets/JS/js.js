var tip

function tipCalc(value){
    if(50 < value && value < 300) {
        tip = (value * 15) / 100
    }
    else if (50 > value || value > 300){
        tip = (value * 20) / 100

    }

    return tip;
}

console.log(tipCalc(400))

console.log(`The Tip for the purchase is ${tipCalc(100)}`)

const bill = [125, 555, 44]
console.log(bill)

const tips = [tipCalc(bill[0]), tipCalc(bill[1]), tipCalc(bill[bill.length - 1])]
console.log(tips)

const total = [bill, tips]
console.log(total)