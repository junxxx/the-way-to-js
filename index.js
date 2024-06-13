// var, let and const
// block-scope not function scope
// block-scope means code inside a {}

var varName = "varName"
let letName = "letName"
const constName = "constName"
const judge = varName

if (varName == judge) {
    console.log(varName)
    var varName = "change it inside if block"
}

function sayHi(name) {
    var varName = "change varName inside  a function"
    let letName = "change letName inside a function"

    // this will trigger a exception
    // constName = "change constName inside a function"

    console.log("Hi sayHi ", varName, letName, constName)
}

sayHi(varName)

console.log("Outside a function ", varName, letName, constName)