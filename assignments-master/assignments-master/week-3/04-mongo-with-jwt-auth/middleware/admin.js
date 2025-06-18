const jwt = require("jsonwebtoken");
const { jwt_Secret } = require("../config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const get_token = req.headers.authorization;
  const sprate_token = get_token.split(" ");
  const token = sprate_token[1];
  console.log(token);

  const decodeToken = jwt.verify(token, jwt_Secret);
  console.log(decodeToken);
  if (decodeToken.username) {
    next();
  } else {
    res.json({
      msg: "Token invilid",
    });
  }
}

module.exports = adminMiddleware;
