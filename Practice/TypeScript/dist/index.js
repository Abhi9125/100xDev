"use strict";
// function greet(name: string): void {
//   console.log(name);
// }
// greet("abhi");
Object.defineProperty(exports, "__esModule", { value: true });
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
var direction;
(function (direction) {
    direction[direction["Up"] = 1] = "Up";
    direction[direction["Down"] = 2] = "Down";
    direction[direction["Left"] = 3] = "Left";
    direction[direction["Right"] = 4] = "Right";
})(direction || (direction = {}));
function doSomething(keyPressed) {
    console.log(keyPressed);
}
doSomething(direction.Up);
function firstEle(arr) {
    return arr[0];
}
let str = firstEle(["ab", "dj"]);
console.log(str.toUpperCase());
function pair(key, value) {
    return [key, value];
}
const result = pair("id", 123);
console.log(result);
//# sourceMappingURL=index.js.map