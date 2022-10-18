const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "config.env" });
const customer = require("../model/customerUser");

const customerUserRoute = express.Router();

//api
const api = process.env.API;

// secret key for generating json web token
const secret_key = process.env.SECRET_KEY;

// creating apis

// user sign up api
customerUserRoute.post(
  `${api}/signup`,
  [
    body("FirstName", "Enter a valid name").not().isEmpty(),
    body("LastName", "Enter valid LastName").not().isEmpty(),
    body("email", "Enter valid Email").isEmail(),
    // password must be at least 5 chars long
    body("password", "Password must be 6 characters long").isLength({ min: 6 }),
    body("confirmPassword", "Password must be 6 characters long").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    let success = false;
    // console.log("sign in user", req.body);

    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors
          .array()
          .map((err) => {
            return err.msg;
          })
          .join(", "),
      });
    }
    try {
      const { FirstName, LastName, email, password, confirmPassword, role } =
        req.body;

      // comparing password and confirm password

      // if (password !== confirmPassword) {
      //   return res
      //     .status(400)
      //     .send("Password and Confirm Password must be same");
      // }

      // finding the if the user is already there
      const registeredUser = await customer.findOne({ email: email });

      //   generating encrypted password
      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(password, salt);
      const securePass2 = await bcrypt.hash(confirmPassword, salt);
      // registering the user
      if (!registeredUser) {
        if (securePass !== securePass2) {
          return res
            .status(400)
            .json({ error: "Password and confirm password must be same" });
        }

        const user = await customer.create({
          FirstName,
          LastName,
          email,
          password: securePass,
          confirmPassword: securePass,
          role,
        });
        const data = {
          user: {
            id: user._id,
          },
        };
        const token = jwt.sign(data, secret_key);
        success = true;
        return res.status(200).json({ success, user, token });
      }
      return res.status(400).send({ success, error: "User is already there" });
    } catch (error) {
      // console.log("user signup", error);
      return res.status(400).json({ error: "something went wrong" });
    }
  }
);

// user log in api
customerUserRoute.post(
  `${api}/login`,
  [
    body("email", "Enter valid Email").isEmail(),

    // password must be at least 6 chars long
    // body("password", "Password must be 6 characters long").isLength({ min: 6 }),
  ],
  async (req, res) => {
    success = false;
    const { email, password } = req.body;

    const errors = validationResult(req);
    // console.log(req.body);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors
          .array()
          .map((err) => {
            return err.msg;
          })
          .join(", "),
      });
    }
    try {
      const registeredUser = await customer.findOne({ email: email });
      console.log(registeredUser);

      if (!registeredUser) {
        success = false;
        return res.status(400).json({ success, error: "User  not registered" });
      }

      //   comparing passwords
      const comparePass = await bcrypt.compare(
        password,
        registeredUser.password
      );
      // console.log(comparePass);
      // console.log(registeredUser.password);

      if (!comparePass) {
        return res.status(400).json({ error: "Enter correct password" });
      }
      // console.log("user logged in");
      const data = {
        registeredUser: {
          id: registeredUser._id,
        },
      };

      //   generating user token
      const token = jwt.sign(data, secret_key);
      // console.log("token from login", token);
      success = true;
      return res.status(200).json({ success, token, registeredUser });
    } catch (error) {
      // console.log("usersignuperror", error);
      return res.status(400).json({ error: "something went wrong" });
    }
  }
);
module.exports = customerUserRoute;
