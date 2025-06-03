const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;

  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Send wrong input",
    });
    return;
  }

  // Save the todo in mogodb
});

app.get("/todo", function (req, res) {});

app.put("/complete", function (req, res) {
  const updatePayload = req.body;

  const updateParsePayload = updateTodo.safeParse(updatePayload);

  if (!updateParsePayload.success) {
    res.status(411).json({
      msg: "wrong id provided",
    });
    return;
  }

  //   update the DB date done
});

app.listen(3000);
