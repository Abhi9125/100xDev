const express = require("express");
const { authMiddleware } = require("../middleware");
const { account } = require("../db");
const mongoose = require("mongoose");

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async function (req, res) {
  const accountDetails = await account.findOne({
    userId: req.userId,
  });

  return res.json({
    balance: accountDetails.balance,
  });
});

accountRouter.post("/transfer", authMiddleware, async function (req, res) {
  const session = await mongoose.startSession();

  session.startTransaction();
  const { amount, to } = req.body;

  //   Fetch the accounts within the transations
  const accountDetails = await account
    .findOne({
      userId: req.userId,
    })
    .session(session);

  // check the balace and account is availabale or not
  if (!accountDetails || accountDetails.balance < amount) {
    await session.abortTransation();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  //   Account to transfer the money
  const toAccount = await account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransation();
    return res.status(400).json({
      message: "Invalid Account",
    });
  }

  //   Perform the transation

  await account
    .updateOne({ userId: req.userId }, { $inc: { balance: -amount } })
    .session(session);
  await account
    .updateOne({ userId: to }, { $inc: { balance: amount } })
    .session(session);

  // commit the transaction
  await session.commitTransaction();

  res.json({
    message: "Transfer successful",
  });
});
module.exports = accountRouter;
