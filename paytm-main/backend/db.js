const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhisingh3132_cohort:DbCohort25@cluster0.qz24pt9.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
});

const user = mongoose.model("User", userSchema);

module.exports = user;
