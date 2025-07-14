const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhisingh3132_cohort:Cohort_2@cluster0.qz24pt9.mongodb.net/todos"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
