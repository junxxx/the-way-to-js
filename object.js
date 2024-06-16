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