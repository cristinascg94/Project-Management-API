const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  return jwt.sign(data, process.env.SECRET_JWT, { expiresIn: "1h" });
};
const verifyToken = (token) => {
  console.log(token);
  return jwt.verify(token, process.env.SECRET_JWT);
};

module.exports = { generateToken, verifyToken };
