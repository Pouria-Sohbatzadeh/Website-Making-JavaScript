const names = [`Pouria`, `Sajjad`, `Soozani`, {
    name: `Zihab`,
    job: `Teacher`
}]


// There are two ways to do this.

// 1st:
// 1.1 : You write the variable, Then glue a bracket|[]|to its right, Then you put the syntax address of the stored Map in the bracket|[]|
// 1.2 : Then you glue a dot|.|, alongside the Key that you've assigned to the value that you wanted to access, To the right of the bracket|[]|
console.log(names[3].name)

// 2nd:
// 2.1 : You write the variable, Then glue a bracket|[]|to its right, Then you put the syntax address of the stored Map in the bracket|[]|
// 2.2 : You glue a bracket|[]|to the right of the first bracket|[]|, Then you write the Key that you've assigned to the value that you want to 
// access, As a string inside the bracket|[]|
console.log(names[3][`job`])