"use strict";
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
console.log(sumofAge({
    name: "Abhi",
    age: 25,
}, {
    name: "Akhand",
    age: 22,
}));
