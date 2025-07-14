const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhisingh3132_cohort:Cohort_2@cluster0.qz24pt9.mongodb.net/userCard"
);

const userSchema = new mongoose.Schema({
  name: String,
  description: String,
  intrests: [],
  socialMedia: [],
});

const user = mongoose.method("user", userSchema);

module.exports = {
  user,
};
