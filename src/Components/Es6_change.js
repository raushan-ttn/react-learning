import React from "react";

//  Function and default parameter.
//  E6 provide default parameter value for function.


function isEquals(number, compare){
    return number == compare;

}

console.log(isEquals(10,10)); // Output = true


function isEqualsTo(number, compare = 0){
    return number == compare;

}

console.log(isEqualsTo(10)); // Output = false
console.log(isEqualsTo(10, 10)); // Output = true

// Note we can pass default parameter in function.

//===========================Arrow function and THIS========================

function fn(){
    console.log(this); // output window object.
}
fn();

var fn2 = () => console.log(this);

fn2();  //output window object.

//************************************** */
// no more issue of this keyword in arrow function.
const myFunc = (myName) => {
 console.log(myName);
}
myFunc("Raushan"); // Output Raushan

// Note for one parameter (not for more and not for less) we do not need to use parenthesis
const myFunc1 = myName => {
   console.log(myName);
}
  myFunc1("Raushan"); // Output Raushan

const myFunc2 = () => {
   console.log("Raushan");
}
  myFunc2(); // Output Raushan

// shotcut of one parameter
const myFunc3 = numbers => numbers * 2;
console.log(myFunc3(2)) // output 4


//=======================Object literals short hand =========================
//(1)
 let obj = {
    name: 'mas',
    age: 21
};
console.log(obj); // print object
//************************************** */
//(2)
 let name = "rai";
 let age = 23;

 let obj2 = {
    name,
    age
 };

 console.log(obj2); // same output like obj.

 // Note: if we define variable name above of object declaration then object will automatically pick that value from above,
 // we can also ovrride inside object but incase we not override it will find matching variable name and render.
 //************************************** */
 let obj3 = {
    name: "rohan",
    age
 };

 console.log(obj3); // output here name will show rohan but age will still 23.
//************************************** */
 let obj4 = {
    name: "rohan",
    age,
    greet() {
        console.log(this.name + this.age);
    }
 };

 obj4.greet ; // output is name = rohan and age still 23.

//************************************** */
 let obj5 = {
    "name": "rohan",
    age,
    "greet me"() {
        console.log(this.name + this.age);
    }
 };

 obj5["greet me"](); // output is name = rohan and age still 23.

//************************************** */
let ageField = "age";

 let obj6 = {
    "name": "rohan",
    [ageField]: 28,
    "greet me"() {
        console.log(this.name + this.age);
    }
 };

 console.log(obj6); // Output name = rohan, age = 28 and so on.... // We can pass dynamic variable.
 console.log(obj6["age"]); // Output age = 28
 console.log(obj6[ageField]); // Output age = 28

//======================= Rest Operator =========================
// Normal code Example #1
let numbers = [1,2,3,4,5];

function sumUp(toAdd){
    let result = 0;
 for(let i =0; i< toAdd.length; i++){
    result += toAdd[i];
 }
 return result;
}

console.log(sumUp(numbers)); // Output = 15.
//************************************** */
// Rest Operator Example #2
function sumUp1(...toAdd){
    console.log(toAdd);   // output [100,200,10]
    let result = 0;
 for(let i =0; i< toAdd.length; i++){
    result += toAdd[i];
 }
 return result;
}

console.log(sumUp1(100, 200, 10)); // Output = 310.

// Note: Rest operator allows Dynamic parameter of function.

//************************************** */
// Rest Operator Example #2
function sumUp2(...toAdd){
    console.log(toAdd);   // output [100,200,"10"]
    let result = 0;
 for(let i =0; i< toAdd.length; i++){
    result += toAdd[i];
 }
 return result;
}

console.log(sumUp2(100, 200, "10")); // Output = "30010".

// forEach loop.
const sumNumbers = (...args) => {
   let result = 0;
   args.forEach((number) => {
       result += number
   })
   return result;
}
console.log(sumNumbers(1,2,3,4,5,6,7));

//=====================Spread ... operator ============================

// Note Spread (...) operator is opposite of Rest operator using same way but diffrent use case.

let numbers1 = [1,2,3,4,5];

console.log(Math.max(...numbers1)); // Output 5

// Rest is use in own function with list of function and argument aspects. Spread Operation is use in code for
// basically split array in list of values.

// ============================Template  ` literals ` OR (``) backtick Operators ==========================

let name1 = "max";

let description = `Hello
  like this write multi line
  syntax and output will be same.like
  pre tag in php
`;

console.log(description); // Output same as string in code.

// Note: In the help of template literals OR backtick operator we can same write multiline string and output
// will be same as write in code.

// Use variable inside backtick operator

let description1 = `
 Hello I'm ${name1}
`

console.log(description1) // Output Hello I'm max


let description2 = `
 Hello I'm ${name1 + ' !!!'}
`;

console.log(description2) // Output Output Hello I'm max !!!

//=================Destructing arrays[ ] with default parameters =============

let numbers2 = [1,2,"3"];
let [a,b , c, d] = numbers2;

console.log(a); // Output 1
console.log(b); // Output 2
console.log(c); // Output "3"
console.log(d); // Output undefined
console.log(numbers2); // output [1,2,"3"]

// note : original array will not delete in case of destucturing.

let [p, ...q] = numbers2;

console.log(p) // Output 1
console.log(q) // Output [2,"3"]
// Note q variable holds rest of all values from array due to Rest Operators

let numbers3 = [1,2,"3", 4];

let [l = 'shayam',m,n,o, p1 = "ram"] = numbers3;

console.log(l); // Output 1
console.log(m); // Output 2
console.log(n); // Output "3"
console.log(o); // Output 4
console.log(p1); // Output ram

// Note: if array index value available then show array values if not then show default (ram)  value.

let a1 = 5;
let b1 = 10;

[b1, a1] = [a1, b1];

console.log(b1); // output 5
console.log(a1); // output 10

// Note the value has been swaped.

let numbers5 = [1,2,"3"];

let [p3,,p2] = numbers5;

console.log(p3) // output 1
console.log(p2) // output "3"

///// =================== Destructing {Objects} with alias =============================

// Note : It works same as array.

let obj1 = {
   name2: "max",
   age2: 28,
   great: function(){
      console.log("Hello there");
   }
};

// let {name2, age2} = obj1;
// let {name2, , age2} = obj1; // output error we cannot skip value like that.
//let {name2, great} = obj1;
//great(); // output Hello there , It will work , We can skip that value in that way.

let {name2, great: hello} = obj1;

hello(); // it will work
great() ; // it will not work showing error , This is because greet name is inside Obj1 but hello name outside
// of obj1 so that case hello will work greet will not work.

console.log(name2); // output max
console.log(age2);  // output 28





