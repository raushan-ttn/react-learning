import React from "react";

// Using rest operator, create a function to add the numbers.

// Example 1
const sumNumbers = (...args) => {
    let result = 0;
    args.forEach((number) => {
        result += number
    })
    return result;
}
console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7));

//  Example 2
const sumNmbers = (...numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(sumNmbers(1,33,"34"));

export default sumNumbers;