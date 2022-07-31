let sentence = "The Quick brown fox jumps over the lazy dog";

// Example 1 ==> Matching a word in a sentence (case-sensitive) (the Test method)

// let reg1x = /dog/;
// let search1Result = reg1x.test(sentence);
// console.log(search1Result); // true

// Example 2 -> Matching for Multiple Words (OR|) (case-sensitive) (the test method)

// //let reg2x = /dog|fox|brown/;
// let reg2x = /dog|cat|blue/; // we still get true because dog exist
// let search2Result = reg2x.test(sentence);
// console.log(search2Result); // true

// Example 3 -> i Ignores the case-sensitiveness (using the i flag) (the test method)

// let reg3x = /quick/i;
// let search3Result = reg3x.test(sentence);
// console.log(search3Result); // true

// Example 4 -> Getting the matched word (the match method)
// let reg4x = /fox/i;
// let reg4x = /box/i; // null
// let search4Result = sentence.match(reg4x);
// console.log(search4Result); // result []

// Example 5 -> Getting the matched words (using the g flag) (the match method) g flag give us all the occurrences

// let reg5x = /the/gi;
// let search5Result = sentence.match(reg5x);
// console.log(search5Result); // ['The', 'the']

// Example 6 -> Getting the matched words with the dot (the match method)

// let reg6x = /.o./g;
// let reg6x = /./g; // grabs all the letters
// let search6Result = sentence.match(reg6x);
// console.log(search6Result); // ['row', 'fox', ' ov', 'dog']

// Example 7 -> Getting the matched characters with [] (the match method)

// let reg7x = /[bdh]/g;
// let search7Result = sentence.match(reg7x);
// console.log(search7Result); // ['h', 'b', 'h', 'd']

// Example 8 -> Getting the matched characters of alphabet with [] (the match method)

let reg8x = /[a-z]/gi;
let search8Result = sentence.match(reg8x);
console.log(search8Result); // ['T', 'h', 'e', 'Q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', 'o', 'g']
