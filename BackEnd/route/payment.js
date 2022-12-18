const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config({ path: "config.env" });

const paymentRoute = express.Router();

const api = process.env.API;

// order api
paymentRoute.post(`/api/payment/orders`, async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });
    const options = {
      amount: 50000,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };
    instance.orders.create(options, (error, order) => {
      if (error) {
        return res.status(400).send("Something went wrong");
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    return res.status(400).send("somethig went wrong");
  }
});

// payment verify api
paymentRoute.post(`/api/payment/verify`, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Payment declined" });
    }
  } catch (error) {
    res.status(400).send("somethig went wrong");
  }
});

module.exports = paymentRoute;
