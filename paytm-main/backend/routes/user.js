const express = require("express");
const z = require("zod");
const user = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const userRouter = express.Router();

const signUpSchema = z.object({
  userName: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});

userRouter.post("/signup", async function (req, res) {
  const inputUser = req.body;
  const { userName, password, firstName, lastName } = req.body;

  // Validate the user
  const validUser = signUpSchema.safeParse(inputUser);

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

const signInSchema = z.object({
  userName: z.string().email(),
  password: z.string(),
});

userRouter.post("/signin", async function (req, res) {
  const inputUser = req.body;

  const { userName, password } = req.body;

  const validateSingIN = signInSchema.safeParse(inputUser);
  if (!validateSingIN.success) {
    res.status(411).json({
      message: "Invalid Input",
    });
  }

  const getUser = await user.findOne({
    userName,
    password,
  });

  if (getUser) {
    const token = jwt.sign(
      {
        userId: getUser._id,
      },
      JWT_SECRET
    );

    return res.json({
      token: token,
    });
  }

  return res.status(411).json({
    message: "Error while logging in",
  });
});

const updateSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().optional(),
});

userRouter.put("/", authMiddleware, async function (req, res) {
  try {
    const validInput = updateSchema.safeParse(req.body);

    if (!validInput.success) {
      return res.status(411).send("Invalid Input");
    }

    //   Update the userId n middleware
    const updateResult = await user.updateOne({ _id: req.userId }, req.body);

    res.status(200).json({
      message: "Updated Successfully",
    });
  } catch (err) {
    res.status(411).send("Error while updating information");
  }
});

module.exports = userRouter;
