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

// arrow function are always anonymous
// shorter functions and non-binding of `this` 
// introduction of arrow function
const print = a => console.log(a)

print("Hello world")

const add = (x, y) => x+y

print(add(3,4))

const divide = (m, n) => {
    if (n == 0) {
        print("n can't be zero")
        return
    }
    return m/n
}

print(divide(3, 4), divide(4, 0))
