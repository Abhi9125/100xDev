import express from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/user", async (req, res) => {
  const { name, age, address } = req.body;
  try {
    await prisma.user.create({
      data: {
        name,
        age,
        address,
      },
    });

    res.json({
      message: "user Added",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

app.get("/user", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({
    users,
  });
});

app.listen(3000);
