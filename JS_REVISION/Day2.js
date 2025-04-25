console.log("hello");
let b = 20;
function some() {
  let a = 10;

  return function () {
    console.log(a, b);
  };
}

const callFn = some();
console.dir(callFn);
callFn();
