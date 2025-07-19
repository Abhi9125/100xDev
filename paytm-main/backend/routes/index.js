const express = require("express");
const userRouter = require("./user");
const { authMiddleware } = require("../middleware");
const user = require("../db");

const router = express.Router();

router.use("/user", userRouter);

module.exports = router;
