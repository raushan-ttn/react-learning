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
const newArray = [...oldArray, 1, 3];
const newObj = { ...oldObj, newProp: "hello" };

// Note: Rest Operator: Used to merge a list of function arguments into an array.

function sortArgs(...args) {
    return args.sort();
}

//============================ Destructuring =====================================

// Note: eaisly extract array elements or object properties and store them in variables.

// Array destructring...

[a1, b1] = ["Hello", "max"];
console.log(a1) // Hello
console.log(b1) // max

// Note: Object also work as associative array in javascript.

// object destructuring...
let { name, gender } = { name: "Hello", age: 28, gender: "male" }
console.log(name, gender); // Hello , male
//Note: variable name exact same name of object keys, otherwise showing error.

//============== Reference and primitive type refresher ====================

const number11 = 1;
const number22 = number11;

console.log(number22);

// Note : string, itenger and boolean is types of primitvie types, whenever you assign value or assign
// variable in other variable it will copy the exact value in target variable.

const person12 = {
    name: "Max",
    age: 23
}

const person13 = person12; // copy reference point only.
console.log(person13); // it will print same value of person12, but not copy the value only copy the reference.

// Object and Arrays is reference types whenever we use it will not copy the value just copy the
// refernce.

// Example:

person12.name = "Raushan";
console.log(person13.name);// output raushan

// With the help of ... (speread) operator we can do real copy of object/array.

const person14 = {
    ...person12,  // copy actual value of object/array with spread operator.
}

person12.name = "Raysa";
console.log(person14.name); //output "Max"

///============================= Array Functions ============================/

// Import array functions :

1. splice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
The splice() method changes the contents of an array by removing or replacing existing elements and / or adding new elements in place.To access part of an array without modifying it, see slice().
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

2. slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end(end not included) where start and end represent the index of items in that array.The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

3. concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
The concat() method is used to merge two or more arrays.This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

4. reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
The reduce() method executes a user - supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation".If supplied, an initial value may be used in its place.Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element(index 1 instead of index 0).

Perhaps the easiest - to - understand case for reduce() is to return the sum of all the elements in an array:

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);
// expected output: 10

5. filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


6. findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

7. find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
8. map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]



//******************************************************************** */
// Important String function : https://www.edureka.co/blog/javascript-string-functions/
1.charAt(x) : This function will return the character at the x position within the string.

//charAt(x)
var myString = 'jQuery FTW!!!';
console.log(myString.charAt(7));
//output: F

2.charCodeAt(x):This function will return the unicode value of the character at position ???x??? within the string.

