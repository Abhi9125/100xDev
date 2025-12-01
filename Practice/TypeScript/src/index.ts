// function greet(name: string): void {
//   console.log(name);
// }
// greet("abhi");

// function cal(a: number, b: number): number {
//   return a + b;
// }

// console.log(cal(3, 5));

// function takeFn(fn: () => void): void {
//   setTimeout(() => fn(), 5000);
// }

// takeFn(function () {
//   console.log("run after 1 sec");
// });

// interface User {
//   name: string;
//   age: number;
//   address: string;
// }

// const user = {
//   name: "abhi",
//   age: 19,
//   address: "rbgj",
// };

// function isLegal(obj: User): boolean {
//   if (obj.age >= 18) return true;
//   return false;
// }

// console.log(isLegal(user));

// // Array

enum direction {
  Up = 1,
  Down,
  Left,
  Right,
}

function doSomething(keyPressed: direction) {
  console.log(keyPressed);
}

doSomething(direction.Up);

function firstEle<T>(arr: T[]): T {
  return arr[0];
}

let str = firstEle(["ab", "dj"]);

console.log(str.toUpperCase());

function pair<K, V>(key: K, value: V) {
  return [key, value];
}

const result = pair("id", 123);
console.log(result);
