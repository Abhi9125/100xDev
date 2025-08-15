interface User {
  name: string;
  age: number;
}

function sumofAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

console.log(
  sumofAge(
    {
      name: "Abhi",
      age: 25,
    },
    {
      name: "Akhand",
      age: 22,
    }
  )
);
