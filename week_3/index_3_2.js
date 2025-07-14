const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://abhisingh3132_cohort:Cohort_2@cluster0.qz24pt9.mongodb.net/username"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

async function userExists(username) {
  // should check in the database
  const isUserExist = await User.findOne({ username: username });

  return isUserExist;
}

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  const user = new User({ name: name, username: username, password: password });

  const existingUser = await userExists(username);
  if (existingUser) {
    return res.json({
      msg: "user already exist",
    });
  }

  user.save();

  return res.json({
    msg: "user data add successfully",
  });
});

app.post("/signin", async function (req, res) {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await userExists(username);

  if (!existingUser) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db go to sign up ",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database

    console.log(username);
    const alluser = await User.find();
    console.log(alluser);

    const otherUser = alluser.filter((obj) => obj.username !== username);

    res.json({
      user: otherUser,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
