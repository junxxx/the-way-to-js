// function declaration
// it's just a statement
function incr(number) {
    return ++number
}

console.log(incr(1))

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