const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://abhisingh3132_cohort:Cohort_2@cluster0.qz24pt9.mongodb.net/username"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  // Read the user data
  const userExist = await User.findOne({ email: username });

  if (userExist) {
    res.send("User already exist");
  }

  //  Write the user data
  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    msg: "data save",
  });
  console.log("done");
});

app.listen(3000);
