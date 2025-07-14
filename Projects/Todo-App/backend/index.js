const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.post("/todo", async function (req, res) {
  const createPayload = req.body;

  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Send wrong input",
    });
    return;
  }

  // Save the todo in mogodb

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created",
  });
});

app.get("/todo", async function (req, res) {
  const todos = await todo.find();

  res.json({
    todos: todos,
  });
});

app.put("/complete", async function (req, res) {
  const updatePayload = req.body;

  const updateParsePayload = updateTodo.safeParse(updatePayload);

  if (!updateParsePayload.success) {
    res.status(411).json({
      msg: "wrong id provided",
    });
    return;
  }

  //   update the DB date done
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo mark as completed",
  });
});

app.listen(3000, () => {
  console.log("Server id runnning");
});
