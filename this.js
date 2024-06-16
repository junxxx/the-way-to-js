console.log(this)
// node js: {}
// brower: global window object

function foo() {
    console.log(this)
}

foo()

const obj = {
    method: function() {
        console.log(this)
    }
}

obj.method()

// arrow function doesn't have their own this binding. They inherit `this` from the surrounding lexical context

const myObj = {
    test: function() {
        const arrowFunc = () => {
            console.log(this)
        }

        arrowFunc()
    }
}

myObj.test()