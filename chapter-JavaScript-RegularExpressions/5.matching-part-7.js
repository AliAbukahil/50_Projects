let sentence =
  "The 11 Quick 65 brown 7210 fox _ 6054 jumps  32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * / google yeeeeeeeeah";

//------------------------------------------------------------------
// Example 25 ––>> check for all or none

// // let sentence2 = "colour";
// let sentence2 = "color";

// // let reg25x = /colou?r/;
// // let reg25x = /color/;
// let reg25x = /colour/;
// let search25result = reg25x.test(sentence2);
// console.log(search25result);

//------------------------------------------------------------------
// Example 26 ––>>

// *-*-*-*-*-* Positive lookahead ––> Testing for a positive condition to be true
//
// if that j has a letter in front of it (directly) a letter u
// let reg26x = /j(?=u)/; // true
// let reg26x = /j(?=m)/; // false
// let search26result = reg26x.test(sentence);
// console.log(search26result);

// *-*-*-*-*-* Negative lookahead ––> Testing for a negative condition to be true
// if after j there isn't any u
// let reg26x = /j(?!u)/; // find a j that doesn't have a u in front of it // false
let reg26x = /j(?!m)/; // true
let search26result = reg26x.test(sentence);
// let search26result = sentence.match(reg26x);
console.log(search26result);
