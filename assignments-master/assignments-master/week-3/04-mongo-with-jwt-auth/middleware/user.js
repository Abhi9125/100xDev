const jwt = require("jsonwebtoken");
const { jwt_Secret } = require("../config");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const get_token = req.headers.authorization;
  const sprate_token = get_token.split(" ");
  const token = sprate_token[1];

  const decodeToken = jwt.verify(token, jwt_Secret);

  if (decodeToken.username) {
    req.username = decodeToken.username;
    next();
  } else {
    res.json({
      msg: "Token invilid",
    });
  }
}

module.exports = userMiddleware;
