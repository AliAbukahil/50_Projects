// Example 27 -> Capture Groups

// let sentence = "book book";

// let reg27x = /(\w+)\s\1/;
// let reg27x = /(\w+)\s(\w+)/;

// Testing
// let regXTextResult = reg27x.test(sentence);
// console.log(regXTextResult);

// Matching
/*
\1        -> a shorthand way for repeating what is in the paranthesis
(\w+)\s\1 -> "book book"
(\w+)     -> "book"
*/

// let regXTextResult = sentence.match(reg27x);
// console.log(regXTextResult);

// *-*-*-*-*----------------------*-*-*-*-*-*-*-*-------------------------*-*-*-*-*-
let digits = "321 321 321";
// let reg27x = /^(\d+)\s\1\s\1$/;
let reg27x = /^(\d+)\s(\d+)\s(\d+)$/;

// Testing
// let regXTextResult = reg27x.test(digits);
// console.log(regXTextResult);

// Matching
/*
\1             -> a shorthand way or repeating what is in the paranthesis
(\d+)\s\1\s\1 -> "321 321 321"
(\d+)         -> "321"
*/

let regXMatchResult = digits.match(reg27x);
console.log(regXMatchResult);
