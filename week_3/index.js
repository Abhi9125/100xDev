const express = require("express");

const app = express();

// Global middleware
app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidney = req.body.kidneys;
  const kidneyLength = kidney.length;

  res.json({
    "msg ": `Total number of kidneys ${kidneyLength}`,
  });
});

// Global catch
app.use(function (err, req, res, next) {
  res.json({
    msg: "Something went wrong",
  });
});
app.listen(3000);
