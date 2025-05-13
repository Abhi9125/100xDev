const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://abhisingh3132_cohort:Cohort_2@cluster0.qz24pt9.mongodb.net/username"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const kitty = new User({
  name: "abhi",
  username: "abhi3132",
  password: "pass",
});
kitty.save().then(() => console.log("Data Save"));
