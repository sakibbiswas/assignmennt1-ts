"use strict";
{
    // Problem-1  --> 
    const formatString = (input, toUpper) => {
        return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
    };
    console.log(formatString("Hello")); // Output: "HELLO"
    console.log(formatString("Hello", true)); // Output: "HELLO"
    console.log(formatString("Hello", false)); // Output: "hello"
}
