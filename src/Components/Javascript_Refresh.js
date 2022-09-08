import React from "react";

// Classes , properties and methods ES6 way

class Human {
    constructor() {
        this.gender = "Male"
    }

    printMyGender() {
        console.log(this.gender);
    }
}


class Person extends Human {
    constructor() {
        super(); // If we inherit any class then super key must be use to access parent variable.
        this.name = "max";
        this.gender = "female"; // we can override parent class variable and method in child class.
    }

    printMyname() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname(); // output max
person.printMyGender(); // output female

//======================================= ES7 classes methos ====================================/

//Note: ES7 provide more morder syntax to use properites and method inside class.


class Human1 {

    gender = "Male"

    printMyGender = () => {
        console.log(this.gender);
    }

}

class Person1 extends Human1 {

    name = "max";

    printMyname = () => {
        console.log(this.name);
    }

}

const person1 = new Person1();
person1.printMyname();
person1.printMyGender();

//===================== Spread operator and Rest Operator ===================

// Note: Spread Operator: Used to split up array elements OR object properties
 const newArray = [...oldArray, 1,3];
 const newObj = {...oldObj,newProp:"hello"};

// Note: Rest Operator: Used to merge a list of function arguments into an array.

function sortArgs(...args){
    return args.sort();
}