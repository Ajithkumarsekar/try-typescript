"use strict";
let id = 10;
let a = 39; //also automatically infers type (like in golang)
let company = "weave";
let x = "Hello";
x = 23;
let ids = [1, 2, 3, 4];
// ids.push("Hello"); // will throw error
ids.push(10);
console.log("ids : " + ids);
// Tuple
let person = [1, "Ajith", true];
// Tuple array
let empolyee;
empolyee = [
    [1, "Ajith"],
    [2, "sekar"],
];
// union
let pid;
pid = "22";
pid = 23;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["West"] = 2] = "West";
    Direction[Direction["South"] = 3] = "South";
})(Direction || (Direction = {}));
// will print number
console.log("Direction north : " + Direction.North);
const user = {
    id: 1,
    name: "Ajith",
};
//Type Assertion
let cid = 1;
let customerId = cid;
//or
let customerId1 = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log("Sum of nums : " + addNum(3, 5));
function logMe(message) {
    console.log("log " + message);
}
console.log(logMe(false));
const user1 = {
    id: 1,
    name: "Ajith",
    age: 27,
};
const p1 = 1.1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log("sub : " + sub(10, 5));
// Classes
class Person {
    constructor(id, name) {
        console.log("Executing " + name + " Person constructor");
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const ajith = new Person(1, "ajith");
ajith.id = 10;
// ajith.name = 'ajith kumar' // will through error
console.log(ajith.register());
class Employee {
    constructor(id, name, present) {
        this.id = id;
        this.name = name;
        this.present = present;
    }
    standup() {
        if (!this.present) {
            throw new Error("employee is absent");
        }
        return "I worked on x yesterday and will look into y today";
    }
}
class Employee1 extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee1(1, "kumar", "SDE");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 4]);
let strArray = getArray(["ajith", "kumar"]);
numArray.push("illegally entering number array!"); // so this approach doesn't work
function genericGetArray(items) {
    return new Array().concat(items);
}
let gNumArray = genericGetArray([1, 2, 4]);
// gNumArray.push("a string") // will throw error
