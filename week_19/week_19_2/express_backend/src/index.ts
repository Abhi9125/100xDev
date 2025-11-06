import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();

client.on("error", (err) => console.log("Redis Client Err", err));

app.post("/submit", async (req, res) => {
  const { problemId, code, language } = req.body;

  console.log(JSON.stringify({ problemId, code, language }));
  try {
    await client.lPush(
      "problems",
      JSON.stringify({ problemId, code, language })
    );

    res.status(200).send("Submission received and stored");
  } catch (err) {
    console.error("Redis Error: ", err);
    res.status(500).send("Failed to store submission");
  }
});

async function startServer() {
  try {
    await client.connect();
    console.log("connected to redis");

    app.listen(3000, () => {
      console.log("server is running");
    });
  } catch (err) {
    console.error("Failed to connect to redis", err);
  }
}

startServer();
