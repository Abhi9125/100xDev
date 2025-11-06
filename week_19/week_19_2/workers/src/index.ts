import { createClient } from "redis";

const client = createClient();

async function processSubmission(submission: string) {
  const { problemId, code, language } = JSON.parse(submission);

  console.log("problemId", problemId);
  console.log("code", code);
  console.log("language", language);

  await new Promise((res, rej) => {
    setTimeout(res, 1000);
  });

  console.log(`Finished processing submission for problemId ${problemId}.`);
}

async function startWorker() {
  try {
    await client.connect();
    console.log("Worker connected to redis");

    //Mian loop
    while (true) {
      try {
        const submission = await client.brPop("problems", 0);

        const res = await processSubmission(submission.element);

        console.log(res);
      } catch (err) {
        console.log("Error PRocessing the submmision");
      }
    }
  } catch (err) {
    console.log("error conneting the redis");
  }
}

startWorker();
