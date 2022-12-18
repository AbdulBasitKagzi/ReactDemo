const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "config.env" });

const secret_key = process.env.SECRET_KEY;

const getUserId = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res.status(400).json({ message: "User not logged in" });
  }
  try {
    const userId = jwt.verify(token, secret_key);
    req.userId = userId.registeredUser.id;
    next();
  } catch (error) {
    return res.status(400).send("somethig went wrong");
  }
};
module.exports = getUserId;
