const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const username = req.headers.username;
  const password = req.headers.password;

  const result = await User.findOne({
    username: username,
    password: password,
  });
  if (result) {
    next();
  } else {
    res.status(403).json({
      msg: "User username and password may be wrong",
    });
  }
}

module.exports = userMiddleware;
