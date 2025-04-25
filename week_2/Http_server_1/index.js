const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Use parse for parshing the post data in JSON to STRING
// app.use(bodyParser.json());

function squire(n) {
  return n * n;
}

app.get("/", function (req, res) {
  const val = req.query.n;

  const squireVal = squire(val);
  console.log(val);
  res.send(squireVal + "");
});

// Post request
// app.post("/post-request", (req, res) => {
//   console.log(req.body);
//   //   console.log(req.headers);

//   res.send("parse sussfully");
// });

app.listen(3000);
