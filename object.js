// object creation
const obj = {
    age: 28,
    1: "first property",
    "name": "obj name",
};

console.log(obj.age)
console.log(obj[1])
console.log(obj.name)

// create object with `new` keyword
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const honda = new Car("Honda", "TIL", 1990);
console.log(honda.model)

class Book {
    static classTimes = 0;

    constructor(name) {
        this.name = name
        Book.classTimes += 1
    }

    static getClassTimes() {
        return this.classTimes
    }

    // instance field
    times = 0;

    displayTimes = () => { console.log(this.times)}

    // setter

    set times(count) {
        this.times = count
    }

}

const js = new Book("JS")
console.log(Book.getClassTimes())
const php = new Book("PHP")
console.log(Book.getClassTimes())

console.log(js.name)
js.times = 10
js.displayTimes()
console.log(php.name)
php.displayTimes()
