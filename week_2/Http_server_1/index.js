const express = require("express");

const app = express();

app.use(express.json());

var user = [
  {
    name: "John",
    kidneys: [
      {
        kidneyhealth: true,
      },
      {
        kidneyhealth: true,
      },
      {
        kidneyhealth: true,
      },
    ],
  },
];

// Get rout - - User can check how many kidneys they have and their health
app.get("/", function (req, res) {
  let TotalnumberOfKidney = user[0].kidneys.length;
  let healthlyKidney = [];
  for (let i = 0; i < TotalnumberOfKidney; i++) {
    if (user[0].kidneys[i].kidneyhealth) {
      healthlyKidney.push(user[0].kidneys[i]);
    }
  }

  const unhealthlyKidney = TotalnumberOfKidney - healthlyKidney.length;
  res.send(
    `Number of kidney = ${TotalnumberOfKidney}, healthlyKidney = ${healthlyKidney.length} , unhealthlyKidney = ${unhealthlyKidney}`
  );
});

// POST - User can add a new kidney
app.post("/", function (req, res) {
  const data = req.body;

  console.log(data);

  console.log(user[0].kidneys);
  user[0].kidneys.push(data);
  console.log(user[0].kidneys);

  res.send("Done");
});

// PUT - User can replace a kidney, make it healthy

app.put("/", function (req, res) {
  let TotalnumberOfKidney = user[0].kidneys.length;
  let healthlyKidney = [];
  for (let i = 0; i < TotalnumberOfKidney; i++) {
    if (user[0].kidneys[i].kidneyhealth) {
      healthlyKidney.push(user[0].kidneys[i]);
    }
  }

  if (TotalnumberOfKidney != healthlyKidney.length) {
    for (let i = 0; i < user[0].kidneys.length; i++) {
      if (user[0].kidneys[i].kidneyhealth == false) {
        user[0].kidneys[i].kidneyhealth = true;
      }
    }
    res.send("Update Done");
  } else {
    res.status(411).send("You have no bad kidney");
  }
});

// DELETE - User can remove a kidney

app.delete("/", function (req, res) {
  if (user[0].kidneys.length > 0) {
    const healthlykidneyArr = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
      if (user[0].kidneys[i].kidneyhealth) {
        healthlykidneyArr.push(user[0].kidneys[i]);
      }
    }

    user[0].kidneys = healthlykidneyArr;

    res.json({
      msg: "Remove all unhealthy kidney",
    });
  } else {
    res.send("Kidney not available");
  }
});
app.listen(3000);
