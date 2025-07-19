const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
  const authorizationString = req.headers.authorization;

  if (!authorizationString || !authorizationString.startsWith("Bearer ")) {
    return res.status(403).json({});
  }
  const Token = authorizationString.split(" ")[1];

  try {
    const decoded = JWT.verify(Token, JWT_SECRET);

    console.log("Decoded Token: == ", decoded);
    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }
};

module.exports = {
  authMiddleware,
};
