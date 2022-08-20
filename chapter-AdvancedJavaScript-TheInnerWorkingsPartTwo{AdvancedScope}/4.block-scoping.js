// Block Scoping & var -> Block Scoping has No Effect on var ony on function scope
// and Global Scope
// var name = "Clint";

// {
//   var name = "Guardian";
//   console.log(name);
// }

// console.log(name);

// block Scoping  & let ––>> has effect to block scope, in any scope they are,
// they create a scope for themselves, and of course to Global scope if they are used
// there

// var name = "Clint";

// {
//   let name = "Guardian";
//   console.log(name);
// }

// console.log(name);

// block Scoping & const  ––>> has effect to block scope, in any scope they are,
// they create a scope for themselves, and of course to Global scope if they are used
// there

var name = "Clint";

{
  const name = "Guardian";
  console.log(name);
}

console.log(name);
