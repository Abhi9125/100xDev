//--------------------Pick and Partial-------------------------

/* interface User {
  name: string;
  age: number;
  username: string;
  password: string;
}

// pick
type updateProps = Pick<User, "name" | "age" | "password">;


// Partial
type updatePropsOptional = Partial<updateProps>;
function sumofAge(user: updateProps) {
  return user.age;
}

console.log(
  sumofAge({
    name: "abhi",
    age: 25,
    password: "xyz",
  })
); */

// ReadOnly -----------------------------------------
/* interface Config {
  readonly endpoint: string;
  readonly apikey: string;
}

const config: Readonly<Config> = {
  endpoint: "google.com",
  apikey: "akhdfhdh2323",
}; */

// Map-----------------------------------------------

interface User {
  id: string;
  name: string;
}

const userMap = new Map<string, User>();

userMap.set("@1", { id: "@1", name: "ahhi" });
userMap.set("@2", { id: "@2", name: "Akhand" });

console.log(userMap.get("@1"));
