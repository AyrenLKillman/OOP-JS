
//TODO Exercise 1
console.group("Excercise 1");
function GlobalFunction() {
    let GlobalValue = 3;
    console.log(GlobalValue + " Global");
}
const objectFunction = {
    InternalFunction: function () {
        let ObjectValue = 2;
        console.log(ObjectValue + " Object");
    }
};
const arrowFunction = () => {
    let ArrowValue = 1;
    console.log(ArrowValue + " Arrow");
};
GlobalFunction();
objectFunction.InternalFunction();
arrowFunction();
console.groupEnd();

//TODO Exercise 2-5
console.group("Excercise 2-5");

class person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new Error('Name must be a string');
        }
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Age must be a non-negative number');
        }
        this._age = value;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
    static info() {
        return "This is a person class";
    }

}


let person1 = new person("bob", 26)

console.log(person1.greet());

console.log(person.info());

console.log(person1.constructor.info());

console.groupEnd()



