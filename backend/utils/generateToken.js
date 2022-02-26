const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const JWT_secret="pratham$1122";
  return jwt.sign({ id }, JWT_secret, {
    expiresIn: "30d",
  });
};

module.exports =  generateToken;
