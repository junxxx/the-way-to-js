// function declaration
// it's just a statement
console.log(incr(1))

function incr(number) {
    return ++number
}


// function expression anonymous
const square = function(num) {
    return num * num
}

console.log(square(3))

// function express with function name
const increment = function incre(i) {
    return i + 1
}

console.log(increment(0))