//charAt(position)
var message = "jquery4u"
//alerts "q"
alert(message.charAt(1)

3.concat(v1, v2..): This function combines one or more strings(argv1, v2 etc) into existing one.

//concat(v1, v2,..)
var message = "Sam"
var final = message.concat(" is a", " hopeless romantic.")
//alerts "Sam is a hopeless romantic."
alert(final)

4.fromCharcode(c1, c2): Function will return a string created by using specified sequence of unicode values(argc1, c2).

    //fromCharCode(c1, c2,...)
    console.log(String.fromCharCode(97, 98, 99, 120, 121, 122))
//output: abcxyz
console.log(String.fromCharCode(72, 69, 76, 76, 79))
//output: HELLO

5.indexOf(substr, [start]):Searches and(if found) returns the index number of the searched character or substring within the string.If not found, -1 is returned. ???Start??? is an optional argument specifying the position within string to begin the search.Default is 0.

//indexOf(char/substring)
var sentence = "Hi, my name is Sam!"
if (sentence.indexOf("Sam") != -1)
    alert("Sam is in there!")

6.lastIndexOf(substr, [start]): Searches and(if found) returns the index number of the searched character or substring within the string.Searches the string from end to the beginning.If not found, -1 is returned. ???Start??? is an optional argument specifying the position within string to begin the search.Default is string.length -

//lastIndexOf(substr, [start])
var myString = 'javascript rox';
console.log(myString.lastIndexOf('r'));
//output: 11

7.match(regexp): Executes a search for a match within a string based on a regular expression.It returns an array of information or null if no match is found.

//match(regexp) //select integers only
var intRegex = /[0-9 -()+]+$/;

var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(isInt);
//output: 999

var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(isInt);
//output: null

8.replace(regexp / substr, replacetext): Searches and replaces the regular expression(or sub string) portion(match) with the replaced text instead.
//replace(substr, replacetext)
var myString = '999 JavaScript Coders';
console.log(myString.replace(/JavaScript/i, "jQuery"));
//output: 999 jQuery Coders

//replace(regexp, replacetext)
var myString = '999 JavaScript Coders';
console.log(myString.replace(new RegExp("999", "gi"), "The"));
//output: The JavaScript Coders

9.search(regexp): Tests for a match in a string.It returns the index of the match, or - 1 if not found.
//search(regexp)
var intRegex = /[0-9 -()+]+$/;

var myNumber = '999';
var isInt = myNumber.search(intRegex);
console.log(isInt);
//output: 0

10.slice(start, [end]): This function returns a substring of the string based on the ???start??? and ???end??? index arguments, NOT including the ???end??? index itself. ???End??? is optional, and if none is specified, the slice includes all characters from ???start??? to end of the string.
//slice(start, end)
var text = "excellent"
text.slice(0, 4) //returns "exce"
text.slice(2, 4) //returns "ce"

11.split(delimiter, [limit]): This will split a string into many according to the specified delimiter, and returns an array containing each element.The optional ???limit??? is an integer that lets you specify the maximum number of elements to return.

//split(delimiter)
var message = "Welcome to jQuery4u"
//word[0] contains "We"
//word[1] contains "lcome to jQuery4u"
var word = message.split("l")

12.substr(start, [length]): This function returns the characters in a string beginning at ???start??? and through the specified number of characters, ???length???. ???Length??? is optional, and if omitted, up to the end of the string is assumed.

//substring(from, to)
var text = "excellent"
text.substring(0, 4) //returns "exce"
text.substring(2, 4) //returns "ce"

13.substring(from, [to]): It returns the characters in a string between ???from??? and ???to??? indexes, NOT including ???to??? itself. ???To??? is optional, and if omitted, up to the end of the string is assumed.
//substring(from, [to])
var myString = 'javascript rox';
myString = myString.substring(0, 10);
console.log(myString)
//output: javascript

14.toLowerCase(): This will return the string with all of its characters converted to lowercase.

//toLowerCase()
var myString = 'JAVASCRIPT ROX';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript rox

15.toUpperCase(): This will return the string with all of its characters converted to uppercase.

//toUpperCase()
var myString = 'javascript rox';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT ROX

16. includes(): It is used to check whether a string contains the specified string or characters.

//includes()
var mystring = "Hello, welcome to edureka";
var n = mystring.includes("edureka");
//output: True

17. endsWith(): This function checks whether a string ends with specified string or characters.

//endsWith()
var mystr = "List of javascript functions";
var n = mystr.endsWith("functions");
//output: True

18. repeat(): This returns a new string with a specified number of copies of an existing string.

//repeat()
var string = "Welcome to Edureka";
string.repeat(2);
//output: Welcome to Edureka Welcome to Edureka

19. valueOf():  It is used to return the primitive value of a String object.

//valueOf()
var mystr = "Hello World!";
var res = mystr.valueOf();
//output: Hello World!

20. trim():This function removes whitespace from both ends of a string.

//trim()
var str = "     Hello Edureka!     ";
alert(str.trim());



//***************************************** Clousers **********************************/
// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
// lexical scope:

// A closure is the combination of a function bundled together(enclosed) with references to its surrounding state(the lexical environment).In other words, a closure gives you access to an outer function's scope from an inner function.

// Another words : call function inside function.

// Example #1
const sum = function (a) {
    console.log("Hello WOrld " + a);
    let c = 4;
    return function (b) {
        return a + b + c;
    }
}

var store = sum(2); // calling function
var d = store(5); // store is inner funtion (returned by sum)
console.log(d);

// In other language function and other inside function variable only execute one time (variable value not retain for next execution), but in JS inside function variable (a and c) will retain and this is called clouser and scope of variable (a and c) is called lexical scope.

// Example #2

var sum = function (a, b, c) {

    // we can return multiple function in key-value form.
    return {
        sumTwoNumber: function () {
            return a + b;
        },
        sumThreeNumber: function () {
            return a + b + c;
        }
    };
}
var store = sum(3, 4, 5);

console.log(store.sumTwoNumber());
console.log(store.sumThreeNumber());

// We can return multiple function inside one function and lexixal scope will work for all.
var store1 = sum(7, 8, 9);

console.log(store1.sumTwoNumber());
console.log(store1.sumThreeNumber());
// We can also use same function n number of times with diffrent parameters and its work properly.

/***********************************Async JS*************************************/
// Callbacks, Promises, Async & Await
// Example #1
//*************
const datas = [
    { name: "Ram", profession: "SE" },
    { name: "Shayam", profession: "SE" }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`; // Use $ to get Dynamic value of variable inside template literals.
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createDatas(newdata) {
    setTimeout(() => {
        datas.push(newdata);
    }, 2000);
}

getDatas();
createDatas({ name: "Vivek", profession: "SE" });

// Issue of above example getDatas have 1 second timeout and createDatas have 2 second timeout so that newdata not append in datas. we can solve this problem to increase timeout in getDatas. But we can also solve this with help of "Callbacks"

const datas = [
    { name: "Ram", profession: "SE" },
    { name: "Shayam", profession: "SE" }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`; // Use $ to get Dynamic value of variable inside template literals.
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createDatas(newdata, callbacks) {
    setTimeout(() => {
        datas.push(newdata);
        callbacks(); // Name can be anything like callback1 ...
    }, 2000);
}

createDatas({ name: "Vivek", profession: "SE" }, getDatas);

// Here we have solve above issue with callback, (pass getDatas as callback inside createDatas and after push new object in datas we will call getDatas. here without changing timeout value we can use code. this is main use of callbacks. "we can pass whole function as argument in another function".


//***********************Promises*******************/
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Example #1

const datas = [
    { name: "Ram", profession: "SE" },
    { name: "Shayam", profession: "SE" }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`; // Use $ to get Dynamic value of variable inside template literals.
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createDatas(newdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newdata);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject("Kuch to error hai...");
            }
        }, 2000);
    });

}

createDatas({ name: "Vivek", profession: "SE" })
    .then(getDatas)
    .catch(err => console.log(err));

// if promiss return true then, then will call, otherwise catch will handle errors.
// We can also use Promise inplace of callbacks.
// We can call multiple then() one by one and also use catch for handle errors.
// We can create new Promise with help of Primise keyword/function, but Async/Await always returns Promise without Promise keyword.

//*********************** Async & Await *******************/

// In (Async & Await) always return Promise and call function run asynchronously and not wait for completion.

async function datas() {
    console.log("first console");
    const response = await fetch('https://api.github.com/users');
    console.log("API called");
    const users = await response.json();
    console.log("users resolved");
    return users;
}

console.log("Before calling async");
let a = datas();
console.log("After calling function datas");
a.then(data => console.log(data)).catch(err => console.log(err));
console.log("Run this file in HTML file, brower console not support fetch due to cors error");

// When we add/write "async" before name of function then whole function return Promise.
// When cursor/pointer read "await" inside "async function" cursor/pointer move/return back from function and read next lines of js file, and after sometime back inside  "async function" and check response of await.
// Means code will wait for "await" function complete and run after completing rest of the task.

//*************************** Error Handling (try / catch block) *************************/

try {
    // writeSomeToGetErrorInCode
    function
} catch (error) {
    throw new Error(error); // throw error if we get in code.
    console.log("Testing try/catch." + error); // show error in console as text not error.
}
finally {
    console.log("Finally will always run, if executed 'try' or 'catch' any case.");
}
// With the help of try/catch we can track error and stop code break.

//****************************** Apply , call and Bind *****************************/

// Example #1

let userDetails = {
    name: "Raushan Tiwari",
    age: 32,
    designation: "Software Engineer",

}

let printDetails = function (state, country) {
    console.log(this.name + " " + state + " " + country);
}
printDetails.call(userDetails, "Noida", "India"); // We can pass any number of arguments in call();

let userDetails2 = {
    name: "Anuj Tiwari",
    age: 25,
    designation: "Software Engineer",
}
// function borrowing
printDetails.call(userDetails2, "delhi", "India");
// call is magic function: With the call() method, you can write a method that can be used on different objects.
// we do not need to define function (printDetails) each time for same type of use case (object), just share diffrent object
// with help of call function.

//# Example #1 (Apply)
let userDetails = {
    name: "Raushan Tiwari",
    age: 32,
    designation: "Software Engineer",

}

let printDetails = function (state, country) {
    console.log(this.name + " " + state + " " + country);
}
printDetails.apply(userDetails, ["Noida", "India"]);

// We can also use "Apply" instead of "call", both have minor diffrence based on use case we can use.

// Diffrence between call and apply : we can pass n number of arguments in call(), but we can pass list (array) as argument. both have same output.

// Example #1 (bind)

let userDetails = {
    name: "Raushan Tiwari",
    age: 32,
    designation: "Software Engineer",

}
let printDetails = function (state, country) {
    console.log(this.name + " " + state + " " + country);
}
let funcStore = printDetails.bind(userDetails, "Noida", "India");
funcStore();
console.log(funcStore);

// With the help of bind() we can create copy of our function and we can invoke later.

/************************** Memoization ***********************/
// Implementing Memoization in JavaScript.
// Memoization is Optimization techniques that can be used to reduce.
// time-consuming calculations by saving previous input to something called cache and
// returning the result from it.

let sum = 0;
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// console.time();
// console.log(calc(5));
// console.timeEnd();

const memoize = (func) => {
    let cache = {};
    return function (...args) {
        let n = args[0];
        if (n in cache) {
            console.log("cache");
            return cache[n];
        } else {
            let result = func(n);
            console.log("calculating fist time");
            cache[n] = result;
            return result;
        }
    }
}
// First call...
console.time();
const effcient = memoize(calc);
console.log(effcient(5));
console.timeEnd();
// Second call... (to check caching and reuability).
console.time();
console.log(effcient(6));
console.timeEnd();

// Save this program in .JS file and call from terminal like ($ node hello.js)

// memoize is function accept function as argument and it's return as function (same behave like clouser). so that we need to store memoize value in variable (efficient) and call "efficient" as function with arguments. this arguments will use in inside function of memoize.

// jab bhi koi function ek dusra funtion return karega to usko variable store karna padega, resulted function ko call karne ke liye. like above example.


/********************************* Debouncing ************************************/

// Debouncing not provied by javaScript, but we can achive via setTimeOut function.
// Example: autocomplete, window resizing, scrolling etc... many more time we can use debouncing,
// to reduce unwanted function call.

// Example #1 --- Autocomplete example
// HTML File
<html>
    <body>
        <input type="text" id="search" onchange="getData()" />
    </body>
</html>

// JS

let counter = 0;
function getData() {
    console.log("fetching Data " + counter++);
}

function myDebounce(call, d) { // clouser example function return function.
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            call();
        }, d);
    }
}

const betterFunction = myDebounce(getData, 1000); // function return function, isly variable me store karke inside function (returned function) ko call karna padega.

/******************** Currying ************************/
// Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
// Normal way

function Addtion(a, b, c) {
    return a + b + c;
}
Addtion(3, 4, 5); //Output : 12

// Example #1 Clouser-
function Addtion(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// Old techniques
let a1 = Addtion(2);
let b1 = a1(4);
let c1 = b1(5);

console.log(c1); // output : 11

// jab function ek dusra function return karta hai to uske result ko variable me store karke , usse inside function ko call karte hai, isi ko clouser bolte hai and all variable will available withing all inside functions scope this is called laxical scope.

//New techniques (currying)

let a1 = Addtion(2)(4)(5); // Output: 11


/***************************** Infinite currying ***************************/

// Example #1

function add(a) {
    return function (b) {
        if (b) {
            return add(a + b);
        }
        return a;
    }
}
console.log(add(4)(5)(6)(7)(8)(9)(9)());

/**************************Hoisting in JavaScript ************************/
// Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
// Hoisting is mainly related to memory management. "Even before the code start executing memory will allocating to each and every variable and functions."

console.log(x); // output: undefined (undefined is kind of placeholder when no value defined for any variable then JS will defined variable value in memory as undefined.)

console.log(getName()); //output: Hello world

var x = 7;

function getName() {
    console.log("Hello world");
}

// When we add debugger on line number 1 in JS (browser source file) file here no code will executed but global Scope will display and in console and we can all variable and function are defined in global scope and memory.

/***************** Event Bubbling & Capturing *******************/

// Stop Propagation, Immediate Propagation & Prevent Default.

<html>
    <title>Event Bubbling & Capturing</title>
    <body>
        <div>
            <button>Click Me</button>
        </div>
    </body>

</html>

// Event bubbling is working from child to parent (button->div->body->html)
// Example #1
var div = document.querySelector("div");

div.addEventListener("click", () => {
    console.log('div');
});

// output : div
// Here we will click on button, but button propagate the event to own parent(div) and div has eventlistner, this is called event bubbling.
// Example #2
var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", () => {
    console.log('div');
});

button.addEventListener("click", () => {
    console.log('button');
});

// Output: button div (first child will run and then parent will run)

//******** Capturing : Capturing is working parent to child.

// Example #1
var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", () => {
    console.log('div');
},true); // if we pass true then it will work as capturing otherwise bubbling

button.addEventListener("click", () => {
    console.log('button');
},true);

// OutPut: div button (First parent and then child)

//************* Stop Propagation
// Example: #1
var button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.stopImmediatePropagation()
    event.stopPropagation(); // if we want to click only on button not parent div, then we need to do.
    console.log('button');
});
// if we want to click only on button not parent div or (other parents), then we need to StopPropagation on button click.

//************* Immediate Propagation : if we have 3 event (click) listner on same button and if we want stop 3'rd event listner then we need to add evnt.stopImmediatePropagation() in second listner, then 3'rd listner will not exeecute.

//************** preventDefault : To stop default behaviour of any element, like after click on <a> tag opens new tab always, but with help of preventDefault() we can stop this.

//********************** The "use strict" Directive ***************/

// "use strict"; Defines that JavaScript code should be executed in "strict mode".

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// Strict mode makes it easier to write "secure" JavaScript.

// Strict mode does not allow undeclared variables.

// Example #1
"use strict";
myFunction();

function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
}
//*************** typeof ********************/

typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
typeof function myFunc() { }   // Returns "function"

//****************************** ***************************************/
