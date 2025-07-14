// Leaning this in js

// 1. When a function call with new keyword this point to the {} 'empty object' ex-

/* function show() {
  console.log(this);
}

new show(); */ // Showing an enpty object {}

//------------------------------------------------------------------------------------------------------
// 2. Set this by using the cal, apply and bind method
// Call, apply, bind -- use for function borrowing

/* function show(a, b) {
  console.log("name and address", this.name, this.address, a, b);
}

obj1 = {
  name: "abhi",
  address: "Rbgj",
};

obj2 = {
  name: "Akhand",
  address: "bhobal",
};
obj3 = {
  name: "xyz",
  address: "Lucknow",
};

// set this by call method the main difference in call and apply by passing the argument in call pass by , sepration and
// apply pass in array
show.call(obj1, 5, 7); //name and address abhi Rbgj 5 7
show.apply(obj2, [5, 7]); //name and address Akhand bhobal 5 7

// bind maethos bind the function with that object and return a newFn.
const newFn = show.bind(obj3);
newFn(); */ //name and address xyz Lucknow undefined undefined

//------------------------------------------------------------------------------------------
// 3. If a object function call like obj.fn so 'this' point to that object
/* const obj1 = {
  name: "abhi",
  fn: function () {
    const name = "akhand";
    console.log(this.name); //abhi bcz 'this' point obj1
  },
};

obj1.fn(); */

// ----------------------------------------------------------------------------------------
// 4. if a function call on global level "this" point to  'window' object and in strict mode 'this' point 'undefined'

// without strict mode
/* function show() {
  console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …} 
}
show(); */

// In srict mode
/* "use strict";
function show() {
  console.log(this); //undefined
} 
show(); */

let student1 = {
  name: "ashoka",
  age: 21,

  checkAge: function () {
    if (this.age > 18) {
      return true;
    }
    return false;
  },
};
