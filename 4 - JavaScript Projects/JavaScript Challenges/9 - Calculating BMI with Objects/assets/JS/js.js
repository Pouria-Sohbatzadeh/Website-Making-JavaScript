const mark = {
    name: `Mark Miller`,
    weight: 78,
    height: 1.69,

    calcBmi: function (){
        this.bmi = this.weight / this.height ** 2
        return this.bmi;
    } 
}
// Proccessing Mark's bmi Key/Value pair
mark.calcBmi()


const john = {
    name: `John Miller`,
    weight: 92,
    height: 1.95,

    calcBmi: function (){
        this.bmi = this.weight / this.height ** 2
        return this.bmi;
    } 
}
// Proccessing John's bmi Key/Value pair
john.calcBmi()

// Condition 1
if(mark.bmi > john.bmi){
    console.log(`The BMI of Mark (${mark.bmi}) is Greater than John's BMI (${john.bmi})`)
}
// Condition 2
else if(john.bmi > mark.bmi){
    console.log(`The BMI of John (${john.bmi}) is Greater than Mark's BMI (${mark.bmi})`)
}
// Last Condition 
else {
    console.log(`The BMI of Both Mark and John is equal`)
}