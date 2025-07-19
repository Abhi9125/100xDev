const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhisingh3132_cohort:DbCohort25@cluster0.qz24pt9.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const bankSchema = new mongoose.mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const user = mongoose.model("User", userSchema);
const account = mongoose.model("Account", bankSchema);
module.exports = {
  user,
  account,
};
