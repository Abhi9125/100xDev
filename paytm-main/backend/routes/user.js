const express = require("express");
const z = require("zod");
const user = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const userRouter = express.Router();

const userSchema = z.object({
  userName: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});

userRouter.post("/signup", async function (req, res) {
  const inputUser = req.body;
  const { userName, password, firstName, lastName } = req.body;

  // Validate the user
  const validUser = userSchema.safeParse(inputUser);
  console.log(validUser);
  if (!validUser.success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  // Find user
  const isUserInDb = await user.findOne({
    userName: userName,
  });

  if (isUserInDb) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const userStore = await user.create({
    userName,
    password,
    firstName,
    lastName,
  });

  const userId = userStore._id;

  const Token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  return res.json({
    message: "User created successfully",
    token: Token,
  });
});

module.exports = userRouter;
