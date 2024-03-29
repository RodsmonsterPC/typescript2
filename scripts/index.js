"use strict";
//Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
//Tuple
let person = [1, "brad", true];
//Tuple Array
let employee;
employee = [
    [1, "brad"],
    [2, "jhon"],
    [3, "jill"],
];
//Union
let pid;
pid = 22;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Sarah",
};
// const user: {
//     id:number,
//     name: string
// } ={
//     id: 1,
//     name: "Jhon"
// }
//Type Assertion
let cid = 1;
// let costumerId = <number>cid
let costumerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "jhon"
};
const add = (x, y) => x + y;
const sub = (x, y) => x + y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
console.log();
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");
console.log(brad.register());
console.log(brad, mike);
//Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Rodolfo", "Developer");
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Rodolfo", "Mario", "Paula"]);
