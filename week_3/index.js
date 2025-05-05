const express = require("express");

const app = express();
app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const pass = req.headers.password;
  console.log(username, pass);
  const kidneyid = req.query.kidneyId;
  console.log(kidneyid);
  if (username != "abhi" || pass != "pass") {
    res.json({
      msg: "Invilid user Auth",
    });
    return;
  } else if (kidneyid != 1 || kidneyid != 2) {
    res.json({
      msg: "Wrong input",
    });

    return;
  }
  res.json({
    msg: "Your Kidney is fine",
  });
});
app.listen(3000);
