// Variables = If we want to store the information about the user like age , email, address ,phone-number,id, and other details we have to store them into the variables .so there are 3 ways to declares variables in java script let us see in the below file.

// Var=variables declared with var is an old tradition way which has not recommended now beacsue there are some issues with var . var is not a block scoped we will un derstand about scoping later.variable decalred with var has allocated memory in window main memory.

var age = 10;
var email = "manishkumar1234@gmail.com";
var isLoggedIn = true;
var locationAddress = "New Delhi Chirag Delhi";
// console.table([age,email,isLoggedIn,locationAddress]);

// Let = using let for declaring variables is new syntax of javascript which has been launched by ecmascript . if we decalred variables with let they are allocated there memory outside the window object .let are block scoped.
let name = "manish";
let course = "DSA";

// Const = const are used to store the information which cannot changed . it is also newer syyntax of javascript it is also allocated memory in outside the window object;
const userId = 23456789;
const userAccountCreatingYear = 2002;

// Diffrence between Var Let;
if (true) {
  var x = 10; // Accessible outside the if block
  let y = 20; // Not accessible outside the if block
}
console.log(x); // 10
console.log(y); // Error: y is not defined becuase it is not in the global scope it is in block scope

// var: You can re-declare the same variable in the same scope.
var x = 10;
var x = 20; // No error
console.log(x); // 20

// let: Re-declaration in the same scope is not allowed.
let y = 10;
let y = 20; // SyntaxError: Identifier 'y' has already been declared

// const: Re-declaration in the same scope is not allowed.
const a = 10;
const a = 20;
