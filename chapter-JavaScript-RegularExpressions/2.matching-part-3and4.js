let sentence =
  "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () []";

//-------------------------------------------------------------------------
// Example 9 -> Getting the matched numbers & characters of alphabet with [] (the match method)

// /[1-3x-z]/gi grabbing nums from 1 to 3 including 1&3 and letters from x to z including x&z
// let reg9x = /[1-3x-z]/gi;
// let search9result = sentence.match(reg9x);
// console.log(search9result);

// -------------------------------------------------------------------------------
// Example 10 -> Getting NOT the matched numbers & characters with [] (the match method) -> Negated Character Sets // caret symbol ^

// g grab all occurrences // i ignore the case sensitiveness
// let reg10x = /[^1-9a-v ]/gi; // get everything except the ones included in []
// let search10result = sentence.match(reg10x);
// console.log(search10result);

// -------------------------------------------------------------------------------
// Example 11 -> Getting the matched numbers & characters that occur one or more times

// let reg11x = /l+/g;
// let search11result = sentence.match(reg11x);
// console.log(search11result); // ['l', 'll', 'lll']

// -------------------------------------------------------------------------------
// Example 12 -> Getting the matched characters that occur zero or more times

// let anotherSentence = "goooooogle";

// let reg12x = /go*/;
// let search12result = anotherSentence.match(reg12x);
// console.log(search12result); // ['goooooooooo', index: 0, input: 'goooooooooogle', groups: undefined]

// -------------------------------------------------------------------------------
// Example 13 -> Getting the matched characters with lazy matching ?

// grabs the first occurrence of that /T.*?/
// let reg13x = /T.*?/;
// let search13result = sentence.match(reg13x);
// console.log(search13result); // ['T', index: 0, input: 'The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 ove…51 lazy 103 dog really reallly @ The %% & * () []', groups: undefined]

// -------------------------------------------------------------------------------
// Example 14 -> Matching the beginning string patterns

// let reg14x = /^The/;
// let search14result = sentence.match(reg14x);
// console.log(search14result);

// -------------------------------------------------------------------------------
// Example 15 -> Matching the ending string patterns

// let reg15x = /The$/i;
// let search15result = sentence.match(reg15x);
// console.log(search15result);

// -------------------------------------------------------------------------------
// Example 16 -> Matching all letters & numbers & _

// let reg16x = /\w/g; // lowercase w matches a-z & 0-9 && _
// let search16result = sentence.match(reg16x);
// console.log(search16result);
