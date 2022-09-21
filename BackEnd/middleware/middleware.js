const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "config.env" });

const secret_key = process.env.SECRET_KEY;

const getUserId = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log("token from middleware", token);

  if (!token) {
    return res.status(400).send("User not logged in");
  }
  try {
    const userId = jwt.verify(token, secret_key);
    req.userId = userId.registeredUser.id;
    // console.log(id);
    next();
  } catch (error) {
    console.log("middleware error", error);
    return res.status(500).send("Internal server error");
  }
};
module.exports = getUserId;
