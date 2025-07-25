/* Slide - 2 code */

// let x: number = 101;
// x = "anhi";
// console.log(x);

// ----------------------
/* Slide - 4 */

// Problem - 1 - greet

/* 
function greet(firstName: string) {
  console.log("hello", firstName);
}

greet("Rahul"); */

// ---------------------------------
// Problem - 2 - sum of 2 number

/* function sum(a: number, b: number) {
  return a + b;
}

const value: number = sum(9, 1);

console.log(value);
 */

// ---------------------------------------
// Problem - 3 -Check is 18 o rnot learn Type Interference

// function adult(a: number) {
//   if (a > 18) return true;
//   return false;
// }

// const isAdult = adult(20);
// console.log(isAdult);

// --------------------------------------
/* problem - 4 Create a function that takes another function as input, and runs it after 1 second.
Code; */

/* function takeFnAsArgument(Fn: () => void) {
  setTimeout(() => {
    Fn();
  }, 1000);
}

takeFnAsArgument(() => {
  console.log("Call me after 1 sec");
}); */

// Slide - 5

// Problem - 1 Chnage the target inside config file
// const greet = (name: string) => `Hello, ${name}!`;

// Slide - 6

/* Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input. */

/* interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "abhi",
  age: 18,
};

function isLegal(user: User) {
  if (user.age > 18) return true;
  return false;
}

console.log(isLegal(user1)); */

// Slide - 7

/* type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Abhi",
  age: 20,
};

console.log(user1.name); */

//1.  Union - Only done by the type

/* type a = number | string;

let a = "string";

console.log(a);
 */

// 2. Intersection

/* type emplooye = {
  name: string;
  age: number;
};

type manager = {
  name: string;
  age: number;
  task: string;
};

type User = emplooye & manager;

const user1: User = {
  name: "abhi",
  age: 25,
  task: "asdlflk",
}; */

// -----------------------------------------------

// Slide - 8

// Array in TS
/* const arr: number[] = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
 */

// Slide - 9 - Enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);
